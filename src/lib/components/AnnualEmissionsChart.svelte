<script lang="ts">
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
  
    let container: HTMLDivElement;
  
    const data = [
      { company: 'AGL', time: 12.36 },
      { company: 'Stanwell', time: 22.88 },
      { company: 'EnergyAustralia', time: 24.59 }
    ];
  
    onMount(() => {
      const spacewidth = window.innerWidth;
      const widthfactor = spacewidth / 1470;
      const width = 566 * widthfactor;
      const height = 250 * widthfactor;
      const barHeight = 118 * widthfactor;
      const maxTime = d3.max(data, d => d.time) ?? 0;
  
      const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
  
      const scale = d3.scaleLinear()
        .domain([0, maxTime])
        .range([0, width - 5]); // leave margin on the right to avoid clipping
  
      const barGroup = svg.append('g')
        .attr('transform', 'translate(0, 0)');
  
      // Background bar
      barGroup.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('height', barHeight)
        .attr('width', width)
        .attr('fill', '#D9D9D9');
  
      // Animated foreground bar
      const rect = barGroup.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('height', barHeight)
        .attr('width', 0)
        .attr('fill', '#2C2C2C');
  
      // Timer text with mix-blend-mode: difference
      const timeText = barGroup.append('text')
        .attr('x', 20)
        .attr('y', barHeight / 2)
        .attr('text-anchor', 'start')
        .attr('alignment-baseline', 'middle')
        .style("font-size", `${Math.max(20, Math.min(48, widthfactor * 48))}px`)
        .attr('font-family', 'Work Sans')
        .attr('fill', '#D9D9D9')
        .style('mix-blend-mode', 'difference');
  
      // Vertical lines and labels
      svg.selectAll('.tick-line')
        .data(data)
        .enter()
        .append('line')
        .attr('x1', d => Math.min(scale(d.time), width))
        .attr('x2', d => Math.min(scale(d.time), width))
        .attr('y1', barHeight)
        .attr('y2', d => d.company === 'EnergyAustralia' ? barHeight + 70 * widthfactor^(5/6): barHeight + 36 * widthfactor^(5/6))
        .attr('stroke', 'black')
        .attr('stroke-width', 1);
  
      svg.selectAll('.label')
        .data(data)
        .enter()
        .append('text')
        .attr('x', d => {
            const pos = scale(d.time);
            if (d.company === 'AGL') return Math.min(pos, width - 10) - 23 * widthfactor;;
            if (d.company === 'Stanwell') return Math.min(pos, width - 10) - 48 * widthfactor;;
            if (d.company === 'EnergyAustralia') return Math.min(pos, width - 10) - 82 * widthfactor;
            return Math.min(pos, width - 10);
        })
        .attr('y', d => d.company === 'EnergyAustralia' ? barHeight + 90*widthfactor : barHeight + 60*widthfactor)
        .attr('text-anchor', 'middle')
        .attr('font-family', 'Work Sans')
        .style("font-size", `${Math.max(12, Math.min(24, widthfactor * 24))}px`)
        .attr('fill', 'black')
        .text(d => d.company);
  
      function animateBar() {
        rect
          .attr('width', 0)
          .transition()
          .duration(maxTime * 1000)
          .ease(d3.easeLinear)
          .attr('width', width)
          .on('start', function repeat() {
            let start = Date.now();
            d3.timer(function() {
              const elapsed = (Date.now() - start) / 1000;
              if (elapsed > maxTime) return true;
              timeText.text(`${elapsed.toFixed(1)}s`);
              return false;
            });
          })
          .on('end', animateBar);
      }
  
      animateBar();
    });
  </script>
  
  <style>
    svg {
      font-family: 'Work Sans', sans-serif;
      background: transparent;
    }
  </style>
  
  <div bind:this={container}></div>
  