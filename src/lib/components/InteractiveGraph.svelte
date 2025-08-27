<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import * as d3 from "d3";

    let dragging = false;
    let startX = 0,
        startY = 0;
    const dragThreshold = 5;

    let canvas: HTMLCanvasElement | null = null;
    let ctx: CanvasRenderingContext2D | null = null;
    let simulation: d3.Simulation<
        GraphNode,
        d3.SimulationLinkDatum<GraphNode>
    > | null = null;

    interface GraphNode extends d3.SimulationNodeDatum {
        name: string;
        shape: string;
        color: string;
        x?: number;
        y?: number;
        url: string;
    }

    let draggingNode: GraphNode | null = null;

    let width = 600;
    let height = 600;

    let graph = {
        nodes: [
            { name: "Central", shape: "circle", color: "#000" },
            { name: "Projects", shape: "circle", color: "#26b790" },
            { name: "Stories", shape: "triangle", color: "#013725" },
            { name: "About", shape: "square", color: "#DCFF4F" },
        ] as GraphNode[],
        links: [
            { source: "Projects", target: "Central" },
            { source: "Stories", target: "Central" },
            { source: "About", target: "Central" },
        ] as d3.SimulationLinkDatum<GraphNode>[], // Cast links properly
    };

    let allNodes = [
    { name: "The Scale of Emissions", shape: "pentagon", color: "#26b790", url: `${base}/articles/article-four` },
    { name: "Aesthetics of Inaction", shape: "hexagon", color: "#DCFF4F", url: `${base}/articles/article-five` },
    { name: "Emissions in Perspective", shape: "triangle", color: "#26b790", url: `${base}/explore` },
    { name: "What is Downstream?", shape: "hexagon", color: "#26b790", url: `${base}/about-us` },
    ];

    let allLinks = [
        { source: "The Scale of Emissions", target: "Stories" },
        { source: "Aesthetics of Inaction", target: "Stories" },
        { source: "Emissions in Perspective", target: "Projects" },
        { source: "What is Downstream?", target: "About" },
    ];

    let hoveredNode: GraphNode | null = null;

    let nodeOpenedState: Record<string, boolean> = {
        Projects: false,
        Stories: false,
        About: false,
    };

    function adjustCanvasResolution() {
        if (!canvas) return;

        const pixelratio = window.devicePixelRatio;

        const containerWidth = Math.min(692, Math.max(348, window.innerWidth * 0.3125));
        const containerHeight = Math.min(692, Math.max(348, window.innerWidth * 0.3125));

        canvas.width = containerWidth * pixelratio;
        canvas.height = containerHeight * pixelratio;

        canvas.style.width = `${containerWidth}px`;
        canvas.style.height = `${containerHeight}px`;

        if (ctx) {
            ctx.setTransform(pixelratio, 0, 0, pixelratio, 0, 0); // Reset transforms before applying scale
        }

        ctx?.clearRect(0, 0, canvas.width, canvas.height);

        simulation?.force("x", d3.forceX(containerWidth / 2))
        .force("y", d3.forceY(containerHeight / 2))
        .restart();

        update();

    }

    onMount(() => {
        if (!canvas) return;
        ctx = canvas.getContext("2d");
        adjustCanvasResolution();
        window.addEventListener("resize", adjustCanvasResolution);

        const width = Math.min(602, Math.max(348, window.innerWidth * 0.3125)),
            height = Math.min(602, Math.max(348, window.innerWidth * 0.3125)),
            r = Math.min(18, Math.max(8, window.innerWidth * 0.02302083333));

        simulation = d3
            .forceSimulation<GraphNode>(graph.nodes)
            .force("x", d3.forceX(width*0.5).strength(0.2))
            .force("y", d3.forceY(height*0.5).strength(0.2))
            .force("collide", d3.forceCollide(r + 5))
            .force("charge", d3.forceManyBody().strength(r * -90))
            .force(
                "link",
                d3
                    .forceLink<GraphNode, d3.SimulationLinkDatum<GraphNode>>()
                    .id((d) => d.name)
                    .links(graph.links), // Ensure links are set properly
            )
            .alphaDecay(0.02)
            .alphaMin(0.01) // Allows the simulation to run longer before stopping
            .alpha(0.3)
            .on("tick", update);

        setTimeout(() => {
            simulation?.alpha(0.5).restart();
        }, 500);


        // Set initial positions
        let angleStep = (2 * Math.PI) / (graph.nodes.length - 1);
        graph.nodes.forEach((node, index) => {
            if (node.name === "Central") {
                node.x = width / 2;
                node.y = height / 2;
            } else {
                let angle = index * angleStep;
                node.x = width / 2 + 100 * Math.cos(angle);
                node.y = height / 2 + 100 * Math.sin(angle);
            }
        });

        // Handle events
        canvas.addEventListener("click", onClick);
        canvas.addEventListener("mousedown", onMouseDown);
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mouseup", onMouseUp);
        canvas.addEventListener("mouseleave", onMouseLeave);
    });

    function update() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;

        graph.links.forEach((l) => {
            const source = l.source as GraphNode;
            const target = l.target as GraphNode;

            if (source?.x !== undefined && target?.x !== undefined) {
                ctx?.moveTo(source.x ?? 0, source.y ?? 0);
                ctx?.lineTo(target.x ?? 0, target.y ?? 0);
            }
        });

        ctx.stroke();
        ctx.setLineDash([]);

        graph.nodes.forEach(drawNode);
        graph.nodes.forEach(drawLabel);
    }

    function drawNode(d: GraphNode) {
        if (!ctx) return;
        const r = Math.min(18, Math.max(8, window.innerWidth * 0.01802083333));

        const x = d.x ?? 0;
        const y = d.y ?? 0;

        //ctx.fillStyle = d === hoveredNode ? d.color : "#ede9e5";
        ctx.fillStyle = d.color;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;

        if (d.shape === "circle") {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        } else if (d.shape === "square") {
            ctx.rect(x - r, y - r, r * 2, r * 2);
            ctx.fill();
            ctx.stroke();
        } else if (d.shape === "square") {
            ctx.rect(x - r, y - r, r * 2, r * 2);
            ctx.fill();
            ctx.stroke();
        } else if (d.shape === "triangle") {
            ctx.beginPath();
            ctx.moveTo(x, y - r);
            ctx.lineTo(x + r, y + r);
            ctx.lineTo(x - r, y + r);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        } else if (d.shape === "pentagon") {
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const angle = (Math.PI * 2 * i) / 5;
                ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        } else if (d.shape === "hexagon") {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI * 2 * i) / 6;
                ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }

    function drawLabel(d: GraphNode) {
        const windowwidth = window.innerWidth
        const r = Math.min(18, Math.max(8, windowwidth * 0.02802083333));
        if (d.name === "Central") return;
        if (!ctx) return;

        const x = d.x ?? 0;
        const y = d.y ?? 0;

        let fontsize: number;
        if(windowwidth < 748){
            fontsize = 13;
        }else{
            fontsize = 15;
        }

        if(["Projects", "Stories", "About"].includes(d.name)){
            ctx.fillStyle = "#000"
        } else if(d === hoveredNode){ctx.fillStyle = "#000"}else{ctx.fillStyle = "#8c8c8c"}
        //ctx.fillStyle = d === hoveredNode ? "#000" : "#8c8c8c";
        ctx.font = `${fontsize}px Bai Jamjuree`;
        ctx.textAlign = "center";

        const maxWidth = r * 5; // Maximum width for the text
        const words = d.name.split(" ");
        let line = "";
        const lines = [];

        for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + " ";
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && i > 0) {
                lines.push(line);
                line = words[i] + " ";
            } else {
                line = testLine;
            }
        }
        lines.push(line);

        for (let i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], x, y + r + 20 + (i * fontsize));
        }

    }

    function onMouseMove(event: MouseEvent) {
        if (!canvas || !simulation) return;

        const r = Math.min(18, Math.max(8, window.innerWidth * 0.02802083333));

        const rect = canvas.getBoundingClientRect();
        const dx = Math.abs(event.clientX - rect.left - startX); // Distance moved in X
        const dy = Math.abs(event.clientY - rect.top - startY); // Distance moved in Y

        const x = Math.abs(event.clientX - rect.left); // Distance moved in X
        const y = Math.abs(event.clientY - rect.top); // Distance moved in Y
        const node = simulation.find(x, y, r * 2) as GraphNode | null;

        if (node !== hoveredNode) {
            hoveredNode = node;
            update(); // Redraw the canvas to reflect the hovered state
        }

        if (!draggingNode) return;
        dragging = true;
        if (dx > dragThreshold || dy > dragThreshold) {
            dragging = true; // Only set dragging to true if movement exceeds threshold
        }
        draggingNode.fx = event.clientX - rect.left - offsetX;
        draggingNode.fy = event.clientY - rect.top - offsetY;

        update();
    }

    function onMouseLeave() {
        hoveredNode = null;
        update();
    }

    function onClick(event: MouseEvent) {
        if (!canvas || !simulation || dragging) return;
        const r = Math.min(18, Math.max(8, window.innerWidth * 0.01302083333));
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (
            Math.abs(x - startX) > dragThreshold ||
            Math.abs(y - startY) > dragThreshold
        )
            return;
        const clickedNode = simulation.find(x, y, r * 3);
        if (clickedNode) {
            // If the node has a URL, navigate to it
            const nodeData = allNodes.find(n => n.name === clickedNode.name);
            if (nodeData && nodeData.url) {
                goto(nodeData.url);
            }

            // If it's a main category node, expand it
            if (["Projects", "Stories", "About"].includes(clickedNode.name)) {
                expandNode(clickedNode.name);
            }
        }
    }

    function expandNode(nodeName: string) {
        if (!simulation) return;
        const r = Math.min(18, Math.max(8, window.innerWidth * 0.01302083333));
        let parentNode = graph.nodes.find((n) => n.name === nodeName);
        let centralNode = graph.nodes.find((n) => n.name === "Central");

        let subNodes = allNodes.filter((n) =>
            allLinks.some((l) => l.source === n.name && l.target === nodeName),
        );

        if (!parentNode || !centralNode) return;

        let dx = parentNode.x!;
        let dy = parentNode.y! - centralNode.y!;
        let magnitude = Math.sqrt(dx * dx + dy * dy);

        dx /= magnitude;
        dy /= magnitude;

        if (!nodeOpenedState[nodeName]) {
             subNodes = subNodes.map((node, index) => ({
                 ...node,
                url: node.url ?? "",
                x: parentNode.x! + (index % 2 === 0 ? 10 : -10), // Small horizontal offset
                y: parentNode.y! + (index % 2 === 0 ? 10 : -10), // Small vertical offset 
             }));
            graph.nodes.push(...subNodes);
            graph.links.push(...allLinks.filter((l) => l.target === nodeName));
            nodeOpenedState[nodeName] = true;
        } else {
            graph.nodes = graph.nodes.filter((n) => !subNodes.includes(n));
            graph.links = graph.links.map((l) => ({
                source:
                    graph.nodes.find((n) => n.name === l.source) ?? l.source, // Resolve object reference
                target:
                    graph.nodes.find((n) => n.name === l.target) ?? l.target, // Resolve object reference
            }));
            nodeOpenedState[nodeName] = false;
        }

        simulation.nodes(graph.nodes);
        const linkForce = simulation?.force("link") as
            | d3.ForceLink<GraphNode, d3.SimulationLinkDatum<GraphNode>>
            | undefined;
        linkForce?.links(graph.links);
        simulation.restart();
    }

    // Function to detect the node being clicked and start dragging
    let offsetX = 0,
        offsetY = 0;
    function onMouseDown(event: MouseEvent) {
        if (!canvas || !simulation) return;
        const r = Math.min(18, Math.max(8, window.innerWidth * 0.01302083333));

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Find the node under the cursor
        draggingNode = simulation.find(x, y, r * 2) as GraphNode | null;
        dragging = false;

        startX = x;
        startY = y;

        if (draggingNode) {
            offsetX = x - (draggingNode.x ?? 0); // Track the offset when clicking
            offsetY = y - (draggingNode.y ?? 0);
            draggingNode.fx = draggingNode.x;
            draggingNode.fy = draggingNode.y;
            simulation.alphaTarget(0.3).restart();
        }
    }

    // Function to stop dragging
    function onMouseUp() {
        if (!draggingNode) return;
        draggingNode.fx = null;
        draggingNode.fy = null;
        draggingNode = null;
        dragging = false;
        simulation?.alphaTarget(0);
    }
</script>

<canvas bind:this={canvas} {width} {height}></canvas>
