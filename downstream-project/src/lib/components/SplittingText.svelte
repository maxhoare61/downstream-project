<script lang="ts">
    import { onMount } from 'svelte';

onMount(() => {
    const container = document.getElementById('scrolly-container');
    const textcontainer = document.getElementById('text-container');

    //const wordleft = document.getElementById('animate-me');
    //const wordright = document.getElementById('animate-me');
    const elemUnderstanding = document.getElementById('public-understanding');
    const elemData = document.getElementById('public-data');
    const elemAnd = document.getElementById('and');

    const thresholds = Array.from({ length: 200 }, (_, i) => (i / 200));

    function fractionMod(x) {
    return -5 * x * x + 5 * x;
}

    // Code for setting up your Intersection Observer or other logic
    // Example of setting up an observer:
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
                const entryIntersectionSafe = entry.intersectionRect.top === 0 ? 706 : entry.intersectionRect.top;
                const scrollFraction = (window.innerHeight - entryIntersectionSafe) / textcontainer.offsetHeight;
                const scrollFractionAdj = Math.min((1 - scrollFraction), 0.9);
                console.log('scrollFraction',scrollFraction)
                console.log('scrollFractionAdj',scrollFractionAdj)
                console.log(entry.intersectionRect.top);
                
                const andWidth = elemAnd.offsetWidth / 2
                const halfContainer = (container.offsetWidth / 2);
                const understandWidth = elemUnderstanding?.offsetWidth;
                const dataWidth = elemData?.offsetWidth;
                
                const windowWidth = window.innerWidth;
                const rightMax = halfContainer - understandWidth - andWidth; // largest distance from right side
                const leftMax = halfContainer - dataWidth - andWidth + 10; // largest distance from left side
                
                const newposUnderstanding = Math.max(windowWidth * 0.05, Math.min(scrollFractionAdj * rightMax, rightMax));
                const newposData = Math.max(windowWidth * 0.1, Math.min(scrollFractionAdj * leftMax, leftMax));

                elemData.style.left = `${newposData}px`;
                elemUnderstanding.style.right = `${newposUnderstanding}px`;
        });
    }, {
        root: null, // observing intersections relative to the viewport
        rootMargin: '0% 0px 0% 0px',
        threshold: thresholds
    });

    observer.observe(textcontainer);

    return () => {
        // Cleanup the observer when the component is destroyed
        observer.disconnect();
    };
});
</script>

<div id="scrolly-container">
    <div class="lead">When people can't get access to information, this creates a gap between</div>
    <h4 id="public-data">public data</h4>
    <div class="lead" id="and">and</div>
    <h4 id="public-understanding">public understanding</h4>
</div>
<div id="text-container">
<p>
    Public data is only truly transparent when its insights are accessible to everyone - not just
    data scientists.<br />
    <br />
</p>

<p>
    That’s why at Downstream, we do the heavy lifting. We clean, investigate, and transform raw
    government data into engaging, interactive stories that invite exploration and understanding. We
    connect scattered datasets, highlight hidden patterns, and present information in ways that help
    you understand the full picture. From tracking political influence through donation patterns to
    putting carbon emissions in perspective, we make important data accessible to everyone.<br />
    <br />
</p>

<p>
    That's why we're Downstream—delivering insights from public data, to the public.<br />
    <br />
</p>
</div>

<style>
    #scrolly-container {
        position: relative;
        height: 50vh; /* Provide enough vertical space for scrolling */
    }

    #public-understanding, #public-data {
    transition: right 0.4s ease-out, left 0.4s ease-out; /* Apply easing transition */
}

    #public-understanding {
        position: absolute;
        top: 50%; /* Adjust as needed */
        right: 50%;
        padding: 0.2rem 1rem;
        color: var(--color-white);
        background-color: var(--accent-primary);
        text-align: center;
    }

    #public-data {
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 0.2rem 1rem;
        color: var(--color-white);
        background-color: var(--accent-primary);
        text-align: center;
    }

    #and {
        position: absolute;
        top: 50%;
        left: calc((100% / 2) - 21px);
        text-align: center;
    }
</style>
