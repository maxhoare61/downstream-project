<script lang="ts">
	import { base } from "$app/paths";
	import type { AnimationDirection, TextDocumentData } from "lottie-web";
	import { onMount } from "svelte";
	import AnimatedHeader1 from "$lib/components/AnimatedHeader1.svelte";

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
			Why don’t <br /> we talk about <br /> the carbon <br /> footprint
			<br /> anymore?
		</div>
		<div class="ah1">
			<AnimatedHeader1 />
		</div>
	</div>
	<div class="content-container">
		<div class="twitter-tweet">
			<div
				class="tweet-card fadein-scroll bp {isVisibleBp
					? 'visible'
					: ''}"
			>
				<div class="creator-container">
					<div class="tweet creator">
						bp <br /> <span class="handle">@bp_plc</span>
					</div>
				</div>
				<div class="tweet content">
					<div>
						The first step to reducing your emissions is to know
						where you stand. Find out your <span class="hashtag"
							>#carbonfootprint</span
						> with our new calculator & share your pledge today!
					</div>
				</div>
				<div class="tweet info">
					Comment / 419 Likes /
					<a
						class="tweet source"
						href="https://x.com/andrwfhenderson/status/1187386101960454146"
						target="_blank"
					>
						Source</a
					>
				</div>
			</div>
			<div
				class="tweet-card fadein-scroll ah {isVisibleAh
					? 'visible'
					: ''}"
			>
				<div class="creator-container">
					<!-- <img
						src="{base}/blank-pfp.jpg"
						alt="blank pfp"
						class="pfp"
					/> -->
					<div class="tweet creator">
						Andrew Henderson <br />
						<span class="handle">@andrwfhenderson</span>
					</div>
				</div>
				<div class="tweet content">
					<div>
						<span class="hashtag">@bp_plc</span> I pledge not to spill
						4.9 million barrels of oil into the gulf of mexico
					</div>
				</div>
				<div class="tweet info">
					Comment / 57k Likes /
					<a
						class="tweet source"
						href="https://x.com/andrwfhenderson/status/1187386101960454146"
						target="_blank"
					>
						Source</a
					>
				</div>
			</div>
			<div
				class="tweet-card fadein-scroll jc {isVisibleBp
					? 'visible'
					: ''}"
			>
				<div class="creator-container">
					<div class="tweet creator">
						jodie c <span class="handle">@jod_coll</span>
					</div>
				</div>
				<div class="tweet content">
					<div>
						Listen, we are all to blame for the climate crisis. Some
						of us drive to work, some of us forget to recycle, and
						some of us own fossil fuel companies whose relentless
						exploitation of the world’s oil, gas and coal reserves
						can be directly linked to more than one-third of all
						greenhouse gasses produced.
					</div>
				</div>
				<div class="tweet info">
					Comment / 46k Likes /
					<a
						class="tweet source"
						href="https://x.com/jodcoll/status/1424692518273392642"
						target="_blank"
					>
						Source</a
					>
				</div>
			</div>
			<div
				class="tweet-card fadein-scroll shell {isVisibleBp
					? 'visible'
					: ''}"
			>
				<div class="creator-container">
					<div class="tweet creator">
						Shell <span class="handle">@shell</span>
					</div>
				</div>
				<div class="tweet content">
					<div>
						📊 What are you willing to change to help reduce
						emissions? #EnergyDebate <br />
						1) 💨 offset emissions <br />
						2) ✈️ stop flying <br />
						3) 🚗 buy electric vehicle <br />
						4) ⚡️ renewable electricity
					</div>
				</div>
				<div class="tweet info">
					Comment / 869 Likes /
					<a
						class="tweet source"
						href="https://x.com/Shell/status/1323184318735360001"
						target="_blank"
					>
						Source</a
					>
				</div>
			</div>
		</div>
		<div class="paragraph-1">
			<p class="tile-description i">
				<strong> Maxwell Hoare </strong>
			</p>
			<p class="lead">
				The carbon footprint reached levels of stardom in the 2000s
				eclipsed only by Bionicle. Personally, I developed the sense
				that I was responsibility for the warming of the planet. At the
				same time, some of the largest fossil fuel companies were big
				advocates of this new idea. While the carbon footprint was
				inescapable in the 2000s, the same cannot be said today. Why did
				such a well-intentioned idea silently slip into obscurity over
				the past 2 decades?
			</p>
		</div>
	</div>
