<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener('scroll', function() {
		const scrollAmount = window.scrollY;
		const windowHeight = window.innerHeight;
		const blackRectangle = document.querySelector('.black-rectangle') as HTMLElement;
		// Calculate the new bottom position based on the scroll amount
		let newBottomPosition = (125 - (scrollAmount / windowHeight * 300)); // Maps scroll to percentage movement
		console.log(newBottomPosition);
		// Limit the rectangle's movement to not go above its initial position
		if (newBottomPosition < 0) newBottomPosition = 0;

		blackRectangle.style.top = newBottomPosition + '%';
		});
	});
</script>
	<section id="hero">
		<div class="text-box">
			<div class=hero-animation>
				<div class="invertible">
					<div class="title">The Carbon Footprint Story</div>
					<img src="{base}/footprints-transparent.png" alt="Footprints" class="footprints">
					<div class="black-rectangle"></div>
				</div>
			</div>
		<div class="content-container">
			<div class="paragraph-1">
			<p class="lead">The idea of the Carbon footprint has put our individual carbon producing behaviours under a microscope. Have you ever wondered how the immense focus on personal emissions came to be? Keep scrolling to find out.</p>
			<p class="lead">In 2004, British Petroleum, one of the largest owned oil companies worldwide, hired public relations professionals Ogilvy & Mather to promote the idea that climate change is not the fault of large corporations, but that of individuals.</p>
			<p class="lead">This initiative proved wildly successful, altering the way we view climate change in the 21st century.</p>
			</div>
		</div>
	</div>
	</section>
	<div class="content-container">
	<section id="campaign">
		<h2>A Campaign to Change the Way We Think</h2>
		<div class="content-box-2">
			<div class="paragraph-2">
				<p>At the start of the new millennia there was a growing expectation that it was time to begin fighting the effects of climate change. Public perceptions of the threat of climate change had increased due to devastating natural disasters such as the 2004 Boxing Day tsunami with a quarter of a million casualties. Seminal publications such as the Stern report also raised awareness by highlighting the negative economic consequences of climate change.</p>
				<p>Companies tied to carbon emitting practices found themselves in a difficult position where the public actually cared about their damaging behaviors. This was bad for business, but the secondary effects of such a shift were significant as well. Greater public interest in climate change could pressure politicians into policy reforms aimed at restricting emissions. </p>
				<p>The reality was that without some intervention, corporate emitters were looking at an existential threat. Over the following years, numerous campaigns sprung up with the aim of redirecting public climate anxiety in a new direction. </p>
				<p>The carbon footprint was an idea borne from this movement to distract from corporate environmental damaging by encourage people to view emissions in terms of their everyday choices such as diet, transport and overseas travel. </p>
			</div>
			<div class="pictures-2">
				<figure>
					<img src="{base}/bp-cf-ads.jpg" alt="BP's Advertising Campaign" class="campaign-image">
					<figcaption>The original BP carbon campaign from 2005 (source: XXX)</figcaption>
				</figure>
				<figure>
					<img src="{base}/cfc-screenshot.jpg" alt="Early Carbon Footprint Calculator" class="campaign-image calc">
					<figcaption>An early carbon footprint calculator (source: soft112)</figcaption>
				</figure>
			</div>
		</div>
	</section>
