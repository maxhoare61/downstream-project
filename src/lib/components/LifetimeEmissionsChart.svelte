<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import * as d3 from "d3";
    import { browser } from "$app/environment";

    let data = [
        { company: "AGL", low: 11.84, medium: 17.1, high: 23.68 },
        { company: "Stanwell", low: 21.92, medium: 31.67, high: 43.85 },
        { company: "Origin", low: 23.56, medium: 32.33, high: 44.76 },
        { company: "EnergyAus.", low: 22.38, medium: 34.04, high: 47.13 },
        { company: "Chevron", low: 31.11, medium: 44.94, high: 62.23 },
        { company: "Pioneer", low: 39.36, medium: 56.86, high: 78.73 },
        { company: "CS Energy", low: 44.57, medium: 64.38, high: 89.14 },
    ];

    const scenarios = [
        { key: "Low", field: "low", color: "#1f77b4" },
        { key: "Medium", field: "medium", color: "#ff7f0e" },
        { key: "High", field: "high", color: "#2ca02c" },
    ];

    const flat = data.flatMap((d) =>
        scenarios.map((s) => ({
            company: d.company,
            scenario: s.key,
            value: (d as any)[s.field],
            color: s.color,
        })),
    );

    const allValues: number[] = data.flatMap((d) => [d.low, d.medium, d.high]);

    const globalMax = d3.max(allValues) ?? 0;

    let host: HTMLDivElement;
    let ro: ResizeObserver | null = null;
    let raf = 0;

    function render() {
        // 1) clear previous render
        d3.select(host).selectAll(".tooltip").remove();
        d3.select(host).select("svg").selectAll("*").remove();

        // 2) measure container and set up dimensions
        const containerNode = host;
        const rect = host.getBoundingClientRect();
        const containerWidth = rect.width;
        const containerHeight = rect.height;

        const fill = containerWidth < 280 ? 0.65 : containerWidth < 360 ? 0.8 : 1; // graph proportionally wider on mobile screens
        const fillRmar = containerWidth < 280 ? 0.175 : containerWidth < 360 ? 0.15 : 0.05;
        const fillLmar = containerWidth < 280 ? 0.1 : containerWidth < 360 ? 0.1 : 0.1;
        console.log("fill", fill, "fillLmar", fillLmar);

        // margins as percentages of container size to keep labels readable
        const margin = {
            top: Math.max(12, Math.round(containerHeight * 0.1 * fill)),
            right: Math.round(containerWidth * fillRmar),
            bottom: Math.max(30, Math.round(containerHeight * 0.1 * fill)),
            left: Math.max(containerWidth * fillLmar),
        };

        const width = Math.max(
            200,
            containerWidth - margin.left - margin.right,
        );
        const height = Math.max(
            120,
            containerHeight - margin.top - margin.bottom,
        );

        // 1) Select a container div (wrap your SVG in this in markup)
        const container = d3.select(host).style("position", "relative");

        // 2) Create the tooltip <div>, hidden by default
        const tooltip = container
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // configure SVG responsively using viewBox so it scales to the container size
        const svgRoot = d3
            .select(host)
            .select<SVGSVGElement>("svg.chart-svg")
            .attr(
                "viewBox",
                `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`,
            )
            .attr("preserveAspectRatio", "xMidYMid meet")
            .style("width", "100%")
            .style("height", "100%");

        const svg = svgRoot
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        /*svg.append("foreignObject")
            .attr("x", 0)
            .attr("y", -margin.top + 5)
            .attr("width", width)
            .attr("height", margin.top)
            .append("xhtml:div")
            .attr("class", "chart-title")
            .text(
                "Minutes to Produce an Australian's Lifetime Emissions Output",
            );*/

        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.company))
            .range([0, width])
            .padding(0.2);

        const y = d3
            .scaleLinear()
            .domain([0, globalMax])
            .nice()
            .range([height, 0]);

        // bottom axis placed exactly at the bottom of the plotting area
        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .style("text-anchor", "middle");

        svg.append("g")
            .attr("class", "y-axis")
            .call(d3.axisLeft(y))
            .selectAll("text");

        svg.selectAll("line.range")
            .data(data)
            .join("line")
            .attr("class", "range")
            .attr("x1", (d) => x(d.company)! + x.bandwidth() / 2)
            .attr("x2", (d) => x(d.company)! + x.bandwidth() / 2)
            .attr("y1", (d) => y(d.low))
            .attr("y2", (d) => y(d.high))
            .attr("stroke", "#ded9d4")
            .attr("stroke-width", 4);

        svg.selectAll("circle.dot")
            .data(flat)
            .join("circle")
            .attr("class", "dot")
            .attr("cx", (d) => x(d.company)! + x.bandwidth() / 2)
            .attr("cy", (d) => y(d.value))
            .attr("r", Math.round(7 * fill))
            .attr("fill", (d) => d.color)
            .on("mouseover", (event, d) => {
                const [px, py] = d3.pointer(event, containerNode); 
                const mins = Math.floor(d.value);
                const secs = Math.round((d.value - mins) * 60);
                const timeStr = `${mins}m ${secs}s`;
                d3.select(event.currentTarget)
                    .attr("stroke", "#ded9d4")
                    .attr("stroke-width", 3);

                // position tooltip relative to container
                const rect = containerNode?.getBoundingClientRect();
                const left =
                    (event as MouseEvent).clientX - (rect?.left ?? 0) + 10;
                const top =
                    (event as MouseEvent).clientY - (rect?.top ?? 0) - 30;

                tooltip
                    .style("opacity", 1)
                    .html(
                        `<strong>${d.company}</strong><br/>${d.scenario} case<br/><strong>${timeStr}</strong>`,
                    )
                    .style("left", `${px + 10}px`)
                    .style("top", `${py - 30}px`);
            })
            .on("mousemove", (event) => {
                const [px, py] = d3.pointer(event, containerNode);
                const rect = containerNode?.getBoundingClientRect();
                const left =
                    (event as MouseEvent).pageX - (rect?.left ?? 0) + 10;
                const top = (event as MouseEvent).pageY - (rect?.top ?? 0) - 30;
                tooltip
                    .style("left", `${px + 10}px`)
                    .style("top", `${py - 30}px`);
            })
            .on("mouseout", (event) => {
                d3.select(event.currentTarget).attr("stroke", "none");
                tooltip.style("opacity", 0);
            });

        // annotate specific company dots (adjust the filter to match real company keys)
        svg.selectAll("text.dot-label")
            .data(flat.filter((d) => d.company === "CS Energy"))
            .join("text")
            .attr("class", "dot-label")
            .attr("x", (d) => {
                const base = x(d.company)! + x.bandwidth() / 2;
                // if label would overflow right edge, nudge left instead
                return base + 12;
            })
            .attr("y", (d) => y(d.value) + 3)
            .text((d) => `${d.scenario}`)
            .attr("alignment-baseline", "middle")
            .style("fill", (d) => d.color);

        // Y-axis label
        svg.append("text")
            .attr("class", "y-axis-label")
            .attr("transform", `rotate(-90)`)
            .attr("x", -height / 2)
            .attr("y", -margin.left * 0.75)
            .attr("text-anchor", "middle")
            .text("Minutes elapased");
    }

    // D3.js chart rendering function
    onMount(() => {
        // initial draw
        render();

        ro = new ResizeObserver(() => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(render);
        });

        ro.observe(host);
    });

    onDestroy(() => {
        ro?.disconnect();
        if (browser) window.cancelAnimationFrame(raf);
        if (host) d3.select(host).selectAll("*").interrupt();
    });
