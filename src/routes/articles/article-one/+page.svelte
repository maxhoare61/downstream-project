<script lang="ts">
	import { base } from "$app/paths";
	import type { AnimationDirection, TextDocumentData } from "lottie-web";
	import { onMount } from "svelte";

	onMount(() => {
		document.addEventListener("scroll", function () {
			const scrollAmount = window.scrollY;
			const windowHeight = window.innerHeight;
			const heroHeight = document.getElementById('hero')?.offsetHeight ?? 0;
			const blackRectangle = document.querySelector(
				".black-rectangle",
			) as HTMLElement;
			// Calculate the new bottom position based on the scroll amount
			let newBottomPosition = windowHeight - 100 - (scrollAmount / windowHeight) * 1000; // Maps scroll to percentage movement
			// Limit the rectangle's movement to not go below its initial position
			if (newBottomPosition < 0) {newBottomPosition = 0};

			blackRectangle.style.top = newBottomPosition + "px";
		});
	});

	let container: Element | null = null;
	let lottieAnimation: { loadAnimation: any; play?: (name?: string) => void; pause?: (name?: string) => void; stop?: (name?: string) => void; setSpeed?: (speed: number, name?: string) => void; setDirection?: (direction: AnimationDirection, name?: string) => void; searchAnimations?: (animationData?: any, standalone?: boolean, renderer?: string) => void; destroy?: (name?: string) => void; registerAnimation?: (element: Element, animationData?: any) => void; setQuality?: (quality: string | number) => void; setLocationHref?: (href: string) => void; setIDPrefix?: (prefix: string) => void; updateDocumentData?: (path: (string | number)[], documentData: TextDocumentData, index: number) => void; };

	onMount(async () => {
    if (typeof window !== 'undefined') {
        const lottieModule = await import('lottie-web');
        lottieAnimation = lottieModule.default; // Ensure we get the default export
    }
	if (lottieAnimation && container) {  // Ensure both are defined
        const animation = lottieAnimation.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: '/perspective-v2.json'
        });
		animation.setSpeed(0.6);

        container.addEventListener('click', () => {
            if (animation.isPaused || animation.currentFrame === 0) {
                animation.play();
			} else {
                animation.stop();
                animation.play();
            }
        });

		//animation.addEventListener('enterFrame', () => {
    	//console.log("Current Frame:", animation.currentFrame);
		//});

		animation.addEventListener('complete', () => {
    	//console.log("Animation completed. Forcing last frame.");
    	animation.goToAndStop(animation.totalFrames, true);
});

    }
});
</script>

<section id="hero">
	<div class="text-box">
		<div class="hero-animation">
			<div class="invertible">
				<div class="content-container">
					<div class="title">The Carbon Footprint Story</div>
					<img
						src="{base}/footprints-transparent.png"
						alt="Footprints"
						class="footprints"
					/>
				</div>
				<div class="black-rectangle"></div>
				<div class="content-container">
					<div class="paragraph-1">
						<p class="lead">
							The idea of the Carbon footprint has put our
							individual carbon producing behaviours under a
							microscope. Have you ever wondered how the immense
							focus on personal emissions came to be? Keep
							scrolling to find out.
						</p>
						<p class="lead">
							In 2004, British Petroleum hired public relations
							experts to promote the idea that climate change is not the fault of large
							corporations, but that of individuals.
						</p>
						<p class="lead">
							This initiative proved wildly successful, altering
							the way we view climate change in the 21st century.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="content-container">
	<section id="campaign">
		<h2>Anatomy of a campaign</h2>
		<div class="content-box-2">
			<div class="paragraph-2">
				<p>
					At the start of the new millennia there was a growing
					expectation that it was time to begin fighting the effects
					of climate change. Public perceptions of the threat of
					climate change had increased due to devastating natural
					disasters such as the 2004 Boxing Day tsunami with a quarter
					of a million casualties. Seminal publications such as the
					Stern report also raised awareness by highlighting the
					negative economic consequences of climate change.
				</p>
				<p>
					Companies tied to carbon emitting practices found themselves
					in a difficult position where the public actually cared
					about their damaging behaviors. This was bad for business,
					but the secondary effects of such a shift were significant
					as well. Greater public interest in climate change could
					pressure politicians into policy reforms aimed at
					restricting emissions.
				</p>
				<p>
					The reality was that without some intervention, corporate
					emitters were looking at an existential threat. Over the
					following years, numerous campaigns sprung up with the aim
					of redirecting public climate anxiety in a new direction.
				</p>
				<p>
					The carbon footprint was an idea borne from this movement to
					distract from corporate environmental damaging by encourage
					people to view emissions in terms of their everyday choices
					such as diet, transport and overseas travel.
				</p>
			</div>
			<div class="pictures-2">
				<figure>
					<img
						src="{base}/bp-cf-ads.jpg"
						alt="BP's Advertising Campaign"
						class="campaign-image"
					/>
					<figcaption>
						The original BP carbon campaign from 2005 (source: XXX)
					</figcaption>
				</figure>
				<figure>
					<img
						src="{base}/cfc-screenshot.jpg"
						alt="Early Carbon Footprint Calculator"
						class="campaign-image calc"
					/>
					<figcaption>
						An early carbon footprint calculator (source: soft112)
					</figcaption>
				</figure>
			</div>
		</div>
	</section>
