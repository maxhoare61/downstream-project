<script lang="ts">
	import { base } from "$app/paths";
	import type { AnimationDirection, TextDocumentData } from "lottie-web";
	import { onMount } from "svelte";
	import AnimatedHeader3 from "$lib/components/AnimatedHeader3.svelte";
	import LifetimeEmissionsChart from "$lib/components/LifetimeEmissionsChart.svelte";
	import AnnualEmissionsChart from "$lib/components/AnnualEmissionsChart.svelte";

	let isTitleVisible = false;
	let isVisibleBp = false;
	let isVisibleAh = false;

	onMount(() => {
		const titleElement = document.querySelector(".title");

		if (titleElement) {
			const elementTop = titleElement.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;

			// Adjust the threshold as needed
			if (elementTop < windowHeight * 0.75) {
				isTitleVisible = true;
			}
		}

		const handleScroll = () => {
			// List of elements you want to handle
			const elements = document.querySelectorAll(".fadein-scroll");

			// Keeps track of elements that have been handled
			const handledElements = new Set();

			elements.forEach((element, index) => {
				if (handledElements.has(element)) return;

				const elementTop = element.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;

				// Adjust the threshold as needed
				if (elementTop < windowHeight * 0.5) {
					element.classList.add("visible");

					handledElements.add(element);

					// Stop listening after all elements are visible
					if (handledElements.size === elements.length) {
						window.removeEventListener("scroll", handleScroll);
					}
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check on initial load

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	let container: Element | null = null;
	//let scrollcontainer: Element | null = null;
	let lottieAnimation: {
		loadAnimation: any;
		play?: (name?: string) => void;
		pause?: (name?: string) => void;
		stop?: (name?: string) => void;
		setSpeed?: (speed: number, name?: string) => void;
		setDirection?: (direction: AnimationDirection, name?: string) => void;
		searchAnimations?: (
			animationData?: any,
			standalone?: boolean,
			renderer?: string,
		) => void;
		destroy?: (name?: string) => void;
		registerAnimation?: (element: Element, animationData?: any) => void;
		setQuality?: (quality: string | number) => void;
		setLocationHref?: (href: string) => void;
		setIDPrefix?: (prefix: string) => void;
		updateDocumentData?: (
			path: (string | number)[],
			documentData: TextDocumentData,
			index: number,
		) => void;
	};

	onMount(async () => {
		if (typeof window !== "undefined") {
			const lottieModule = await import("lottie-web");
			lottieAnimation = lottieModule.default; // Ensure we get the default export
		}

		if (lottieAnimation && container) {
			// Ensure both are defined
			const animation = lottieAnimation.loadAnimation({
				container: container,
				renderer: "svg",
				loop: false,
				autoplay: false,
				path: `${base}/perspective-v2.json`,
			});

			animation.setSpeed(0.6);

			container.addEventListener("click", () => {
				if (animation.isPaused || animation.currentFrame === 0) {
					animation.play();
				}
			});

			animation.addEventListener("complete", () => {
				if (animation.playDirection === 1) {
					animation.goToAndStop(animation.totalFrames, true);
					animation.setDirection(-1);
				} else if (animation.playDirection === -1) {
					animation.setDirection(1);
				}
			});

			/* const scrollanimation = lottieAnimation.loadAnimation({
				container: scrollcontainer,
				renderer: "svg",
				loop: false,
				autoplay: false,
				path: `${base}/scopes.json`,
			});

			const handleScrollAnimation = () => {
				if (!scrollcontainer || !scrollanimation) return;

				const elements = document.querySelectorAll(".label-number"); // select elements to interact
				const highlightElements =
					document.querySelectorAll(".highlight-font");

				const rect = scrollcontainer.getBoundingClientRect();
				const viewportheight = window.innerHeight;

				// Calculate visibility thresholds
				const startAnimationWhenVisibleAt =
					viewportheight - 0.9 * rect.height;
				const endAnimationWhenVisibleAt = -100; // Top of the viewport

				const n1threshold = 0.0479;
				const n2threshold = 0.3908;
				const n3threshold = 0.7403;

				if (
					rect.bottom >= endAnimationWhenVisibleAt &&
					rect.top <= startAnimationWhenVisibleAt
				) {
					const effectiveHeight =
						startAnimationWhenVisibleAt - endAnimationWhenVisibleAt;
					const adjustedTop = rect.top - endAnimationWhenVisibleAt;
					const progress =
						1 -
						Math.min(Math.max(adjustedTop / effectiveHeight, 0), 1);
					elements.forEach((element, index) => {
						// Remove highlight from all elements first
						element.classList.add("darken");
						highlightElements[index].classList.add("darken-2");

						// Add 'highlight' class based on the progress and index
						if (
							progress >= n1threshold &&
							progress < n2threshold &&
							index === 0
						) {
							element.classList.remove("darken");
							highlightElements[index].classList.remove(
								"darken-2",
							);
							console.log("h1");
						} else if (
							progress >= n2threshold &&
							progress < n3threshold &&
							index === 1
						) {
							element.classList.remove("darken");
							highlightElements[index].classList.remove(
								"darken-2",
							);
						} else if (progress >= n3threshold && index === 2) {
							element.classList.remove("darken");
							highlightElements[index].classList.remove(
								"darken-2",
							);
						}
					});

					const totalFrames = scrollanimation.totalFrames;
					scrollanimation.goToAndStop(
						Math.floor(totalFrames * progress),
						true,
					);
				}
				 
			};

			window.addEventListener("scroll", handleScrollAnimation);
			handleScrollAnimation(); // Initialize on load to set the initial frame if already in view

			return () => {
				window.removeEventListener("scroll", handleScrollAnimation);
			};
			*/
		}
	});
</script>

<section id="hero">
	<div class="animated-header">
		<div class="title {isTitleVisible ? 'visible' : ''}">
			Understanding <br /> the scale of<br /> Emissions
		</div>
		<div class="ah1">
			<AnimatedHeader3 />
		</div>
	</div>
	<div class="content-container">
		<div class="paragraph-1">
			<p class="lead">
				One reason that misconceptions about climate change gain traction is that 
				it is hard to understand the units we 
				use to measure it. What does one tonne of CO2 look like? 
				How about a million tonnes of CO2? Studies have shown
				that people are surprisingly bad at grasping numbers on the scale of climate change,
				especially when they involve invisible gasses. To
				create genuine impetus for action in circles that are uninformed
				about the climate crisis, we need to start describing climate
				change in units that anyone can digest. This article attempts to
				to show that this approach has the potential to lay bare the seriousness of the climate crisis.
			</p>
		</div>
	</div>
</section>
<section id="s-origins">
	<div class="makeover-paragraph">
		<h2>What Does the Data Say?</h2>
		<div class="paragraph-2">
			<p>
				On average, each Australian produces 13 tonnes of CO₂ per year
				through direct emissions (7.5 tonnes) and electricity use (5.5
				tonnes), one of the highest in the developed world. To
				understand what this means, let’s look at what it takes to
				produce 1 tonne of CO2. Burning a gas stove it would take 2,551
				hours (or about 106 days) to emit 1 tonne of CO₂. Driving in a
				Toyota Camry, you could emit 1 tonne of CO₂ by driving ~5,050
				kilometres, roughly the distance of a round trip from Sydney to
				Perth.
			</p>
		</div>
	</div>
	<figure>
		<div id="infograph-1">
			<img
				src="{base}/infograph-1tco2.jpg"
				alt="Infographic"
				class="campaign-image"
			/>
		</div>
		<figcaption>
			Simple measurements showing ways to produce 1 tonne of CO2 (source:
			UtilitySmarts)
		</figcaption>
	</figure>
	<div class="makeover-paragraph">
		<div class="paragraph-2">
			<p>
				However, these 13 tonnes of CO2 represent a tiny fraction of the
				33 million tonnes of CO₂ produced by AGL’s facilities last year
				alone. Assuming AGLs emissions are evenly spread over the year,
				how long do you think it takes for AGL to produce emissions
				equivalent to one person’s average annual output? You may be
				surprised to know the answer; AGL produces approximately one
				Australian’s annual emissions worth of CO2 of every 12.37
				seconds or 2,553,398 times each year. The chart below shows the
				surprisingly short time it takes Australia’s three largest
				emitters to produce the annual emissions of a single Australian.
			</p>
		</div>
	</div>
	<figure id="d3-chart">
		<AnnualEmissionsChart />
		<figcaption>
			The time it takes for Australia's largest emitters to produce
			emissions equal to the amount the average Australian produces in one
			year (source: WorldBank)
		</figcaption>
	</figure>
	<div class="makeover-paragraph">
		<div class="paragraph-2">
			<p>
				Since we are interested in the usefulness of carbon footprint
				calculators in tackling climate change, it is worth delving into
				the relative impact of our lifestyle choices. Based on our
				analysis, the average person can reduce their annual emissions
				by 7.8 tonnes per year, by taking drastic, yet achievable
				actions. This means that a dedicated individual trying to reduce
				their emissions can potentially reduce the pollution created by
				EnergyAustralias business activities every 14.76 seconds, once
				each year. Alternatively, EnergyAustralia has output 7.8t of CO2
				5-6 times since you began reading this article. It is clear that
				while from our individual perspective we may feel we are
				creating significant emissions, the reality is often that they
				are a drop in the ocean compared to those produced by
				corporations.
			</p>
			<p>
				Another helpful way to understand the scale of corporate
				emissions is in terms of the emissions you are expected to
				produce in your lifetime. Through showing separate cases for
				low, medium and high personal emissions, we aim to visualise how
				the climate impact of lifestyle choices varies across
				individuals. The low case represents an individual taking all
				possible action to reduce their personal emissions, for instance
				by, taking fewer international flights, living without a car and
				following a plant-based diet. The high case represents an
				individual who completely neglects to make environmentally
				conscious decisions, and the medium case is the average personal
				emissions output in Australia.
			</p>
		</div>
	</div>
	<figure id="d3-chart-lifetime">
		<LifetimeEmissionsChart />
		<figcaption>
			The time it takes for Australia's largest emitters to produce
			emissions equal to the amount the average Australian produces in
			their lifetime (source: WorldBank)
		</figcaption>
	</figure>
	<div class="makeover-paragraph">
		<div class="paragraph-2">
			<p>
				It may be disheartening to those who choose to forego simple
				pleasures for the benefit of the planet to know that the
				cumulative impact of these choices over their lifetime, compared
				with the average individual’s lifetime emissions, is produced by
				AGL every 5 minutes and 15 seconds. Moreover, AGL is far from
				the only company producing emissions at this scale. There are
				seven companies in Australia who produce the average
				individual’s lifetime personal emissions in less than one hour,
				and 107 companies in Australia achieve this feat at least once
				each day. Importantly, these are not the indirect emissions
				created when consumers use products from these companies, they
				are the direct emissions caused by their daily operations.
			</p>
		</div>
		<h2>Conclusions</h2>
		<div class="paragraph-2">
			<p>
				While lifestyle changes can still provide market signals to
				corporations, there are clear limits to this strategy. However,
				not all hope is lost. Recognising this, we can refocus efforts
				on reforming the industries and institutions that shape the
				choices available to us in the first place.
			</p>
		</div>
	</div>
</section>

<style>
	.content-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: justify;
	}

	.animated-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		height: clamp(180px, 50vw, 700px);
		overflow: hidden;
	}

	.title {
		position: absolute;
		display: flex;
		flex-direction: column;
		font-family: "Work Sans", sans-serif;
		font-weight: 600;
		text-align: center;
		font-size: clamp(3.3rem, 11vw, 10rem);
		line-height: clamp(3.1rem, 12vw, 9rem);
		padding: clamp(12px, 5vw, 5rem);
		z-index: 2;
		color: white;
		white-space: nowrap;
		transition:
			opacity 1s ease,
			transform 1s ease;
		opacity: 0;
		max-height: 100vh;
		justify-content: end;
		letter-spacing: normal;
		height: 100%;
		width: 100%;
	}

	.visible {
		opacity: 1;
		transform: translateX(0);
	}

	h2 {
		text-align: left;
		border-bottom: 1px solid var(--color-border);
		padding: 2rem 0rem;
	}

	.ah1 {
		display: absolute;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		flex-grow: 1;
	}

	#lottie-animation {
		background-color: white;
		border-radius: var(--box-corner-radius);
		width: clamp(50px, 40vw, 500px);
		height: clamp(50px, 40vw, 500px);
	}

	#d3-chart {
		background-color: white;
		border-radius: var(--box-corner-radius);
		width: clamp(275px, 50vw, 750px);
		height: clamp(200px, 40vw, 500px);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#d3-chart-lifetime {
		background-color: white;
		border-radius: var(--box-corner-radius);
		width: clamp(290px, 60vw, 770px);
		height: clamp(350px, 50vw, 1000px);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#infograph-1 {
		padding: 1.5rem;
		background-color: white;
		border-radius: 3rem;
	}

	#s-origins {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	figure {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding-top: clamp(16px, 4.1vw, 3rem);
		padding-bottom: clamp(16px, 4.1vw, 3rem);
		max-width: clamp(350px, 70vw, 800px);
	}

	.italic {
		font-style: oblique;
	}

	#s-origins h2 {
		border-bottom: 1px solid var(--color-border);
		padding: 2rem 0rem;
	}

	.campaign-image {
		height: auto; /* Maintains the aspect ratio */
		border-radius: var(--box-corner-radius);
		width: clamp(260px, 61.9047vw, 520px);
	}

	.campaign-image.calc {
		stroke: white;
		stroke-width: 3px;
	}

	.lead {
		padding-bottom: 1rem;
		overflow: hidden;
	}

	.paragraph-1 {
		position: relative;
		padding: 4rem 0rem;
		margin-top: 2rem;
		width: clamp(320px, 65%, 600px);
	}

	.paragraph-2 {
		padding-top: clamp(16px, 4.1vw, 3rem);
		padding-bottom: clamp(16px, 4.1vw, 3rem);
	}

	.paragraph-2 p {
		margin-bottom: 2rem;
	}

	#perspective {
		padding-top: 0;
		background-color: var(--color-deep-green);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.scroll-animation-container {
		display: flex;
		border-radius: 2rem;
		height: 100%;
	}

	.scroll-animation-container.outer-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 6rem;
	}

	.highlight-font {
		font-weight: 600;
		font-size: 1.25rem;
		width: 100%;
		text-align: center;
		border-radius: 0.75rem;
		background-color: var(--color-blue);
		color: white;
	}

	.highlight-font.darken-2 {
		background-color: var(--color-background);
		color: var(--color-dark-text);
	}

	.lottie-scroll-animation {
		display: flex;
		border-radius: 2rem;
		overflow: hidden;
		width: clamp (380px, 65vw, 755px);
	}

	.scope {
		background-color: white;
		color: var(--color-dark-text);
		padding: 1rem;
		margin: 1.5rem;
		border-radius: 1rem;
		flex-direction: column;
		width: clamp(160px, 16vw, 220px);
		min-height: 100px;
	}

	.scope.s3 {
		width: clamp(220px, 16vw, 220px);
	}

	.scope p {
		color: var(--color-dark-text);
		text-align: left;
		padding: 0.75rem 0rem;
	}

	.labels {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.label-number {
		position: absolute;
		display: flex;
		align-items: center; /* Centers the content vertically */
		justify-content: center; /* Centers the content horizontally */
		text-align: center;
		width: 4rem;
		height: 4rem;
		font-size: 3rem;
		font-weight: 500;
		border-radius: 1rem;
		z-index: 1;
		color: white;
		background-color: var(--color-background);
		opacity: 0.85;
	}

	.label-number.darken {
		color: grey;
	}

	.label-number.n1 {
		top: 25%;
		left: 30%;
	}

	.label-number.n2 {
		top: 47%;
		left: 50%;
	}

	.label-number.n3 {
		top: 30%;
		right: 3%;
	}

	#s-makeover {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.makeover-paragraph {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: auto;
		width: clamp(320px, 65%, 600px);
	}
</style>