</script>

<div bind:this={host} class="chart-host">
    <svg class="chart-svg"></svg>
</div>

<style>
    /* ensure container can show tooltip outside its box */
    :global(.chart-host) {
        overflow: visible;
        position: relative;
        width: 100%;
        height: 100%;
    }
    /* Tooltip styles must be global or :global() in Svelte */
    :global(.chart-host .tooltip) {
        position: absolute;
        pointer-events: none;
        background: rgba(237, 233, 229, 1);
        padding: 0.25rem 0.5rem;
        border-radius: 1rem;
        font-size: 1rem;
        transition: opacity 0.1s ease;
        line-height: 1.4;
    }

    :global(.chart-host) {
        font-size: 16px; /* same as tooltip base */
    }

    :global(.chart-host .chart-title) {
        font-size: clamp(0.4em, 3vw, 1.1em);
        font-weight: 700;
        text-align: center;
        word-break: break-word;
        line-height: 1.2;
    }
    :global(.chart-host .tick text) {
        font-size: clamp(6px, 1.5vw, 16px);
    }
    :global(.chart-host .y-axis-label) {
        font-size: clamp(0.7em, 1.2vw, 2em);
    }
    :global(.chart-host .dot-label) {
        font-size: 0.8em;
        font-weight: 600;
    }

    /* Axis weights */
    :global(.y-axis path),
    :global(.y-axis line),
    :global(.x-axis .domain),
    :global(.tick line) {
        stroke-width: 1.3px;
    }
</style>
