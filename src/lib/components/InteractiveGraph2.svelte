<script lang="ts">
    import { onMount } from "svelte";
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

    const width = 600,
        height = 600,
        r = 25; // Set canvas size

    interface GraphNode extends d3.SimulationNodeDatum {
        name: string;
        shape: string;
        color: string;
    }

    let draggingNode: GraphNode | null = null;

    let graph = {
        nodes: [
            { name: "Central", shape: "circle", color: "#000" },
            { name: "Projects", shape: "circle", color: "#26b790" },
            { name: "Stories", shape: "triangle", color: "#013725" },
            { name: "About", shape: "square", color: "#DCFF4F" },
        ] as GraphNode[], // Cast nodes as GraphNode[]
        links: [
            { source: "Projects", target: "Central" },
            { source: "Stories", target: "Central" },
            { source: "About", target: "Central" },
        ] as d3.SimulationLinkDatum<GraphNode>[], // Cast links properly
    };

    let allNodes = [
        { name: "Dirty Donations", shape: "pentagon", color: "#26b790" },
        {
            name: "Emissions in Perspective",
            shape: "hexagon",
            color: "#DCFF4F",
        },
        { name: "Carbon Con", shape: "pentagon", color: "#013725" },
        { name: "Political Donations", shape: "hexagon", color: "#26b790" },
        { name: "Data Transparency", shape: "pentagon", color: "#DCFF4F" },
        { name: "What is Downstream?", shape: "hexagon", color: "#26b790" },
        { name: "Documentation", shape: "pentagon", color: "#DCFF4F" },
    ];

    let allLinks = [
        { source: "Dirty Donations", target: "Projects" },
        { source: "Emissions in Perspective", target: "Projects" },
        { source: "Carbon Con", target: "Stories" },
        { source: "Political Donations", target: "Stories" },
        { source: "Data Transparency", target: "Stories" },
        { source: "What is Downstream?", target: "About" },
        { source: "Documentation", target: "About" },
    ];

    let hoveredNode: {
        name: string;
        shape: string;
        color: string;
        x?: number;
        y?: number;
    } | null = null;

    let nodeOpenedState: Record<string, boolean> = {
        Projects: false,
        Stories: false,
        About: false,
    };

    function adjustCanvasResolution() {
        if (!canvas) return;
        const pixelRatio = window.devicePixelRatio || 1; // Get device pixel ratio

        // Set actual canvas resolution (higher pixel density)
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;

        // Maintain CSS display size
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        // Scale the drawing context
        ctx?.scale(pixelRatio, pixelRatio);
    }

    onMount(() => {
        if (!canvas) return;
        ctx = canvas.getContext("2d");
        adjustCanvasResolution();

        simulation = d3
            .forceSimulation<GraphNode>(graph.nodes)
            .force("x", d3.forceX(width / 2))
            .force("y", d3.forceY(height / 2))
            .force("collide", d3.forceCollide(r + 5))
            .force("charge", d3.forceManyBody().strength(-3500))
            .force(
                "link",
                d3
                    .forceLink<GraphNode, d3.SimulationLinkDatum<GraphNode>>()
                    .id((d) => d.name)
                    .links(graph.links), // Ensure links are set properly
            )
            .alphaDecay(0.1
            )
            .alphaMin(0.00001) // Allows the simulation to run longer before stopping
            .velocityDecay(0.2)
            .on("tick", update);

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
    }

    function drawNode(d: GraphNode) {
        if (!ctx) return;

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

        drawLabel(d);
    }

    function drawLabel(d: GraphNode) {
        if (d.name === "Central") return;
        if (!ctx) return;

        const x = d.x ?? 0;
        const y = d.y ?? 0;

        ctx.fillStyle = "#000";
        ctx.font = "18px Bai Jamjuree";
        ctx.textAlign = "center";
        ctx.fillText(d.name, x, y + r + 20);
    }

    function onMouseMove(event: MouseEvent) {
        if (!draggingNode) return;
        dragging = true;
        const rect = canvas!.getBoundingClientRect();
        const dx = Math.abs(event.clientX - rect.left - startX); // Distance moved in X
        const dy = Math.abs(event.clientY - rect.top - startY); // Distance moved in Y

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
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (
            Math.abs(x - startX) > dragThreshold ||
            Math.abs(y - startY) > dragThreshold
        )
            return;
        const clickedNode = simulation.find(x, y, r * 3);
        if (
            clickedNode &&
            ["Projects", "Stories", "About"].includes(clickedNode.name)
        ) {
            expandNode(clickedNode.name);
        }
    }

    function expandNode(nodeName: string) {
        if (!simulation) return;
        let parentNode = graph.nodes.find((n) => n.name === nodeName);
        let centralNode = graph.nodes.find((n) => n.name === "Central");

        let subNodes = allNodes.filter((n) =>
            allLinks.some((l) => l.source === n.name && l.target === nodeName),
        );

        if (!parentNode || !centralNode) return;

        let dx = parentNode.x! - centralNode.x!;
        let dy = parentNode.y! - centralNode.y!;
        let magnitude = Math.sqrt(dx * dx + dy * dy);

        dx /= magnitude;
        dy /= magnitude;

        if (!nodeOpenedState[nodeName]) {
            subNodes.forEach((node, index) => {
                node.x = parentNode.x! + dx * 100 + (index * 30); // ✅ Offset to avoid overlap
                node.y = parentNode.y! + dy * 100 + (index * 30);
            });
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

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Find the node under the cursor
        draggingNode = simulation.find(x, y, r * 2) as GraphNode | null;
        dragging = false;

        startX = x;
        startY = y;

        if (draggingNode) {
            offsetX = x - (draggingNode.x ?? 0); // ✅ Track the offset when clicking
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
