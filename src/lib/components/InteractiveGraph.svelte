<script lang="ts">
    var initialNodes = [
        { name: "Central", shape: "circle", color: "#000" },
        { name: "Projects", shape: "circle", color: "#26b790" },
        { name: "Stories", shape: "triangle", color: "#4c95f6" },
        { name: "About", shape: "square", color: "#ff8200" },
    ];

    var initialLinks = [
        { source: "Projects", target: "Central" },
        { source: "Stories", target: "Central" },
        { source: "About", target: "Central" },
    ];

    var allNodes = [
        { name: "Central", shape: "circle", color: "#000" },
        { name: "Projects", shape: "circle", color: "#26b790" },
        { name: "Stories", shape: "triangle", color: "#26b790" },
        { name: "About", shape: "square", color: "#ff8200" },

        { name: "Dirty Donations", shape: "pentagon", color: "#26b790" },
        {
            name: "Emissions in Perspective",
            shape: "hexagon",
            color: "#26b790",
        },
        { name: "Carbon Con", shape: "pentagon", color: "#26b790" },
        { name: "Political Donations", shape: "hexagon", color: "#4c95f6" },
        { name: "Data Transparency", shape: "pentagon", color: "#ff8200" },
        { name: "What is Downstream?", shape: "hexagon", color: "#ff8200" },
        { name: "Documentation", shape: "pentagon", color: "#26b790" },
    ];

    var allLinks = [
        { source: "Projects", target: "Central" },
        { source: "Stories", target: "Central" },
        { source: "About", target: "Central" },

        { source: "Dirty Donations", target: "Projects" },
        { source: "Emissions in Perspective", target: "Projects" },
        { source: "Carbon Con", target: "Stories" },
        { source: "Political Donations", target: "Stories" },
        { source: "Data Transparency", target: "Stories" },
        { source: "What is Downstream?", target: "About" },
        { source: "Documentation", target: "About" },
    ];

    var graph = {
        nodes: initialNodes,
        links: initialLinks,
    };

    // Adjust canvas resolution
    function adjustCanvasResolution() {
        const pixelRatio = window.devicePixelRatio || 1;
        canvas
            .attr("width", width * pixelRatio)
            .attr("height", height * pixelRatio)
            .style("width", `${width}px`)
            .style("height", `${height}px`);
        ctx.scale(pixelRatio, pixelRatio); // Scale the drawing context
    }

    var canvas = d3.select("#network"),
        width = canvas.attr("width"),
        height = canvas.attr("height"),
        ctx = canvas.node().getContext("2d"),
        r = 20; // Node radius,
    simulation = d3
        .forceSimulation()
        .force("x", d3.forceX(width / 2))
        .force("y", d3.forceY(height / 2))
        .force("collide", d3.forceCollide(r + 5))
        .force("charge", d3.forceManyBody().strength(-3000))
        .force(
            "link",
            d3.forceLink().id((d) => d.name),
        )
        .force("bounding-box", () => {
            // Constrain nodes within the container
            graph.nodes.forEach((node) => {
                node.x = Math.max(30, Math.min(width - 30, node.x));
                node.y = Math.max(30, Math.min(height - 30, node.y));
            });
        })
        .alphaDecay(0.07);

    // Adjust resolution
    adjustCanvasResolution();

    var radius = 100; // Set the desired radius from the central node
    var angleStep = (2 * Math.PI) / (graph.nodes.length - 1); // Calculate the angle step

    // Set initial positions of nodes
    graph.nodes.forEach((node, index) => {
        if (node.name === "Central") {
            node.x = width / 2;
            node.y = height / 2;
        } else {
            var angle = index * angleStep;
            node.x = width / 2 + radius * Math.cos(angle);
            node.y = height / 2 + radius * Math.sin(angle);
        }
    });

    simulation.nodes(graph.nodes);
    simulation.force("link").links(graph.links);
    simulation.on("tick", update);

    // Add drag functionality
    canvas.call(
        d3
            .drag()
            .container(canvas.node())
            .subject(dragsubject)
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended),
    );

    let hoveredNode = null; // Track the currently hovered node

    // Array to track the opened state of specific nodes
    let nodeOpenedState = {
        Projects: false,
        Stories: false,
        About: false,
    };

    // Array to track the opened state of specific nodes
    let nodeOpenedAlready = {
        Projects: false,
        Stories: false,
        About: false,
    };

    // Update function to render the graph
    function update() {
        ctx.clearRect(0, 0, width, height);

        // Draw links
        ctx.beginPath();
        ctx.globalAlpha = 0.9;
        ctx.strokeStyle = "#aaa";
        ctx.setLineDash([5, 5]); // Dashed lines
        graph.links.forEach(drawLink);
        ctx.stroke();
        ctx.setLineDash([]); // Reset line style

        // Draw nodes
        ctx.globalAlpha = 1.0;
        graph.nodes.forEach(drawNode);
    }

    // Dragging helpers
    function dragsubject() {
        return simulation.find(d3.event.x, d3.event.y);
    }

    function dragstarted() {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d3.event.subject.fx = d3.event.subject.x;
        d3.event.subject.fy = d3.event.subject.y;
    }

    function dragged() {
        d3.event.subject.fx = d3.event.x;
        d3.event.subject.fy = d3.event.y;
    }

    function dragended() {
        if (!d3.event.active) simulation.alphaTarget(0);
        d3.event.subject.fx = null;
        d3.event.subject.fy = null;
    }

    // Draw nodes with hover functionality
    function drawNode(d) {
        ctx.beginPath();

        // Set the fill color
        if (d.name === "Central") {
            ctx.fillStyle = "#9995eb"; // Central node is always black
        } else if (d === hoveredNode) {
            ctx.fillStyle = d.color; // Hovered node's original color
        } else if (nodeOpenedState[d.name]) {
            ctx.fillStyle = d.color; // Opened node's original color
        } else {
            ctx.fillStyle = "#fff"; // White by default
        }

        ctx.strokeStyle = "#000"; // Black outline
        ctx.lineWidth = 2;

        // Draw different shapes
        if (d.shape === "circle" || !d.shape) {
            ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        } else if (d.shape === "square") {
            ctx.rect(d.x - r, d.y - r, r * 2, r * 2);
        } else if (d.shape === "triangle") {
            ctx.moveTo(d.x, d.y - r);
            ctx.lineTo(d.x - r, d.y + r);
            ctx.lineTo(d.x + r, d.y + r);
            ctx.closePath();
        } else if (d.shape === "hexagon") {
            drawPolygon(d.x, d.y, r, 6);
        } else if (d.shape === "pentagon") {
            drawPolygon(d.x, d.y, r, 5);
        }

        // Function to draw a polygon with a given number of sides
        function drawPolygon(x, y, radius, sides) {
            const angleStep = (2 * Math.PI) / sides;
            ctx.moveTo(x + radius * Math.cos(0), y + radius * Math.sin(0));

            for (let i = 1; i <= sides; i++) {
                ctx.lineTo(
                    x + radius * Math.cos(i * angleStep),
                    y + radius * Math.sin(i * angleStep),
                );
            }
            ctx.closePath();
        }

        ctx.fill();
        ctx.stroke();

        // Draw the label
        drawLabel(d);
    }

    // Function to draw labels
    function drawLabel(d) {
        if (d.name === "Central") return; // Skip label for the central node

        // Find the central node's position
        const centralNode = graph.nodes.find((node) => node.name === "Central");

        // Calculate direction away from the central node
        const dx = d.x - centralNode.x;
        const dy = d.y - centralNode.y;

        // Normalize the direction vector to position the label
        const magnitude = Math.sqrt(dx * dx + dy * dy);
        const offsetX = (dx / magnitude) * (r + 20); // Offset away from the node
        const offsetY = (dy / magnitude) * (r + 20);

        // Position the label
        const labelX = d.x + offsetX;
        const labelY = d.y + offsetY;

        // Set font size and style
        if (["Projects", "Stories", "About"].includes(d.name)) {
            ctx.font = "bold 14px Bai Jamjuree"; // Bold font for specific nodes
        } else {
            ctx.font = "14px Bai Jamjuree"; // Regular font for other nodes
        }
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Measure the text width and height
        const text = d.name;
        const textWidth = ctx.measureText(text).width;
        const textHeight = 6; // Approximate height for 16px font

        // Draw background rectangle
        const padding = 4; // Smaller padding
        ctx.fillStyle = "#f5f5f5"; // Background color (same as canvas background)
        ctx.fillRect(
            labelX - textWidth / 2 - padding,
            labelY - textHeight / 2 - padding,
            textWidth + 4,
            textHeight + 4,
        );

        // Draw the label text
        ctx.fillStyle = "#000"; // Label color
        ctx.fillText(text, labelX, labelY);
    }

    // Draw links
    function drawLink(l) {
        ctx.moveTo(l.source.x, l.source.y);
        ctx.lineTo(l.target.x, l.target.y);
    }

    canvas.on("mousemove", function () {
        const [x, y] = d3.mouse(this); // Get mouse position
        const node = simulation.find(x, y, r * 2); // Find node near the mouse

        if (node !== hoveredNode) {
            hoveredNode = node; // Update hovered node
            update(); // Redraw the graph
        }
    });

    canvas.on("mouseleave", function () {
        hoveredNode = null; // Clear hovered node when the mouse leaves
        update(); // Redraw the graph
    });

    canvas.on("click", function () {
        const [x, y] = d3.mouse(this); // Get mouse position
        const clickedNode = simulation.find(x, y, r * 3); // Find the clicked node

        if (
            clickedNode &&
            ["Projects", "Stories", "About"].includes(clickedNode.name)
        ) {
            expandNode(clickedNode.name); // Expand the clicked node
            update(); // Redraw the graph
        }
    });

    // Create a function to find positions of the sub-nodes around their parent node at a set radius.
    function positionSubNodes(parentNode, subNodes) {
        const radius = 100; // Set the desired radius from the parent node
        const angleStep = (2 * Math.PI) / subNodes.length; // Calculate the angle step

        subNodes.forEach((node, index) => {
            const angle = index * angleStep;
            node.x = parentNode.x + radius * Math.cos(angle);
            node.y = parentNode.y + radius * Math.sin(angle);
        });
    }

    function expandNode(nodeName) {
        // Find the parent node
        const parentNode = graph.nodes.find((node) => node.name === nodeName);
        let subNodes = [];
        let subLinks = [];

        if (nodeOpenedState[nodeName] === false) {
            if (nodeOpenedAlready[nodeName] === false) {
                // Find sub-nodes and links for the clicked node
                subLinks = allLinks.filter((link) => link.target === nodeName);
                subNodes = allNodes.filter((node) => {
                    return subLinks.some(
                        (link) =>
                            link.source === node.name &&
                            link.target == nodeName,
                    );
                });
                nodeOpenedState[nodeName] = true; // Set the nodeOpened state to true
                nodeOpenedAlready[nodeName] = true; // Set opened already to true
            } else if (nodeOpenedAlready[nodeName] === true) {
                // Find sub-nodes and links for the clicked node
                subLinks = allLinks.filter(
                    (link) => link.target.name === nodeName,
                );
                subNodes = allNodes.filter((node) => {
                    return subLinks.some(
                        (link) =>
                            link.source.name === node.name &&
                            link.target.name == nodeName,
                    );
                });
                nodeOpenedState[nodeName] = true; // Set the nodeOpened state to true
            }
        } else {
            // Remove sub-nodes and links of the previously opened node
            prevSubLinks = allLinks.filter(
                (link) => link.target.name === nodeName,
            );
            console.log(allLinks);
            console.log("prev sublinks:", prevSubLinks);
            prevSubNodes = allNodes.filter((node) => {
                return prevSubLinks.some(
                    (link) => link.source.name === node.name,
                );
            });
            console.log("prev subnodes:", prevSubNodes);

            // Remove sub-nodes and links from the graph
            graph.nodes = graph.nodes.filter(
                (node) => !prevSubNodes.includes(node),
            );
            graph.links = graph.links.filter(
                (link) => !prevSubLinks.includes(link),
            );
            nodeOpenedState[nodeName] = false; // Set the nodeOpened state to false
        }

        console.log("already opened:", nodeOpenedAlready);
        console.log("opened now:", nodeOpenedState);

        // Position the sub-nodes around the parent node
        positionSubNodes(parentNode, subNodes);

        // Add sub-nodes and links to the graph
        graph.nodes.push(...subNodes);
        graph.links.push(...subLinks);

        // Restart the simulation with updated nodes and links
        simulation.nodes(graph.nodes);
        simulation.force("link").links(graph.links);
        simulation.alpha(0.8).restart();
    }

    // Initialize the simulation with graph data
    simulation.nodes(graph.nodes);
    simulation.force("link").links(graph.links);
    simulation.alpha(0.8).on("tick", update);

    // Add drag functionality
    canvas.call(
        d3
            .drag()
            .container(canvas.node())
            .subject(dragsubject)
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended),
    );

    // ------------------ BINARY ANIMATION CODE ------------------

    const animatedText = document.getElementById("animated-text");
    const targetText = animatedText.textContent.trim(); // Get the text content from the HTML element
    const binaryChars = ["0", "1"];
    let currentText = targetText.replace(/./g, (char) => {
        return char === " "
            ? " "
            : char === "\n"
              ? "\n"
              : binaryChars[Math.floor(Math.random() * 2)];
    });

    animatedText.innerHTML = formatText(currentText); // Set initial binary text

    // Function to format text with different fonts
    function formatText(text) {
        return text
            .split("")
            .map((char, i) => {
                if (char === " " || targetText[i] !== char) {
                    return `<span style="font-family: 'Courier New', Courier, monospace; line-height: 1;">${char}</span>`;
                } else if (char === "\n") {
                    return "<br>"; // Handle line breaks
                } else {
                    return `<span style="font-family: 'Bai Jamjuree', sans-serif; line-height: 1;">${char}</span>`;
                }
            })
            .join("");
    }

    // Randomly replace characters during binary oscillation
    function randomBinaryTransition() {
        currentText = currentText
            .split("")
            .map((_, i) => {
                return targetText[i] === " " || Math.random() > 0.5
                    ? targetText[i]
                    : binaryChars[Math.floor(Math.random() * 2)];
            })
            .join("");

        animatedText.innerHTML = formatText(currentText); // Update text content with mixed fonts
    }

    // Gradually reveal the final text
    function finalReveal() {
        let revealedText = currentText.split("");

        // Reveal characters in order
        targetText.split("").forEach((char, i) => {
            setTimeout(() => {
                revealedText[i] = char;
                animatedText.innerHTML = formatText(revealedText.join(""));
            }, i * 50); // Slight delay between reveals
        });
    }

    // Main animation function
    function animateText() {
        const duration = 700; // Total animation duration in milliseconds
        const stepTime = 150; // Time per binary oscillation step
        let elapsed = 0;

        const interval = setInterval(() => {
            randomBinaryTransition();
            elapsed += stepTime;

            if (elapsed >= duration) {
                clearInterval(interval); // Stop binary oscillation
                finalReveal(); // Start the final reveal
            }
        }, stepTime);
    }

    // Trigger the animation on page load
    window.onload = animateText;

    // ------------------ NETWORK DIRECTIONS ------------------

    document.addEventListener("DOMContentLoaded", function () {
        const rightSection = document.querySelector(".hero-half.right");
        const messages = rightSection.querySelectorAll("p");
        let clickCount = 0;

        rightSection.addEventListener("click", function () {
            if (clickCount < 3) {
                messages[clickCount].classList.add("hidden");
                if (clickCount < 2) {
                    clickCount++;
                    messages[clickCount].classList.remove("hidden");
                }
            }
        });
    });

    // ------------------ INTERSECTION OBSERVER ------------------

    // Function to start the simulation
    function startSimulation() {
        simulation.alpha(1).restart();
    }

    // Function to stop the simulation
    function stopSimulation() {
        simulation.stop();
    }

    // Existing Intersection Observer to handle visibility changes
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                if (entry.target.id === "network") {
                    startSimulation();
                } else {
                    entry.target.classList.add("show-obs");
                }
            } else {
                if (entry.target.id === "network") {
                    stopSimulation();
                }
            }
        });
    });

    // Observe the canvas element
    const graphnetsim = document.getElementById("network");
    observer.observe(graphnetsim);

    // Observe elements with the class 'hidden-obs'
    const hiddenElements = document.querySelectorAll(".hidden-obs");
    hiddenElements.forEach((el) => observer.observe(el));
</script>
