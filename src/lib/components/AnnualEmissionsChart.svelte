<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import * as d3 from "d3";

  let container!: HTMLDivElement;
  let ro: ResizeObserver | null = null;

  const data = [
    { company: "AGL", time: 12.36 },
    { company: "Stanwell", time: 22.88 },
    { company: "EnergyAustralia", time: 24.59 },
  ];

  onMount(() => {
    const containerNode = document.getElementById("chart-container");
    const outerrect = container.getBoundingClientRect();
    const containerWidth = outerrect.width;
    const containerHeight = outerrect.height;
    // margins as percentages of container size to keep labels readable
    const margin = {
      top: Math.max(12, Math.round(containerHeight * 0.15)),
      right: Math.max(16, Math.round(containerWidth * 0.05)),
      bottom: Math.max(30, Math.round(containerHeight * 0.1)),
      left: Math.max(60, Math.round(containerWidth * 0.1)),
    };

    const width = Math.max(200, containerWidth - margin.left - margin.right);
    const height = Math.max(120, containerHeight - margin.top - margin.bottom);

    const fill = width < 420 ? 0.96 : width < 700 ? 0.9 : 0.85; // graph proportionally wider on mobile screens
    const trackWidth = width * fill;
    const trackX = (width - trackWidth) / 2; // center it horizontally
    const barHeight = height * (118 / 250); // keep your original proportions
    const widthfactor = width / 566; // only if you still want font scaling
    const maxTime = d3.max(data, (d) => d.time) ?? 0;
    const barY = (height - barHeight) / 3;

    const labelPadX = Math.max(3, width * 0.005);
    const labelPadY = 0;
    const tickX = (d: (typeof data)[0]) =>
      trackX + Math.min(scale(d.time), trackWidth);
    const tickY2 = (d: (typeof data)[0]) =>
      d.company === "EnergyAustralia"
        ? barY + barHeight + 0.7 * (height - (barY + barHeight))
        : barY + barHeight + 0.3 * (height - (barY + barHeight));

    const svg = d3
      .select(container)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("width", "100%")
      .style("height", "100%");

    const scale = d3.scaleLinear().domain([0, maxTime]).range([0, trackWidth]);

    const barGroup = svg.append("g").attr("transform", "translate(0, 0)");

    // Background bar
    barGroup
      .append("rect")
      .attr("x", trackX)
      .attr("y", barY)
      .attr("height", barHeight)
      .attr("width", trackWidth)
      .attr("fill", "#D9D9D9");

    // Animated foreground bar
    const rect = barGroup
      .append("rect")
      .attr("x", trackX)
      .attr("y", barY)
      .attr("height", barHeight)
      .attr("width", 0)
      .attr("fill", "#2C2C2C");

    // Timer text with mix-blend-mode: difference
    const tx = trackX + barHeight / 8;
    const ty = barY + barHeight / 2;
    const timeText = barGroup
      .append("text")
      .attr("text-anchor", "start")
      .attr("dominant-baseline", "middle")
      .attr("transform", `translate(${tx},${ty}) scale(1.5,1)`)
      .attr("x", 0)
      .attr("y", 0)
      .style("font-size", `${Math.max(20, Math.min(48, widthfactor * 48))}px`)
      .attr("font-family", "Work Sans")
      .attr("font-weight", 500)
      .attr("fill", "#D9D9D9")
      .style("font-variant-numeric", "tabular-nums")
      .style("font-feature-settings", '"tnum" 1')
      .style("mix-blend-mode", "difference");

    // Vertical lines and labels
    svg
      .selectAll(".tick-line")
      .data(data)
      .enter()
      .append("line")
      .attr("x1", (d) => trackX + Math.min(scale(d.time), trackWidth) - 1)
      .attr("x2", (d) => trackX + Math.min(scale(d.time), trackWidth) - 1)
      .attr("y1", barY + barHeight)
      .attr("y2", (d) => tickY2(d))
      .attr("stroke", "black")
      .attr("stroke-width", 1);

    const labels = svg.selectAll(".label").data(data).enter();

    console.log(labelPadX);
    
    labels
      .append("text")
      .attr("x", (d) => tickX(d) - labelPadX) // right edge sits just left of tick
      .attr("y", (d) => tickY2(d) + labelPadY) // top sits just below tick end
      .attr("text-anchor", "end")
      .attr("dominant-baseline", "hanging")
      .attr("font-family", "Work Sans")
      .attr("fill", "black")
      .style("font-size", `${Math.max(12, Math.min(18, widthfactor * 18))}px`)
      .text((d) => d.company);

    const easeSlightIn = (t: number) => {
      const k = 0.05; // strength of easing (0 = linear, 1 = full cubic)
      return (1 - k) * t + k * (t * t * t);
    };

    function animateBar() {
      rect.interrupt();
      rect
        .attr("width", 0)
        .transition()
        .duration(maxTime * 1000)
        .ease(easeSlightIn)
        .attr("width", trackWidth)
        .tween("timeText", () => {
          return (t: number) => {
            const elapsed = easeSlightIn(t) * maxTime;
            timeText.text(`${elapsed.toFixed(1)}s`);
          };
        })
        .on("end", animateBar);
    }

    animateBar();
  });

  onDestroy(() => {
    if (container) d3.select(container).selectAll("*").interrupt();
  });
</script>

<div class="chart-container" bind:this={container}></div>

<style>
  .chart-container {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center; /* centers the SVG if it ends up smaller */
  }

  :global(.chart-container svg) {
    display: block;
  }
</style>