</section>
<section id="s-origins">
	<div class="makeover-paragraph">
		<h2>Climate anxiety is bad for business</h2>
		<div class="paragraph-2">
			<p>
				In the years leading to 2000, most people heard about global
				warming for the first time. Free from the bias and fatigue now
				associated with the issue, how would you react to that
				information? Young people were frustrated by how unphased people
				seemed about their impeding annihilation. Parents worried about
				the desolate, bareen world their children, and grandchildren
				would grow up in. Some people did not have time to care. Fossil
				fuel companies knew that the clear association between
				themselves and the greenhouse effect meant that a reckoning of
				immense proportions was on the horizon. When exactly it would
				come to pass, however, remained uncertain for now.
			</p>
			<figure class="bar-chart">
				<figcaption class="caption lead">
					Most people heard about climate change for the first time in
					the 15 years leading up to 2000.
				</figcaption>
				<figcaption class="caption subcaption">
					Findings from polling on awareness of the greenhouse effect.
					Collated by Nisbet and Myers (2007)
				</figcaption>
				<img
					src="{base}/colchart-climateawareness.png"
					alt="Bar chart of climate awareness increasing in the 2000s"
					class="bar-chart-img"
				/>
			</figure>
			<p>
				Around the same time, petrol behemoth BP suddenly, radically,
				reworked their vibe. Their visual brand transformed into a
				cacophony of green and yellow hues and soft, lowercase font.
				They adopted a new logo resembling a shining sun, drastically
				out of step with the quiet, blocky logos of its competitors. To
				show their commitment, they even parted with their real name,
				British Petroleum, asserting BP now stood for Beyond Petroleum.
				Taken together, their theatrical new branding conveyed one
				message with crystal clarity: BP is no longer an oil company.
			</p>
			<p>
				Executives at companies like BP were caught in a bind between
				the interests of shareholders and the broader public. Customers
				who paid BP to put petrol in their cars were asking the company
				to change its ways, while shareholders were reluctant to lose
				precious dividends to clean energy projects. BP was different in
				that they sensed climate denial was not going to be a hit with
				the people. Publicly denying what people already believed would
				not only fall on deaf ears but raise the companies profile as an
				antagonist of the climate discourse. Recognising this, they had
				the unique opportunity to put a stop to the idea they were
				another company putting profit over the greater good. Somewhere
				between a genuine, green overhaul, and clinging onto its fossil
				fuel past, BP would find their path to salvation. In 2000, with
				a price tag over $200 million, they announced their next move.
				BP would be the first oil company in history to “go green”.
			</p>
			<p>
				BPs green transformation resonated with people’s desire to see
				change from corporations. While other companies would flounder
				against the rising wave of climate science, BP would ride it
				into the sunset. They were the first in the oil industry to
				openly acknowledge climate change and, by 2000, the world’s
				largest producer of solar panels . As a company then new to
				several markets globally, it was this image that left a first
				impression in many future customers minds . Later, after the
				billboards and brightly lit petrol stations had reached across
				the globe, surveys found that consumers saw BP as “the most
				environmentally friendly oil company” .
			</p>
			<p>
				While Frutiger Aero aesthetics and witty newspaper ads were
				undeniably a winning combination, BPs squeaky-clean exterior
				belied a dark side to the company. BP had been lazer-focussed on
				reducing overhead by any means necessary, even at the expense of
				necessary quality and safety protocols. The first crack in the
				green oil facade occurred in XX when it was reported that their
				XX(name) oil pipeline had been leaking extensively into the
				surrounding environment. While clearly divorced from the image
				they were aiming to project into the world, this was not the
				issue that would ultimately topple their reputational. It was X
				years later in XX when Texas oil refinery suddenly burst into
				flames, revealing that their negligence wasn’t purely
				environmental but extended to human life as well. The final
				moments of BPs “beyond petroleum” alter ego were marked by the
				deepwater horizon drilling platform explosion, resulting in the
				largest oil spill in human history.
			</p>
			<figure>
				<img
					src="{base}/BP-Logo-history.jpg"
					alt="The progression of BPs logo since the 1960s"
					class="campaign-image"
				/>
				<figcaption>
					The progression of BP's logo since the 1960s (1000 Logos)
				</figcaption>
			</figure>
			<figure>
				<img
					src="{base}/bp-cf-ads.jpg"
					alt="BP's Advertising Campaign"
					class="campaign-image"
				/>
				<figcaption>
					BP's 'green' campaign from 2005 (source: BP)
				</figcaption>
			</figure>
		</div>
	</div>