</div>
	<section id="perspective">
		<div class="perspective">Putting Emissions Back in Perspective</div>
		<div class="content-container">
		<div class="content-box-2">
			<div class="paragraph-2 light wht-brdr">
				<p>With a lack of accurate information, our collective sense of where climate change comes from has been distorted.</p>
				<p>The overwhelming sense of powerlessness and other negative emotions that come from taking individual responsibility drive individuals toward climate denial.</p>
				<p>The reality is that individuals' actions are important. How we incorporate sustainability into our lives sets an example for others and encourages a positive attitude toward these behaviors. The problem is that our sense of how serious these impacts are has become inflated compared to corporate emitters, who have the most real power to make a change.</p>
				<p>How can we use the tools available to us to help recover a clear image of what is really causing emissions to be produced at damaging levels?</p>
			</div>
			<div class="pictures-2">
				<figure>
					<img src="{base}/smoke-man.jpg" alt="Painting of a man's sillouette in smoke billowing from a smoke stack" class="campaign-image">
					<figcaption>The idea that individuals cause climate change has taken
						root in <br> public sentiment (source: DALLE)</figcaption>
				</figure>
			</div>
		</div>
		<div class="content-box-2">
			<div class="paragraph-2 light">
				<h2>A Reverse Carbon Calculator</h2>
				<p>With a lack of accurate information, our collective sense of where climate change comes from has been distorted.</p>
				<p>The overwhelming sense of powerlessness and other negative emotions that come from taking individual responsibility drive individuals toward climate denial.</p>
				<p>The reality is that individuals' actions are important. How we incorporate sustainability into our lives sets an example for others and encourages a positive attitude toward these behaviors. The problem is that our sense of how serious these impacts are has become inflated compared to corporate emitters, who have the most real power to make a change.</p>
				<p>How can we use the tools available to us to help recover a clear image of what is really causing emissions to be produced at damaging levels?</p>
			</div>
			<div class="pictures-2 chart">
				<figure>
					<img src="{base}/emissions-graph-1.png" alt="Diagram of individual vs corporate emissions" class="campaign-image">
					<div class="caption-1">Click on the chart to put your <br> individual emissions into perspective</div>
				</figure>
			</div>
		</div>
		</div>
	</section>

<style>

	.text-box {
		position: relative;
	}

	.invertible>* {
		mix-blend-mode: difference;
	}

	.title {
		margin: 4rem 0rem;
		padding: 3rem 0rem;
		font-family: 'Work Sans', sans-serif;
		font-size: 14.375rem;
		font-weight: 600;
		line-height: 10rem;
		letter-spacing: -10px;
		color: white;
	}

	.black-rectangle {
		position: absolute;
		top: 100vh; /* Start below the viewable area */
		left: 0;
		width: 100vw;
		height: 164vh; /* Adjust the height as needed */
		background-color: white;
	}

	.footprints {
		position: absolute;
		bottom: 0;
		right: 0rem;
		max-width: 40%;
	}

	#campaign {
		display: flex;
		flex-direction: column;
	}

	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 0rem 2rem;
	}

	#campaign h2 {
		border-bottom: 1px solid var(--color-border);
		padding: 2rem 0rem;
	}

	.content-box-2 {
		display: grid;
    	grid-template-columns: repeat(2, 50%);
		gap: 2rem;
	}

	.content-box-2:last-child {
		border-top: 1px solid white;
	}

	.pictures-2 {
		display: flex;
		flex-direction: column;
		justify-content: space-around; /* Adjust this to center, space-around, etc., based on your design */
		align-items: center; /* Aligns images vertically in the center */
		flex-wrap: wrap; /* Allows items to wrap into the next line if not enough space */
		gap: 4rem; /* Space between images */
		padding: 4rem 0rem;
	}

	.campaign-image {
		height: auto; /* Maintains the aspect ratio */
		width: 70%;
	}

	.campaign-image.calc {
		stroke: white;
		stroke-width: 3px;
	}

	.lead {
		padding-bottom: 1rem;
		max-width: 50%;
	}

	.paragraph-1{
		border-top: 1px solid var(--color-border);
		padding: 4rem 0rem;
		color: white;
	}

	.paragraph-2{
		padding: 4rem 0rem;
	}

	.paragraph-2.light {
		color: white;
	}

	.paragraph-2.wht-brdr {
		border-top: 1px solid white;
	}

	.paragraph-2 p{
		font-size: 1.25rem;
		margin-bottom: 2rem;
	}

	#perspective {
		background: linear-gradient(180deg, #039D69 0%, #013725 100%);
	}

	#perspective h2 {
		color: white;
	}

	.perspective {
		font-family: 'Work Sans', sans-serif;
		font-style: 'SemiBold';
		font-size: 9.5rem;
		letter-spacing: -14px;
		line-height: 100px;
		font-weight: 600;
		color: var(--color-aqua);
		padding: 4rem 0rem;
	}

	.pictures-2.chart{
		border-left: 1px solid white;
		margin: 4rem 0rem;
	}

	.caption-1 {
		color: white;
	}

</style>
