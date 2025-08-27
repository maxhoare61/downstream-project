<script>
	import WhatWeDo from "$lib/components/WhatWeDo.svelte";
	import { base } from "$app/paths";
</script>

<div class="content-container">
	<h1 class="title">About Us</h1>
	<div class="top-section">
		<div class="paragraph-2">
			<p>
				At Downstream project, we believe critical information on
				important issues should be accessible. However, these insights
				often sit buried in fragmented government databases and
				publications. Whilst the information is publicly available,
				extracting meaningful insights requires technical expertise,
				time, and resources. That’s why at Downstream, we do the heavy
				lifting. We clean, investigate, and transform raw government
				data into engaging, interactive stories that invite exploration
				and understanding.
			</p>
			<p>
				We connect scattered datasets, highlight hidden patterns, and
				present information in ways that help you understand the full
				picture. Our mission is to help the public use data to make
				informed decisions on issues they care about.
			</p>
			<div class="fig-container-abtus">
				<figure class="figure-dessert">
					<img
						src="{base}/about-us.jpg"
						alt="Impressionist painting of a mining site"
						class="img1"
					/>
					<figcaption class="caption">
						Our mission is to create a world where the public feels
						empowered to make decisions on issues affecting
						themselves and the environment (source: Imagen 3 AI)
					</figcaption>
				</figure>
			</div>
		</div>
	</div>
</div>

<style>
	.title {
		border-bottom: solid 1px var(--color-border);
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
		display: flex;
	}

	.paragraph-2 p {
		margin-bottom: 2rem;
	}

	.paragraph-2:last-child p {
		margin-top: 2rem;
	}

	.figure-dessert {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: clamp(280px, 35vw, 420px);
		padding: 1rem 0;
	}

	.fig-container-abtus {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.img1 {
		height: auto; /* Maintain aspect ratio */
		border-radius: var(--box-corner-radius);
	}
</style>