</section>
<div class="content-container">
	<section id="s-origins">
		<div class="makeover-paragraph">
			<h2>
				How the Carbon Footprint Changed How You Think About Climate
				Change
			</h2>
			<div class="paragraph-2">
				<p>
					For companies like BP, the carbon footprint calculator was
					not a tool to empower users, but rather a PR strategy to
					redirect attention to consumer emissions whilst bolstering
					their climate friendly image. Consumers, feeling the
					pressure of climate anxiety, were keen to take action on
					global warming. By providing a micro breakdown of
					individuals emissions, carbon footprint calculators like BPs
					satiated this desire whilst simultaneously raising the
					profile of consumer’s role in climate change. BPs website
					featured an online carbon footprint calculator, through
					which users could input lifestyle data, calculate their
					annual emissions, and pledge to reduce them. The calculator
					helped BP to reframe itself as an ally of the climate
					movement by providing tools which ostensibly helped reduce
					emissions, while pushing responsibility for emissions down
					the supply chain onto end users. The chart below illustrates
					how this consumer-focused framing distorts our understanding
					of climate responsibility—creating tunnel vision that
					overlooks the bigger picture.
				</p>
				<figure>
					<div bind:this={container} id="lottie-animation"></div>
					<figcaption class="caption-1">
						Click on the chart to see your <br /> emissions in
						perspective. Click again to <br /> show your individual emissions
						breakdown.
					</figcaption>
				</figure>
			</div>
			<h2>Key Misconceptions About Personal Emissions</h2>
			<div class="paragraph-2">
				<p>
					The narrative that individuals are responsibile for
					societies emissions aims to channel resources into
					unproductive individual efforts which lack the power to
					create real change. This narrative stands on two key
					misconceptions which have paved the way for companies to
					shift climate guilt onto individuals.
				</p>
				<p>
					The first misconception is that emissions are primarily
					caused by individuals consuming goods and services. To
					understand why, it helps to be familiar the three types of
					emissions in carbon accounting; scope 1, scope 2 and scope 3
					emissions. Scope 1 represents direct emissions output by
					company activities such as using diesel powered machinery.
					Scope 3 emissions are those which occur in the value chain
					of a companies activities, but are not directly caused by
					the company, including emissions from end users. Contrary to
					this misconception, climate reports have consistently shown
					that company's direct emissions eclipse emissions from end
					users, even for business with disproportionately large scope
					3 emissions. This means that, for an oil company, more
					emissions are produced extracting the oil and transporting
					it to your car than you do through driving it. This simple
					misunderstanding can reshape the way individuals view
					climate change and reinforces why transparent corporate
					emissions reporting is essential to building a clear picture
					of climate change in society.
				</p>
				<p>
					The second key misconception is that emissions reductions
					are always possible through lifestyle choices. Substitute
					goods with lower environmental impact are not always
					available or affordable to consumers. Moreover, the actions
					with the potential to make the largest impact often involve
					abstaining from certain purchases and activities altogether
					to reduce emissions, which can restrict access to
					opportunities, essential goods, and services. The three
					actions with the largest potential to decrease individual
					emissions are abstention living car free, taking fewer
					long-haul flights and having fewer children. While these may
					be viable options to some, it can be difficult to make such
					sacrifices in the face of financial pressures. Were such
					changes to be adopted by individuals at scale, it would be
					disastrous for economic productivity and wellbeing. These
					barriers facing consumers trying to reduce consumption or
					choose green alternatives decreases the likelihood of this
					solution being adopted at scale. Clearing up these
					misconceptions provides clarity and will help us to view
					climate change in terms of its true causes.
				</p>
			</div>
		</div>
	</section>
</div>

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
		height: clamp(250px, 50vw, 700px);
		overflow: hidden;
	}

	.title {
		position: absolute;
		display: flex;
		flex-direction: column;
		font-family: "Work Sans", sans-serif;
		font-weight: 600;
		text-align: left;
		font-size: clamp(3rem, 13vw, 7rem);
		line-height: clamp(3.5rem, 8.5vw, 7rem);
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

	.tweet-card {
		font-family: "DM Sans";
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: start;
		background: var(--color-background-dark);
		border-radius: 16px;
		padding: 1.5rem;
		margin-bottom: 20px;
		width: clamp(320px, 41vw, 500px);
		min-height: clamp(58px, 8vw, 160px);
		justify-content: space-between;
	}

	.fadein-scroll {
		transition:
			opacity 1.5s ease,
			transform 1.5s ease;
		opacity: 0;
		transform: translateX(-20px);
	}

	.creator-container {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}

	.tweet.creator {
		display: flex;
		flex-direction: row;
		line-height: 1.125rem;
		font-size: 1rem;
		height: 100%;
		justify-content: center;
		gap: 0.5rem;
		font-weight: 600;
	}

	.handle {
		color: grey;
		font-weight: 300;
	}

	.hashtag {
		text-decoration: underline;
	}

	.tweet.content {
		text-align: left;
		display: flex;
		color: #000;
		padding-top: 0.5rem;
		font-size: 1rem;
		line-height: 1.875rem;
		height: 66.67%;
		align-items: center;
		width: 97.5%;
		padding: 0.75rem 0rem;
	}

	.tweet.info {
		display: flex;
		font-size: 1rem;
		line-height: 1.125;
		color: #000;
		align-items: bottom;
	}

	.tweet.info a {
		text-decoration: underline;
		padding-left: 0.3rem;
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

	#s-origins h2 {
		border-bottom: 1px solid var(--color-border);
		padding: 1rem 0rem;
	}

	.campaign-image {
		height: auto; /* Maintains the aspect ratio */
		border-radius: var(--box-corner-radius);
		width: clamp(260px, 61.9047vw, 520px);
	}

	.lead {
		padding-bottom: 1rem;
		overflow: hidden;
	}

	.paragraph-1 {
		position: relative;
		padding: 2rem 0rem;
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
		font-size: 1.5rem;
	}

	.caption.subcaption {
		font-size: 1.25rem;
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
