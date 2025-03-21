<script lang="ts">
	import { base } from "$app/paths";
	import type { AnimationDirection, TextDocumentData } from "lottie-web";
	import { onMount } from "svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import AnimatedHeader1 from "$lib/components/AnimatedHeader1.svelte";

	let isTitleVisible = false;
	let isVisibleBp = false;
	let isVisibleAh = false;

	onMount(() => {
		const titleElement = document.querySelector(".title");

		if (titleElement) {
			const elementTop = titleElement.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;

			console.log(elementTop, windowHeight * 0.75);
			// Adjust the threshold as needed
			if (elementTop < windowHeight * 0.75) {
				isTitleVisible = true;
			}
		}

		const handleScroll = () => {
			// List of elements you want to handle
			const elements = document.querySelectorAll(".tweet-card");

			// Keeps track of elements that have been handled
			const handledElements = new Set();

			elements.forEach((element, index) => {
				if (handledElements.has(element)) return;

				const elementTop = element.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;

				// Adjust the threshold as needed
				if (elementTop < windowHeight * 0.75) {
					setTimeout(() => {
						element.classList.add("visible"); // Assuming 'visible' class controls the visibility or animation
					}, 250 * index); // Staggered timeouts

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
	let animationCompleted = false;
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
		}
	});
</script>

<section id="hero">
	<div class="animated-header">
		<div class="title {isTitleVisible ? 'visible' : ''}">
			The <br /> Carbon <br /> Footprint <br /> Story
		</div>
		<div class="ah1">
			<AnimatedHeader1 />
		</div>
	</div>
	<div class="content-container">
		<div class="twitter-tweet">
			<div class="tweet-card bp {isVisibleBp ? 'visible' : ''}">
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
			<div class="tweet-card ah {isVisibleAh ? 'visible' : ''}">
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
			<div class="tweet-card jc {isVisibleBp ? 'visible' : ''}">
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
						greenh-
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
			<div class="tweet-card shell {isVisibleBp ? 'visible' : ''}">
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
			<div class="tweet-card xlr {isVisibleBp ? 'visible' : ''}">
				<div class="creator-container">
					<div class="tweet creator">
						xlr8harder <span class="handle">@xlr8harder</span>
					</div>
				</div>
				<div class="tweet content">
					<div>
						deepseek doesn't want you to know that they only
						achieved their cheap training run by increasing the
						models water wastage by over 10x every query so deepseek
						wastes as much water as 37 5-minute showers
					</div>
				</div>
				<div class="tweet info">
					Comment / 2k Likes /
					<a
						class="tweet source"
						href="https://x.com/xlr8harder/status/1884544426170626112"
						target="_blank"
					>
						Source</a
					>
				</div>
			</div>
		</div>
		<div class="paragraph-1">
			<p class="lead">
				Over the last two decades, the idea of individuals “carbon
				footprint” has become a centrepiece of debates about climate
				change. Why do we often frame this enormously complex problem,
				whose causes are entrenched in all areas of society, in terms of
				the simple decisions we make each day?
			</p>
		</div>
	</div>
</section>
<div class="content-container">
	<section id="s-origins">
		<div class="makeover-paragraph">
			<h2>Tracing Roots</h2>
			<div class="paragraph-2">
				<p>
					In 2004, BP’s marketing underwent a remarkable
					transformation. The oil behemoth ditched it’s dated red
					shield logo in favour of a new green-and-yellow flower and
					adopted tagline “Beyond Petroleum”. As part of this campaign
					the company also introduced a “carbon footprint calculator”
					on its website. The concept was simple: people could go
					online, enter details about their daily activities (driving,
					electricity use, flights, etc.), and calculate their
					personal annual carbon emissions. BP launched print
					advertisements in major newspapers which prompted readers to <span
						class="italic"
						>“Find out the size of your household’s carbon
						footprint, learn how you can reduce it, and see how
						we’re reducing ours at bp.com”.</span
					>
				</p>
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
				<p>
					Framing climate change in these personal terms was a
					deliberate strategy. As a company then marketing itself as
					“Beyond Petroleum,” BP sought to position itself as part of
					the climate solution while subtly shifting the locus of
					responsibility to individual consumers. Environmental
					historians and climate scholars note that although academics
					had introduced broader “ecological footprint” metrics in the
					1990s, the carbon footprint as a household concept entered
					the popular lexicon largely due to this industry-driven PR
					effort. Climate scientist Michael E. Mann observes that this
					move was part of a broader shift in tactics by fossil fuel
					interests. The shift from outright climate science denial to
					a technique called “deflection”, the idea that the public
					should focus on their own actions rather than corporate
					behaviour.
				</p>
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
	<section id="s-makeover">
		<div class="makeover-paragraph">
			<h2>BPs Millenial Makeover</h2>
			<div class="paragraph-2">
				<p>
					By the early 2000s, scientific consensus on climate change
					was solidifying, and public awareness of the issue was
					growing. BP, one of the world’s largest oil companies,
					increasingly faced what seemed to be an existential threat.
					In response, it undertook a major rebranding to portray
					itself as environmentally conscious. The carbon footprint
					campaign was a centrepiece of this rebranding. By
					encouraging individuals to measure their own emissions, BP’s
					messaging implied that climate change is the result of
					personal choices: “That’s right, I'm doing my part - <span
						class="italic"
					>
						what about you?”</span
					>.
				</p>
				<p>
					This framing not only places the burden of responsibility on
					consumers but alleviates corporate polluters. Instead of
					being seen as one of the worst perpetrators of environmental
					havoc, they were trying to make a difference… by asking
					everyday people to do the work for them. This positioned the
					company as ‘doing their part’ by providing tools and
					encouragement, despite their core business still being
					overwhelmingly in high emissions activities.
				</p>
				<p>
					In reality, BP never truly moved “beyond petroleum” – in
					2005, for example, BP produced about 4.0 million barrels of
					oil per day. Fifteen years after the ‘Beyond Petroleum’
					campaign, it was still about 3.8 million barrels. As of
					2018, BP devoted only 2.3% of its budget to renewable
					energy, with the rest sustaining its fossil fuel operations.
					Such figures lay bare the greenwashing at play: the personal
					carbon footprint initiative was less about BP reducing its
					own emissions and more about influencing public narratives
					around who is responsible for climate change.
				</p>
			</div>
		</div>
	</section>
	<section id="s-makeover">
		<div class="makeover-paragraph">
			<h2>What Does the Data Say? Personal vs Corporate Emissions</h2>
			<div class="paragraph-2">
				<p>
					If everyone is responsible for their carbon footprint, how
					big are those footprints really? How do they compare to the
					carbon pollution emitted by large fossil fuel companies? The
					data overwhelmingly show that corporate and industrial
					emissions dwarf even large numbers of households. According
					to a report by Carbon Majors, just 25 corporate and state
					entities account for over 50% of industrial carbon emissions
					worldwide in the period since 1988. These companies include
					the likes of BP, Shell, ExxonMobil, Chevron, alongside state
					oil enterprises. BP itself is a notable contributor:
					analyses show that BP’s operations and products were the
					source of about 1.5% of total global industrial emissions
					from 1998–2015 – a remarkable fraction for a single company,
					given that there are thousands of companies in the world’s
					energy sector. For perspective, this percentage is greater
					than the percentage of global annual emissions produced in
					Oceania.
				</p>
				<p>
					The emissions produced by the average individual pale in
					comparison to those created by large corporations and state
					entities. The average individual’s emissions, even in
					high-income countries, are a fraction of a fraction of
					corporate carbon footprints. In Australia – which has one of
					the highest per-capita carbon footprints – the average
					person’s activities produce about 15.4 tons of CO₂ per year.
					Multiplying that by almost 27 million Australians yields
					about 415.8 million tons – which is significant. However,
					that is a meagre 5.6% of the 7.4 billion tonnes of Co2
					produced by just 5 entities (Saudi Aramco, Coal India, CHN
					Energy, National Iranian Oil Co., and Jinneng Group) in
					2023. In other words, if everyone in Australia used no
					electricity, gas or petrol, it would take 17 years to
					recuperate the emissions produced by those 5 companies in a
					single year. This underscores that climate change is not
					simply the result of billions of people negligently leaving
					lights on; rather, it’s driven by industrial activity and
					energy production choices. As experts have pointed out, the
					real leavers with the power to make change -systemic factors
					like how electricity is generated, how goods are produced,
					and what policies govern energy use determine the bulk of
					emissions – are influenced by corporate and governmental
					control far more than any average person.
				</p>
			</div>
		</div>
	</section>
	<section id="s-makeover">
		<div class="makeover-paragraph">
			<h2>Bonus: Lessons from Covid-19</h2>
			<div class="paragraph-2">
				<p>
					It is telling that even when individual behaviour changed
					dramatically during the COVID-19 pandemic the drop in global
					CO₂ emissions was on the order of 6–8% for 2020. This
					temporary reduction – achieved by an unprecedented
					curtailment of personal travel and consumption – was still
					modest relative to the cuts needed to stabilize the climate.
					The chart below shows the quarterly national emissions data
					for Australia, with the shaded area approximately covering
					the time affected by the pandemic. While there is a
					definitive slump in emissions evident during the pandemic,
					it is hardly on the order implied by the mantra that our
					“individual efforts make all the difference”. Moreover, the
					decrease in emissions during the pandemic represented part
					of a broader downward trend due to the decarbonisation of
					the grid, evident in the gradual shrinking of the blue
					‘electricity’ layer over time. All in all, the emissions
					impact of this society wide change in behaviour was nominal.
				</p>
			</div>
		</div>
		<figure class="annual-emissions-chart">
			<div class="annual-emissions-chart bg">
				<img
					src="{base}/annual-emissions-chart.jpg"
					alt="Annual Emissions in Australia"
					class="emissions-chart-img"
				/>
			</div>
			<figcaption>
				Australia's annual emissions has decreased over time without
				real change in public behaviour (Source: National Greenhouse Gas
				Inventory: Quarterly updates)
			</figcaption>
		</figure>
		<div class="makeover-paragraph">
			<div class="paragraph-2">
				<p>
					This illustrates that the underlying causes of emissions
					cannot be changed by the personal decisions we make on a
					day-to-day basis. Even when millions of individuals can no
					longer partake in many of emitting activities that companies
					like BP encourage us to abstain from, there will always be a
					lower threshold beyond which you simply cannot reduce your
					emissions. This is because many emissions are the product of
					systems outside of our control. For instance, say you stop
					driving to work or taking flights. Now you will be using a
					larger amount of power at home to support basic necessities
					such as cooking and lighting, and the emissions intensity of
					this power is determined by the generation mix in the grid.
					To make this clear, between 2000 and 2023, the amount of CO₂
					produced per unit of energy generated in Australia has
					decreased by 47%. This enormous improvement, which affects
					the carbon footprint of all Australians, had nothing to do
					with individual decision-making. Rather, it was brought
					about through placing pressure on those in power, targeted
					policy, changing cultural attitudes and coordinated efforts
					to add renewable generation to the grid. While individual
					actions like recycling, or bicycling to work are worth
					encouraging, data-driven analyses consistently find that the
					largest climate impacts come from systemic changes:
					transitioning power grids to renewable energy, halting
					fossil fuel extraction, improving industrial efficiency, and
					enforcing emissions limits on big polluters.
				</p>
			</div>
		</div>
	</section>
	<section id="s-makeover">
		<div class="makeover-paragraph">
			<h2>Influence on Public Perception and Discourse</h2>
			<div class="paragraph-2">
				<p>
					BP’s carbon footprint campaign and similar industry efforts
					have had a discernible impact on public perceptions of
					climate responsibility. The very fact that “carbon
					footprint” entered everyday vocabulary in the 2000s is
					testament to the campaign’s reach. Before BP’s push, the
					term was virtually non-existent in public discourse;
					afterwards, it became a centrepiece of climate
					conversations, educational programs, and even government
					advisories. Google search trends for “carbon footprint”
					spike after 2004, reflecting how quickly the concept caught
					on. Many people began meticulously tracking their personal
					carbon impacts – from switching light bulbs to calculating
					flight emissions – convinced that individual action was the
					paramount solution to climate change. Climate educators have
					noted how this focus can crowd out discussion of systemic
					action. Naomi Oreskes, the Harvard science historian, offers
					a telling anecdote: when giving public talks on climate
					change, she is almost invariably asked “What can I do,
					personally, to fix this problem?” far more often than she is
					asked about holding companies or governments accountable.
					This reflects a success of the fossil-fuel PR narrative: the
					public internalized the idea that personal lifestyle changes
					are the key to addressing climate change, while discussion
					of corporate responsibility or political action was
					comparatively muted. Indeed, Oreskes attributes that common
					sentiment in part to the marketing campaigns by BP, Exxon
					and others that relentlessly promoted personal carbon
					footprints.
				</p>
				<figure>
					<img
						src="{base}/carbon-fp-trend.png"
						alt="Google searches including the term carbon footprint shot up in the early 2000s"
						class="campaign-image trend"
					/>
					<figcaption>
						The number of Google searches including the term carbon
						footprint shot up in the early 2000s (source: Google
						Trends)
					</figcaption>
				</figure>
				<p>
					However, there are signs that society’s view of an
					individual-based approach to fighting climate change is
					increasingly dim. Social scientists and climate
					communicators have increasingly critiqued the over-emphasis
					on individual action as a form of “discursive manipulation”
					that can delay collective solutions. On social media, posts
					such as the one featured at the start of the article reflect
					the cultural shift. When a global company’s tweet
					encouraging climate action gets ratio’d by a no name account
					by a factor of 136, it is a sign that people no longer see
					empty climate platitudes from corporations through the same
					naive rose-tinted lens that they once did.
				</p>
				<p>
					Environmental organizations now often stress balancing
					personal steps with systemic change – essentially
					re-educating the public that one cannot simply shop or
					recycle their way out of the climate crisis if policy and
					corporate practices remain unchanged. Importantly, public
					opinion is evolving: surveys indicate that people are
					increasingly aware of corporate culpability for climate
					change. A national survey in the United States (Yale, 2019)
					found that 57% of Americans believe fossil fuel companies
					have either “a great deal” or “a moderate amount” of
					responsibility for the damages caused by global warming. A
					similar majority supported requiring those companies to pay
					for a portion of climate damage costs. This suggests a shift
					in perception – despite years of “carbon footprint”
					messaging, more than half the public now explicitly holds
					the industry accountable in substantial measure. In essence,
					while BP’s campaign succeeded in injecting personal carbon
					footprints into the climate zeitgeist, it has not completely
					forestalled a growing public recognition that the climate
					crisis is, at its core, a systemic problem requiring
					systemic solutions.
				</p>
			</div>
		</div>
	</section>
</div>
<section id="perspective">
	<div class="sticky-text">
		<img
			src="{base}/smoke-stack-extended.jpg"
			alt="Painting of a man's sillouette in smoke billowing from a smoke stack"
			class="smokestack-image"
		/>
		<div class="perspective">
			Putting Emissions <br /> Back in Perspective
		</div>
	</div>
	<div class="content-container">
		<div class="makeover-paragraph">
			<div class="paragraph-2 light">
				<p>
					Climate scientists like Michael Mann argue that while
					individual actions are helpful, we must not allow the
					narrative of personal responsibility to become a distraction
					or moral smoke-screen that delays larger interventions.
					Mann’s work The New Climate War calls out tactics like BP’s
					for what they are – “soft denial” or deflection – and
					emphasizes collective action: voting for climate-conscious
					leadership, enacting carbon pricing or emissions caps on
					industry, and supporting systemic changes in energy,
					transportation, and agriculture. In the same vein,
					environmental sociologists point out that individuals
					operate within infrastructures and choices shaped by
					companies and governments. For instance, if a person in a
					suburban area has a high carbon footprint from driving, it
					may be because public transit is inadequate – a decision
					made by policy and investment, not personal moral failure.
					Professor Julia Steinberger, an ecological economist, notes
					that assigning emissions to end consumers doesn’t mean those
					consumers actually had the power to avoid them: “Who is
					actually taking the damaging decision?” she asks – and in
					the case of fossil fuels, the decisions (to extract oil, to
					build fossil-powered infrastructure, to resist regulation)
					are taken by companies like BP, not average citizens.
					Reframing climate action in light of this insight means
					placing far greater emphasis on holding corporate actors
					accountable and changing systemic frameworks. This could
					involve measures like carbon taxes on producers, legal
					liabilities for climate damages (a path being pursued
					through various lawsuits), mandates for clean energy
					adoption, and transparency tools that publicly track
					companies’ emissions and climate plans.
				</p>
			</div>
			<div class="reverse-paragraph">
				<h2>The Reverse Carbon Calculator</h2>
				<div class="paragraph-2 light">
					<p>
						We should aim for a more balanced climate discourse that
						encourages individual “carbon footprint” reductions
						(such as saving energy, diet shifts, and conscious
						consumption) firmly contextualized in a broader push
						that must also include major corporate and governmental
						emissions cuts. Rather than feeling personal guilt as
						the primary response to climate change, individuals
						should channel that concern into collective action and
						demand accountability from the true heavy emitters.
					</p>
					<p>
						To conclude, while each of us should take steps to live
						more sustainably, the evidence is clear that systemic
						change – driven by sound policy, corporate
						responsibility, and societal pressure – is indispensable
						for addressing a challenge as vast as climate change.
						Recognizing the storytelling strategies that got us here
						is the first step toward crafting a new, more effective
						narrative for our planet’s future.
					</p>
					<figure>
						<div bind:this={container} id="lottie-animation"></div>
						<figcaption class="caption-1">
							Click on the chart to see your <br /> emissions in
							perspective. Click again to <br /> show your individual
							emissions breakdown.
						</figcaption>
					</figure>
					<p>
						To help explore this idea, Downstream project are
						building a 'reverse carbon calculator', a calculator
						aimed at showing our own emissions on the scale of large
						emitters, to help crystallise the large role of these
						actors in climate change.
					</p>
				</div>
			</div>
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
		height: clamp(300px, 50vw, 700px);
		overflow: hidden;
	}

	.title {
		position: absolute;
		display: flex;
		flex-direction: column;
		font-family: "Work Sans", sans-serif;
		font-weight: 600;
		text-align: left;
		font-size: clamp(4rem, 15vw, 10rem);
		line-height: clamp(3.5rem, 12vw, 8rem);
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
		background: #ded9d4;
		border-radius: 16px;
		padding: 1.5rem;
		margin-bottom: 20px;
		width: clamp(320px, 41vw, 600px);
		min-height: clamp(58px, 8vw, 160px);
		justify-content: space-between;
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
		font-size: 1.2rem;
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
		background-color: var(--color-background);
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

	.annual-emissions-chart {
		display: flex;
		flex-direction: column;
		padding: clamp(1rem, 2.5vw, 2.5rem) 1.5rem;
		height: clamp(300px, 50vw, 550px);
	}

	.annual-emissions-chart.bg {
		background-color: white;
		border-radius: 2em;
		padding: 2.5rem 1.5rem;
	}

	.emissions-chart-img {
		height: 100%;
		width: auto;
	}

	.italic {
		font-family: "times new roman";
		font-style: oblique;
		font-size: 1.05rem;
		line-height: 1.0625rem;
	}

	.smokestack-image {
		top: 0;
		width: 100%;
	}

	#s-origins h2 {
		border-bottom: 1px solid var(--color-border);
		padding: 2rem 0rem;
	}

	.campaign-image {
		height: auto; /* Maintains the aspect ratio */
		width: clamp(260px, 61.9047vw, 520px);
	}

	.campaign-image.calc {
		stroke: white;
		stroke-width: 3px;
	}

	.campaign-image.trend {
		border-radius: 2rem;
		padding: 1rem;
		background-color: white;
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

	.paragraph-2.light {
		color: white;
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

	#perspective h2 {
		color: white;
		padding-bottom: 2rem;
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

	.reverse-paragraph {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: auto;
		width: 100%;
	}

	.perspective {
		position: absolute;
		text-align: left;
		font-family: "Work Sans", sans-serif;
		font-style: "SemiBold";
		letter-spacing: auto;
		font-weight: 600;
		color: white;
		overflow: hidden;
		white-space: nowrap;
		bottom: 0;
		left: 0;
		font-size: clamp(3.3rem, 8.5vw, 10rem);
		line-height: clamp(3rem, 8vw, 8rem);
		padding: clamp(10px, 5vw, 64px);
	}

	@media (max-width: 768px) {
		.perspective {
			white-space: wrap;
		}
	}

	.caption-1 {
		color: white;
		padding-top: 2rem;
	}
</style>
