<script lang="ts">
    import { onMount } from "svelte";
    import * as d3 from "d3";

    let data = [
    { company: "AGL",      low: 11.84, medium: 17.10, high: 23.68 },
    { company: "Stanwell",        low: 21.92, medium: 31.67, high: 43.85 },
    { company: "Origin",          low: 23.56, medium: 32.33, high: 44.76 },
    { company: "EnergyAus.", low: 22.38, medium: 34.04, high: 47.13 },
    { company: "Chevron",         low: 31.11, medium: 44.94, high: 62.23 },
    { company: "Pioneer",         low: 39.36, medium: 56.86, high: 78.73 },
    { company: "CS Energy",        low: 44.57, medium: 64.38, high: 89.14 }
  ];

    const scenarios = [
        { key: "Low",    field: "low",    color: "#1f77b4" },
        { key: "Medium", field: "medium", color: "#ff7f0e" },
        { key: "High",   field: "high",   color: "#2ca02c" }
    ];

    const flat = data.flatMap(d =>
        scenarios.map(s => ({
            company: d.company,
            scenario: s.key,
            value: (d as any)[s.field],
            color: s.color
        }))
    );

    const allValues: number[] = data.flatMap(d => [d.low, d.medium, d.high]);

    const globalMax = d3.max(allValues) ?? 0;

    // D3.js chart rendering function
    onMount(() => {
        const spacewidth = window.innerWidth;
        const widthfactor = spacewidth / 1470;
        const margin = { 
            top: Math.max(120, Math.min(80, 80 * widthfactor)), 
            right: Math.max(60, Math.min(150, 150 * widthfactor)), 
            bottom: Math.max(5, Math.min(50, 50 * widthfactor)), 
            left: Math.max(90, Math.min(130, 130 * widthfactor)) 
        };
        const widthlessmargin = 820 - margin.left - margin.right;
        const heightlessmargin = 480 - margin.top - margin.bottom;
        const width = Math.max(230, Math.min(widthlessmargin, widthlessmargin * widthfactor));
        const height = Math.max(200, Math.min(heightlessmargin, widthlessmargin * widthfactor));

        // 1) Select a container div (wrap your SVG in this in markup)
        const container = d3.select("#chart-container")
            .style("position","relative"); // for absolutely-positioned tooltip

        // 2) Create the tooltip <div>, hidden by default
        const tooltip = container
            .append("div")
            .attr("class","tooltip")
            .style("opacity", 0);

        const svg = d3.select("#chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        svg.append("text")
            .attr("class", "chart-title")
            .attr("x", width / 2)
            .attr("y", -margin.top + Math.max((20 * 1/widthfactor), 80))    // position above the top of the plot area
            .attr("text-anchor", "middle")
            .style("font-size", `${Math.max(12, Math.min(24, widthfactor * 24))}px`)
            .style("font-weight", "bold")
            .text("Time to Produce a Human Lifetime Worth of Emissions");

        const x = d3.scaleBand()
                    .domain(data.map(d => d.company))
                    .range([0, width])
                    .padding(0.2);

        const y = d3.scaleLinear()
                    .domain([0, globalMax])
                    .nice()
                    .range([height, 0]);

        svg.append("g")
           .selectAll(".x-axis")
           .data(data)
           .enter()
           .append("text")
           .attr("class", "x-axis")
           .attr("x", d => ((x(d.company) ?? 0) + x.bandwidth() / 2))
           .attr("y", d => y(d.low) + Math.max(20, 35 * widthfactor))
           .text(d => d.company)
           .style("text-anchor", "middle")
           .style("font-size", `${Math.max(10, Math.min(16, widthfactor * 16))}px`)

        svg.append("g")
           .attr("class", "y-axis")
           .call(d3.axisLeft(y))
           .selectAll("text")
           .style("font-size", `${Math.max(12, Math.min(14, widthfactor * 14))}px`)

        svg.selectAll("line.range")
            .data(data)
            .join("line")
            .attr("class", "range")
            .attr("x1", d => x(d.company)! + x.bandwidth()/2)
            .attr("x2", d => x(d.company)! + x.bandwidth()/2)
            .attr("y1", d => y(d.low))
            .attr("y2", d => y(d.high))
            .attr("stroke", "#ded9d4")
            .attr("stroke-width", 3);

        svg.selectAll("circle.dot")
            .data(flat)
            .join("circle")
            .attr("class","dot")
            .attr("cx", d => x(d.company)! + x.bandwidth()/2)
            .attr("cy", d => y(d.value))
            .style("r", `${Math.max(5, Math.min(8, widthfactor * 8))}px`)
            .attr("fill", d => d.color)
            .on("mouseover", (event, d) => {
                const mins = Math.floor(d.value);
                const secs = Math.round((d.value - mins) * 60);
                const timeStr = `${mins}m ${secs}s`;
                d3.select(event.currentTarget)
                    .attr("stroke", "#ded9d4")
                    .attr("stroke-width", 3);
                tooltip
                    .style("opacity", 1)
                    .html(`
                        <strong>${d.company}</strong><br/>${d.scenario} case<br/>
                        <strong>${timeStr}</strong>
                    `)
                    .style("left",  `${event.offsetX + 10}px`)
                    .style("top",   `${event.offsetY - 30}px`);
            })
            .on("mousemove", event => {
                tooltip
                    .style("left", `${event.offsetX + 10}px`)
                    .style("top",  `${event.offsetY - 30}px`);
            })
            .on("mouseout", (event) => {
                d3.select(event.currentTarget)
                    .attr("stroke", "none");
                tooltip
                    .style("opacity", 0);
            });

        // 2) Annotate the three dots on EnergyAustralia
        svg.selectAll("text.dot-label")
        .data(flat.filter(d => d.company === "CS"))
        .join("text")
            .attr("class", "dot-label")
            .attr("x", d => x(d.company)! + x.bandwidth()/2 + 18)   // nudge right
            .attr("y", d => y(d.value))
            .text(d => `${d.scenario} CO₂ case`)           // Low/Medium/High
            .attr("alignment-baseline", "middle")
            .style("font-size", `${Math.max(10, Math.min(16, widthfactor * 16))}px`)
            .style("fill", d => d.color);

        // 3) Add a Y-axis label
        svg.append("text")
        .attr("class", "y-axis-label")
        .attr("transform", `rotate(-90)`)
        .attr("x", -height/2)
        .attr("y", -45 * (widthfactor + 1)/2)
        .attr("text-anchor", "middle")
        .style("font-size", `${Math.max(12, Math.min(18, widthfactor * 18))}px`)
        .text("Time (Minutes)");
    });

</script>

<style>
    /* Tooltip styles must be global or :global() in Svelte */
    :global(.tooltip) {
        position: absolute;
        pointer-events: none;
        background: rgba(237, 233, 229,1);
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 16px;
        transition: opacity 0.1s ease;
    }

    .axis path,
    .axis line {
        fill: none;
        shape-rendering: crispEdges;
    }

    .line {
        fill: none;
        stroke: steelblue;
        stroke-width: 2;
    }

    .dot {
        fill: steelblue;
        stroke: rgba(237, 233, 229,1);
        stroke-width: 1.5;
    }

    .label {
        font-size: 12px;
        text-anchor: middle;
    }

    .x-axis text {
        font-size: 12px;
        text-anchor: middle;
    }

    .y-axis text {
        font-size: 12px;
    }
</style>

<div id="chart-container">
    <svg id="chart"></svg>
</div>
