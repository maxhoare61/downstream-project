<script>
	import SplittingText from '$lib/components/SplittingText.svelte';
	import WhatWeDo from "$lib/components/WhatWeDo.svelte";
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
	<SplittingText/>
	<WhatWeDo />
</div>

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
</style>
