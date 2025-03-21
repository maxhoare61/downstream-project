<script>
	import WhatWeDo from "$lib/components/WhatWeDo.svelte";
	import { base } from '$app/paths';
</script>

<div class="content-container">
	<h1 class="title">About Us</h1>
	<div class="top-section">
		<div class="section-left">
			<div class="lead">At Downstream, we believe public data should be truly public.</div>
			<div class="paragraph-2">
				<p>
					However, important insights often sit buried in fragmented government databases and
					publications. Whilst the information is publicly available, extracting meaningful insights requires technical expertise,
					time, and resources. That’s why at Downstream, we do the heavy lifting. We clean, investigate, and transform raw
					government data into engaging, interactive stories that invite exploration and understanding. 
				</p>
				<figure class="figure">
					<img src="{base}/about-us.jpg" alt="Impressionist painting of a mining site" class="img1">
					<figcaption class="caption">Our mission is to create a world where the public feels empowered to make decisions on issues affecting themselves and the environment (source: Imagen 3 AI)</figcaption>
				</figure>
				<p>
					We connect scattered datasets, highlight hidden patterns, and present information in ways that help
					you understand the full picture. Our mission is to help the public use data to make informed decisions on important issues.
					<br />
				</p>
			</div>
		</div>
		<div class="section-right">
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

	.caption {
  		font-size: 0.8rem;
  		color: var(--color-border);
		text-align: center;
		width: 75%;
	}

	.top-section {
		display: grid;
  		grid-template-columns: 1fr; /* Divides the section into two equal columns */
  		gap: 2rem; 
	}

	@media (min-width: 768px) {
		.top-section {
			grid-template-columns: 1fr 1fr; /* Two columns: left and right */
		}
	}

	.section-left {
		display: flex;
		flex-direction: column;
		text-align: justify;
	}

	.section-right {
		padding: 0rem 2rem;
		align-items: center; /* Vertically centers the content */
		justify-content: center;
		height: 100%;
	}
	
	.paragraph-2 p {
		margin-bottom: 2rem;
	}

	.paragraph-2:last-child p {
		margin-top: 2rem;
	}

	.figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.img1 {
		max-width: 35vw; /* Make image responsive */
		height: auto; /* Maintain aspect ratio */
		border-radius: var(--box-corner-radius);
	}

</style>
