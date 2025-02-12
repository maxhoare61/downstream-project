<script>
	import WhatWeDo from "$lib/components/WhatWeDo.svelte";
</script>

<div class="content-container">
	<h1 class="title">About Us</h1>
	<div class="top-section">
		<div class="section-left">
			<div class="lead">At Downstream, we believe public data should be truly public.</div>
			<div class="body-text">
				<p>
					However, important insights often sit buried in fragmented government databases and
					publications. Whilst the information is publicly available, extracting meaningful insights requires technical expertise,
					time, and resources. That’s why at Downstream, we do the heavy lifting. We clean, investigate, and transform raw
					government data into engaging, interactive stories that invite exploration and understanding. 
					<br />
					<br />
					We connect scattered datasets, highlight hidden patterns, and present information in ways that help
					you understand the full picture. Our mission is to help the public use data to make informed decisions on important issues.
					<br />
				</p>
			</div>
		</div>
		<div class="section-right">
			<img src="/about-us.jpg" alt="Impressionist painting of a mining site">
			<p class="caption">Our mission is to create a world where the public feels empowered to make decisions on issues affecting themselves and the environment (source: Imagen 3 AI)</p>
		</div>
	</div>
	<WhatWeDo />
</div>

<style>
	.title {
		margin: 4rem 0rem;
		padding: 3rem 0rem;
		border-bottom: solid 1px var(--color-border);
	}

	.lead {
		padding-bottom: 1rem;
	}

	.content-container {
		gap: 2rem;
	}

	.body-text {
		display: flex;
		justify-content: left;
		padding-bottom: 2rem;
	}

	.caption {
  		font-size: 0.8rem;
  		color: var(--color-border);
	}

	.top-section {
		display: grid;
  		grid-template-columns: 1fr 1fr; /* Divides the section into two equal columns */
  		gap: 2rem; /* Adds space between the text and image */
	}

	.section-left {
		display: flex;
		flex-direction: column;
	}

	.section-right {
		padding: 0rem 2rem;
		align-items: center; /* Vertically centers the content */
	}

</style>
