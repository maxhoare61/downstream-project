<script lang="ts">
	import { onMount } from 'svelte';
  
	let triggerElement: HTMLElement | null = null;
	
	onMount(() => {
		const observer = new IntersectionObserver(entries => {
		const bg = document.querySelector('.sample-content');
		const stickybox = document.querySelector('.sticky-box');
    	entries.forEach(entry => {
      	if (entry.isIntersecting && bg !== null && stickybox !== null) {
        	bg.classList.remove('transition');
			stickybox.classList.remove('transition-2');
      	} else if(bg !== null && stickybox !== null) {
        	bg.classList.add('transition');
			stickybox.classList.add('transition-2');
      	}
		});
		}, {
		threshold: 0.1
		});

		const target = document.querySelector('.trigger-element');
		if(target !== null){
			observer.observe(target);
		}
  	});
</script>

<div class="trigger-element"></div>
<div class="content-container">
	<div class="sticky-box transition-2">
		<div class="title">The Carbon Footprint Story</div>
		<div class="lead">Carbon footprint has put our individual carbon emissions under a microscope. 
		Have you ever wondered how the immense focus on personal emissions over the last 15 years came to be? 
		Scroll on to find out.</div>
	</div>
</div>
<div class="sample-content transition"></div>
<div class="sample-content-true"></div>

<style>

	.trigger-element {
		min-height: 50vh;
		min-width: 100vw;
		position: absolute;
		top: 0;
		opacity: 1;
	}

	.sample-content-true {
		min-width: 100%;
		min-height: 100vh;
	}

	.sample-content{
		position: fixed;
		top: 0;
		min-height: 100vh;
		opacity: 0;
		min-width: 100vw;
		transition: opacity 3s ease-in;
		background-color: var(--color-black-text);
		z-index: 5;
	}

	.sample-content.transition {
		opacity: 1;
	}

	.sticky-box {
		top: 2rem;
		position: sticky;
		transition: color 3s ease-in;
		z-index: 7;
	}

	.sticky-box.transition-2 {
		color: white;
	}

	.title {
		margin: 4rem 0rem;
		padding: 3rem 0rem;
		border-bottom: solid 1px var(--color-border);
		font-family: var(--h1-font-family);
		font-style: var(--h1-font-style);;
		font-size: var(--h1-font-size);
		font-weight: var(--h1-font-weight);
	}

	.lead {
		padding-bottom: 1rem;
		max-width: 50%;
	}

	.content-container {
		gap: 2rem;
		min-height: 250vh;
	}

</style>