</div>
<figure class="sticky-text">
	<img
		src="{base}/smoke-stack-extended.jpg"
		alt="Painting of a man's sillouette in smoke billowing from a smoke stack"
		class="smokestack-image"
	/>
	<div class="perspective above">Putting Emissions Back in Perspective</div>
</figure>
<section id="perspective">
	<div class="content-container">
		<div class="content-box-2">
			<div class="paragraph-2 light wht-brdr">
				<p>
					With a lack of accurate information, our collective sense of
					where emissions originate has been distorted.
				</p>
				<p>
					The overwhelming sense of powerlessness and other negative
					emotions that come from taking individual responsibility
					drives individuals toward climate denial.
				</p>
				<p>
					The reality is that individuals' actions are important. How
					we incorporate sustainability into our lives sets an example
					for others and encourages a positive attitude toward these
					behaviors. The problem is that our sense of how serious
					these impacts are has become inflated compared to corporate
					emitters, who have the most real power to make a change.
				</p>
				<p>
					How can we use the tools available to us to help recover a
					clear image of what is really causing emissions to be
					produced at damaging levels?
				</p>
			</div>
			<div class="pictures-2">
			</div>
		</div>
		<div class="content-box-2">
			<div class="paragraph-2 light">
				<h2>The Reverse Carbon Calculator</h2>
				<p>
					Downstream aims to advocate for a more grounded perspective of individual emissions by providing tools to understand them in context. 
					The reverse carbon calculator is a tool which calculates your carbon footprint much like other carbon footprint calculators except with a key difference.
					While many carbon footprint calculators aim to emphasise your impact on the planet, our tool compares your individual emissions to those produced by several corporations.
				</p>
				<p>
					The purpose of this is to help 'zoom out' our idea of which actions will really make a difference to the climate in the long run. 
					Our personal actions are big on the scale of our day to day lives which can lead us to believe they have an outsided impact compared to their actually significance.
					For instance, while it can be beneficial to cycle to a destination instead of driving, the effort required to do this may be better directed toward pushing for change in 
					business and politics, since decisions in these spaces can have consequences on a large scale.
				</p>
			</div>
			<div class="pictures-2 chart">
				<figure>
					<div bind:this={container} id="lottie-animation" style="width: 100%; height: 500px;"></div>
					<div class="caption-1">
						Click on the chart to see your <br /> emissions in perspective.
					</div>
				</figure>
			</div>
		</div>
	</div>
</section>

<style>
	.text-box {
		position: relative;
	}

	.invertible > * {
		mix-blend-mode: difference;
	}

	.title {
		margin: 4rem 0rem;
		padding: 3rem 0rem;
		font-family: "Work Sans", sans-serif;
		font-size: 13.469387755vw;
		font-weight: 600;
		line-height: 9.795918367vw;
		letter-spacing: auto;
		color: white;
		max-width: 90%;
	}

	#lottie-animation {
		background-color: var(--color-background);
		border-radius: var(--box-corner-radius);
	}

	.black-rectangle {
		position: absolute;
		top: 80vh; /* Start below the viewable area */
		left: 0;
		width: 100vw;
		height: 1200px; /* Adjust the height as needed */
		background-color: white;
	}

	.footprints {
		position: absolute;
		top: 0;
		right: 0rem;
		max-width: 40%;
	}

	#campaign {
		display: flex;
		flex-direction: column;
	}

	figure {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.smokestack-image {
		width: 100%;
	}

	.perspective.above {
		position: absolute;
		text-align: left;
		bottom: 0;
		right: 0;
		margin-right: 2rem;
		max-width: 100%;
		line-height: 120px;
		color: var(--color-deep-green);
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
		width: 50%;
	}

	.paragraph-1 {
		border-top: 1px solid var(--color-border);
		max-height: 897px;
		padding: 4rem 0rem;
		color: white;
	}

	.paragraph-2 {
		padding: 4rem 0rem;
	}

	.paragraph-2.light {
		color: white;
	}

	.paragraph-2.wht-brdr {
		border-top: 1px solid white;
		margin-top: 2rem;
	}

	.paragraph-2 p {
		font-size: 1.25rem;
		margin-bottom: 2rem;
	}

	#perspective {
		background-color: var(--color-deep-green);
	}

	#perspective h2 {
		color: white;
		padding-bottom: 2rem;
	}

	.perspective {
		font-family: "Work Sans", sans-serif;
		font-style: "SemiBold";
		font-size: 8.7rem;
		letter-spacing: auto;
		line-height: 120px;
		font-weight: 600;
		color: var(--color-aqua);
		padding: 4rem 1rem;
	}

	.pictures-2.chart {
		margin: 4rem 0rem;
		height: auto;
	}

	.caption-1 {
		color: white;
		padding-top: 2rem;
	}

</style>
