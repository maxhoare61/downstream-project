<script lang="ts">
	import { base } from "$app/paths";
	import type { AnimationDirection, TextDocumentData } from "lottie-web";
	import { onMount } from "svelte";
	import AnimatedHeader1 from "$lib/components/AnimatedHeader1.svelte";

	let isTitleVisible = false;

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
		<div class="title-container">
			<h1 class="title {isTitleVisible ? 'visible' : ''}">
				The <br /> Aesthetics <br /> of Inaction: <br /> BP's Story
			</h1>
		</div>
		<div class="ah1">
			<AnimatedHeader1 />
		</div>
	</div>
</section>
<div class="content-container">
	<div class="paragraph-1">
		<p class="tile-description i">
			<strong> Maxwell Hoare </strong>
		</p>
		<p class="lead">
			BPs 2000s marketing campaign, aptly titled "Beyond Petroleum",
			reframed the company as an environmental activist to the tune of
			$200 million. It garnered buy-in from consumers eager for
			irresponsible corporations to take the lead on solving climate
			change. A few years later, this green veneer would be shattered,
			after three record breaking environmental disasters and numerous
			fatalities at BP facilities left people scrambling for answers.
		</p>
	</div>
</div>
<section id="s-origins">
	<div class="makeover-paragraph">
		<div class="paragraph-2">
			<p>
				In the 15 years leading to 2000, climate change went mainstream.
				Support from huge celebrities (Leo Dicaprio and Sting each set
				up environmental foundations during this time) gave the movement
				culture cache, and the topic quickly penetrated the Overton
				window. In the '90s, Michael Jacksons music video for “Earth
				Song” had a cultural moment, with its dramatic imagery of wind
				machines blowing his hair and clothes. Public awareness of the
				issue led extreme weather events to be associated with the
				greenhouse effect, further elevating its profile in public
				discussion. Droughts across the US in 1988, and a
				record-breaking El Niño in 1998 aroused fear that natural
				disasters were being influenced by “man-made” factors. By the
				turn of the millennium, fear of an impending climate crisis was
				reaching all time highs.
			</p>
			<figure class="bar-chart">
				<figcaption class="caption lead">
					Most people heard about climate change for the first time in
					the 15 years leading up to 2000.
				</figcaption>
				<figcaption class="caption subcaption">
					Findings from polling on the question "Are you aware of the
					greenhouse effect?" (or similar). Collated by Nisbet and
					Myers (2007)
				</figcaption>
				<img
					src="{base}/colchart-climateawareness.png"
					alt="Bar chart of climate awareness increasing in the 2000s"
					class="bar-chart-img"
				/>
			</figure>
			<p>
				Around this time, petrol titan BP suddenly, radically, reworked
				their vibe. Their visual brand transformed into a kaleidoscope
				of green and yellow hues. They parted with the staunch, blocky
				aesthetic of the oil industry, and replaced their tagline -
				'British Petroleum' - with 'Beyond Petroleum'. Their theatrical
				new branding conveyed one idea with crystal clarity: BP wasn't
				like the other oil companies. Ads like the one below, which
				shows a car full of babies drive past several derelict gas
				stations in search of somewhere to fill up their car, reaffirmed
				this idea. No prizes for guessing which station they end up
				choosing.
			</p>
			<figure>
				<img src="{base}/BP_baby_ad.gif" alt="BP video ad" />
				<figcaption>BP's "Babies" TV ad was aired in 2007.</figcaption>
			</figure>
			<div class="old_logo_container">
				<figure>
					<img
						class="old_logo"
						src="{base}/bp_old_logo.jpg"
						alt="BPs old logo prior to rebrand"
					/>
					<figcaption>
						BP's logo prior to 1997 had none of the floral
						connotations of the logo that would replace it.
					</figcaption>
				</figure>
			</div>
			<p>
				BP's campaign spoke to a growing segment of the population that
				viewed fossil fuel companies as a significant cause of the
				greenhouse effect. By contrast, investors in oil were reluctant
				to back green initiatives that could harm profits. The response
				for most companies in this position had become increasingly
				well-defined; deny the science, delay action, wait until it all
				blows over.
			</p>
			<p>
				However, BP realised that this strategy had a critical flaw.
				Denying their role in climate change would harm their popularity
				with climate conscious customers, who would be key to turning
				public opinion in their favour. Instead, they would embody what
				the people wanted, an oil business moving “Beyond Petroleum”.
			</p>
			<p>
				BP’s transformation resonated with consumers who were yet to
				understand climate change fully, but still felt strongly about
				it. A study in 2008 found most consumers could be categorised as
				“Alarmed”, “Concerned” or “Cautious” regarding global warming;
				supportive of action, but unclear on causes or solutions. This
				lack of technical understanding gave strength to BP’s
				optics-driven approach, espousing the impression they were
				cutting back on damaging behaviour in response to public calls
				for change.
			</p>
			<figure class="bar-chart">
				<figcaption class="caption lead">
					Most people wanted to see something done about climate
					change without having a clear understanding of the science.
				</figcaption>
				<figcaption class="caption subcaption">
					Leiserowitz's "Six Americas" study (2008) found that
					consumers were motivated to see action on climate change,
					but lacked understanding of what causes and solutions would
					look like.
				</figcaption>
				<img
					src="{base}/six-americas.png"
					alt="Bar chart of climate awareness increasing in the 2000s"
					class="bar-chart-img"
				/>
			</figure>
			<p>
				While other companies would flounder against the rising wave of
				climate science, BP’s campaign was designed to profit from it.
				BP was the first in the oil industry to openly acknowledge
				climate change and, by 2000, the world’s largest producer of
				solar panels. In 2005, Australia’s then Federal Industry
				Minister Ian Macfarlane showed endorsement for BP’s green
				practices by announcing his $100m Renewable Energy Development
				Initiative at their solar factory in Sydney. As a company
				emerging in several global markets, it was this green image of
				BP that left a first impression in many future customers' minds.
				Later, after billboards and brightly lit petrol stations had
				made their way across the globe, surveys found that consumers
				viewed BP as “the most environmentally friendly oil company”.
			</p>
			<h2>Beyond the theatrics</h2>
			<p></p>
			<p>
				While BP had become a dark horse of the green marketing world,
				their façade betrayed a darker reality in their operations.
				Behind the scenes, BP had quietly been laser-focused on reducing
				overhead. The resulting strategy was one of blatant cost cutting
				negligence concealed by a pro-environment veneer. Whilst
				initially contained, these oversights soon began to compound,
				culminating in a series of dramatic incidents that would shake
				the firms green identity to its core.
			</p>
			<p>
				In 2005, a distillation tower at the Texas City oil refinery was
				restarted after planned maintanence. What the operators hadn't
				realised is that the tower had failed to be fitted with
				necessary drainage equipment. Overfilled beyond its limits, the
				tower ignited into an enormous explosion that claimed 15 lives.
				A year later, in 2006, it was reported that BPs Prudhoe Bay oil
				pipeline had been leaking extensively into the Alaskan
				wilderness. The final moments of BP’s “Beyond Petroleum” alter
				ego were marked by the Deepwater Horizon drilling platform
				explosion in 2010, resulting in the largest marine oil spill in
				human history.
			</p>
			<p>
				The failure of BP’s campaign offers insight into the power of
				strategic narrative when cultural and scientific understanding
				of an issue are yet to align. By presenting itself as a company
				that had moved "Beyond Petroleum," BP captured the aspirations
				of a public increasingly aware of climate risks, yet uncertain
				about how change would materialise. Instead of challenging the
				public’s assumptions, BP affirmed them. In doing so, they
				constructed a powerful illusion that deferred scrutiny and
				allowed harmful practices to continue beneath a carefully
				manicured exterior.
			</p>
			<h3 class="references">References</h3>
			<p>
				1) Nisbet, M. C., & Myers, T. A. (2007). The polls–trends:
				Twenty years of public opinion about global warming. Public
				Opinion Quarterly, 71(3), 444–470.
			</p>
			<p>
				2) Barrage, L., Chyn, E. and Hastings, J. (2020) ‘Advertising
				and Environmental Stewardship: Evidence from the BP oil spill’,
				American Economic Journal: Economic Policy, 12(1), pp. 33–61.
				doi:10.1257/pol.20160555.
			</p>
			<p>
				3) Carpenter, S. (2020) ‘After Abandoned “Beyond Petroleum”
				Re-brand, BP’s New Renewables Push Has Teeth’, Forbes, 4 August.
			</p>
			<p>
				4) Frick, W. (2014) ‘Study: Green Advertising Helped BP Recover
				from the Deepwater Horizon Spill’, Harvard Business Review, 6
				February.
			</p>
			<p>
				5) Leiserowitz, A. et al. (2021) ‘Global warming’s six Americas:
				A review and recommendations for climate change communication’,
				Current Opinion in Behavioral Sciences, 42, pp. 97–103.
				doi:10.1016/j.cobeha.2021.04.007.
			</p>
			<p>
				6) Nocera, J. (2006) ‘Green Logo, but BP Is Old Oil’, The New
				York Times, 12 August.
			</p>
			<p>
				7) Sweet, B. (2010) ‘BP Closes Another Solar Manufacturing
				Plant’, IEEE Spectrum, 2 April.
			</p>
			<p>
				8) BP. (2001). BP Annual Report 2001: Beyond Petroleum.
				Retrieved from BP archive.
			</p>
			<p>
				9) U.S. Chemical Safety Board. (2007). Investigation Report:
				Refinery Explosion and Fire. BP Texas City, Texas, March 23,
				2005.
			</p>
			<p>
				10) National Commission on the BP Deepwater Horizon Oil Spill
				and Offshore Drilling. (2011). Deep Water: The Gulf Oil Disaster
				and the Future of Offshore Drilling. U.S. Government Printing
				Office.
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
		height: clamp(250px, 50vw, 600px);
		overflow: hidden;
	}

	.title {
		position: absolute;
		display: flex;
		flex-direction: column;
		font-family: "Work Sans", sans-serif;
		font-weight: 600;
		text-align: left;
		font-size: clamp(3rem, 11vw, 7rem);
		line-height: clamp(3rem, 9vw, 6rem);
		padding: clamp(12px, 7vw, 5rem);
		z-index: 2;
		color: var(--color-dark-text);
		white-space: nowrap;
		transition:
			opacity 1s ease,
			transform 1s ease;
		opacity: 0;
		transform: translateX(-20px);
		max-height: 100vh;
		justify-content: center;
	}

	.title-container {
		height: 100%;
		display: flex;
		align-items: end;
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

	.old_logo {
		width: 75%;
	}

	.old_logo_container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.ah1 {
		display: absolute;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		flex-grow: 1;
	}

	.references {
		color: var(--color-background-dark);
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
		border-top: 1px solid var(--color-border);
	}

	#s-origins h2 {
		border-bottom: 1px solid var(--color-border);
		padding: 1rem 0rem;
	}

	.lead {
		padding-bottom: 1rem;
		overflow: hidden;
	}

	.paragraph-1 {
		position: relative;
		padding: 1rem 0rem;
		width: clamp(320px, 65%, 600px);
	}

	.paragraph-2:not(:first-child) {
		padding-top: clamp(16px, 4.1vw, 3rem);
		padding-bottom: clamp(16px, 4.1vw, 3rem);
	}

	.paragraph-2 p {
		margin-bottom: 2rem;
	}

	.makeover-paragraph {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: auto;
		width: clamp(320px, 65%, 600px);
	}

	.bar-chart {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: auto;
		padding: 2rem 0;
	}

	.bar-chart-img {
		padding: 0.5rem 0;
		width: 100%;
	}

	.caption {
		color: var(--color-dark-text);
		text-align: left;
		width: 100%;
	}

	.caption.lead {
		padding: 0;
		font-weight: 500;
		font-size: 1.25rem;
	}

	.caption.subcaption {
		font-size: 1.1rem;
	}

	.tile-description.i {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 2rem;
		justify-content: left;
		align-items: center;
	}
</style>
