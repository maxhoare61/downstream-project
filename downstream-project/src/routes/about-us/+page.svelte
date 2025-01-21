<script>
	import Header from '$lib/components/Header.svelte';
	import SubHeader from '$lib/components/SubHeader.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	import { onMount } from 'svelte';
	import scrollama from 'scrollama';
	import * as d3 from 'd3';

	let scroller;

	onMount(() => {
        if (typeof window !== 'undefined') {
            scroller = scrollama(); // Initialize scrollama

            function handleStepProgress(response) {
                console.log(response);
                var el = d3.select(response.element);

                var val = el.attr('data-step');
                var rgba = 'rgba(' + val + ', ' + response.progress + ')';
                el.style('background-color', rgba);
                el.select('.progress').text(d3.format('.1%')(response.progress));
            }

            function resize() {
                var min = window.innerHeight * 0.5;
                var h = min + Math.random() * window.innerHeight * 0.25;
                step.style('height', Math.floor(h) + 'px');
                scroller.resize();
            }

            function setupScrollama() {
                scroller
                    .setup({
                        step: '#scroll .step',
                        progress: true,
                        debug: false
                    })
                    .onStepProgress(handleStepProgress);

                window.addEventListener('resize', resize);
            }

            setupScrollama();
        }
    });
</script>

<div class="content-container">
	<h1 class="title">About Us</h1>
	<div class="lead">At Downstream, we believe public data should be truly public.</div>

	<p>
		However, important insights often sit buried in fragmented government databases and
		publications. <br />
		Whilst the information is publicly available, extracting meaningful insights requires technical expertise,
		time, and resources.<br />
	</p>

	<div class="animation-container">
		<div class="animation-backdrop"></div>
	</div>
	<section id="scroll">
		<div class="lead top-left">This creates a gap between</div>
		<div class="lead public-data">public data</div>
		<div class="lead and-text">and</div>
		<div class="lead public-understanding">public understanding.</div>
	</section>
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

<Footer />

<style>
	.title {
		margin: 4rem 0rem;
		padding: 3rem 0rem;
		border-bottom: solid 1px var(--color-border);
	}

	.lead {
		padding: 2rem 0rem;
	}

	.animation-backdrop {
		position: sticky;
		top: calc((100vh - 40vh) / 2);
		background-color: var(--color-white);
		border-radius: 2rem;
		height: 40vh;
	}

	.animation-container {
		margin: 4rem 0rem;
		height: 80vh;
	}

	#scroll {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vh;
	}

	#scroll .lead {
		position: absolute;
	}

	#scroll .top-left {
		top: 0;
		left: 0;
	}

	#scroll .public-data {
		text-align: right;
		top: 50%;
		left: 35%;
	}

	#scroll .and-text {
		top: 50%;
		left: 50%;
	}

	#scroll .public-understanding {
		text-align: left;
		top: 50%;
		right: 19%;
	}
</style>
