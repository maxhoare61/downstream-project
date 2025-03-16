<script lang="ts">
	import { base } from "$app/paths";
	import type { AnimationDirection, TextDocumentData } from "lottie-web";
	import { onMount } from "svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import AnimatedHeader1 from "$lib/components/AnimatedHeader1.svelte";

	onMount(() => {
		document.addEventListener("scroll", function () {
			const scrollAmount = window.scrollY;
			const windowHeight = window.innerHeight;
			const heroHeight =
				document.getElementById("hero")?.offsetHeight ?? 0;
			const blackRectangle = document.querySelector(
				".black-rectangle",
			) as HTMLElement;
			// Calculate the new bottom position based on the scroll amount
			let newBottomPosition =
				windowHeight - 100 - (scrollAmount / windowHeight) * 1000; // Maps scroll to percentage movement
			// Limit the rectangle's movement to not go below its initial position
			if (newBottomPosition < 0) {
				newBottomPosition = 0;
			}

			//blackRectangle.style.top = newBottomPosition + "px";
		});
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
		<div class="title t2">
			The <br /> Carbon <br /> Footprint <br /> Story
		</div>
		<div class="ah1">
			<AnimatedHeader1 />
		</div>
	</div>
	<div class="content-container">
		<div class="paragraph-1">
			<p class="lead">
				The popularization of the term “carbon footprint” can be largely
				traced to campaigns from oil supermajors in the early 2000s.
				Yet, the term has sustained itself as a centrepiece of modern
				discussions on climate change. Why do we still frame climate
				change in terms of individual emissions, when a simple google
				search can reveal the staggering size of the corporate
				contribution? In this article, we will explore the fossil-fuel
				industry’s tactful shift away from climate denial and toward
				‘deflection’ as a technique to fight climate action. Using
				evidence, will show how this fuelled an aggressive campaign to
				obscure the true causes global warming from the public eye.
			</p>
		</div>
	</div>
</section>
<div class="content-container">
	<section id="s-origins">
		<div class="makeover-paragraph">
			<h2>Origins</h2>
			<div class="paragraph-2">
				<p>
					In 2004, BP’s marketing underwent a remarkable
					transformation. The oil titan re-styled its logo to a
					green-and-yellow sunburst and adopted the tagline “Beyond
					Petroleum”. As part of this campaign the company also
					introduced a “carbon footprint calculator” on its website.
					The concept was simple: people could go online, enter
					details about their daily activities (driving, electricity
					use, flights, etc.), and calculate their personal
					contribution to global carbon emissions. BP launched print
					advertisements in major newspapers which prompted readers to
					“Find out the size of your household’s carbon footprint,
					learn how you can reduce it, and see how we’re reducing ours
					at bp.com”.
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
					“deflection”, the idea that the public should focus on their
					own actions rather than corporate behaviour, went on to fuel
					a campaign of deception that would span decades.
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
					personal choices: “That’s right – you and me are to blame”.
					As journalist Amy Westervelt points out, the genius of this
					tactic contributed to a growing culture of whataboutism:
					“Well, if you really care about climate change, why are you
					still driving a car, or working or using technology or
					travelling…”.
				</p>
				<p>
					This framing not only places the burden of responsibility on
					consumers, but alleviates BP, positioning the company as a
					helpful partner by providing tools and encouragement,
					despite BP’s core business still being overwhelmingly in oil
					and gas. In reality, BP never truly moved “beyond petroleum”
					– in 2005, for example, BP produced about 4.0 million
					barrels of oil per day, and fifteen years later it was still
					about 3.8 million barrels; as of 2018, BP devoted only 2.3%
					of its budget to renewable energy, with the rest sustaining
					its fossil fuel operations. Such figures lay bare the
					greenwashing at play: the personal carbon footprint
					initiative was less about BP reducing its own emissions and
					more about influencing public narratives around who is
					responsible for climate change.
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
					to a 2017 Carbon Majors report, just 100 fossil fuel
					producers (investor-owned and state-owned companies) have
					been responsible for roughly 71% of global greenhouse gas
					emissions since 1988. In fact, a relatively small group of
					25 corporate and state entities account for over 50% of
					industrial carbon emissions worldwide in that period. These
					include companies like BP, Shell, ExxonMobil, Chevron, and
					coal producers, alongside state oil enterprises. BP itself
					is a notable contributor: analyses show that BP’s operations
					and products were the source of about 1.5% of total global
					industrial emissions from 1998–2015 – a remarkable fraction
					for a single company, given that there are thousands of
					companies in the world’s energy sector. For perspective,
					this percentage is greater the annual carbon output of
					Oceania as a percentage of global annual emissions which was
					1.1% of emissions in 2023.
				</p>
				<p>
					Meanwhile, the average individual’s emissions, even in
					high-income countries, are tiny by comparison to these
					corporate footprints. In America – which has one of the
					highest per-capita carbon footprints – the average person’s
					activities produce about 15 tons of CO₂ per year.
					Multiplying that by, 330 million Americans yields about 4.95
					billion tons – which is significant. However, compare that
					to 7.4 billion tonnes of Co-2 produced by just 5 entities
					(Saudi Aramco, Coal India, CHN Energy, National Iranian Oil
					Co., and Jinneng Group) in 2023. In other words, a small
					fraction of people (often those investing in or leading
					industries) have carbon footprints millions of times larger
					than the average person, town or city population. This
					underscores that climate change is not simply the result of
					billions of people each negligently leaving lights on;
					rather, it’s largely driven by industrial activity and
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
			<h2>Bonus: Lessons from Covid?</h2>
			<div class="paragraph-2">
				<p>
					It is telling that even when individual behaviour changed
					dramatically during the COVID-19 pandemic (with people
					driving and flying far less), the drop in global CO₂
					emissions was on the order of 6–8% for 2020, and atmospheric
					greenhouse gas concentrations continued to climb. This
					temporary reduction – achieved by an unprecedented
					curtailment of personal travel and consumption – was still
					modest relative to the cuts needed to stabilize the climate.
					It illustrates that even if millions of individuals reduce
					their personal footprints, it barely dents the problem
					unless the major industrial sources of emissions (power
					plants, factories, deforestation, oil wells, etc.) are
					addressed. Individual actions like recycling, bicycling to
					work, or eating less meat can help to a degree and are worth
					encouraging, but data-driven analyses consistently find that
					the largest climate impacts come from systemic changes:
					transitioning power grids to renewable energy, halting
					fossil fuel extraction, improving industrial efficiency, and
					enforcing emissions limits on big polluters. In short, the
					carbon math reveals a great irony in BP’s personal footprint
					campaign – the company was spotlighting the minuscule piece
					of the emissions pie that individuals can directly control,
					while obscuring its own and its industry’s enormous slice of
					responsibility.
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
						Google searches including the term carbon footprint shot
						up in the early 2000s (source: Google Trends)
					</figcaption>
				</figure>
				<p>
					However, there are signs that society’s view of an
					individual-based approach to fighting climate change is
					increasingly dim. Social scientists and climate
					communicators have increasingly critiqued the over-emphasis
					on individual action as a form of “discursive manipulation”
					that can delay collective solutions. Terms like “carbon
					footprint sham” have been used by journalists to describe
					how the public was sold a narrative of personal guilt while
					big emitters continued business-as-usual. Environmental
					organizations now often stress balancing personal steps with
					systemic change – essentially re-educating the public that
					one cannot simply shop or recycle their way out of the
					climate crisis if policy and corporate practices remain
					unchanged. Importantly, public opinion is evolving: surveys
					indicate that people are increasingly aware of corporate
					culpability for climate change. A national survey in the
					United States (Yale, 2019) found that 57% of Americans
					believe fossil fuel companies have either “a great deal” or
					“a moderate amount” of responsibility for the damages caused
					by global warming. A similar majority supported requiring
					those companies to pay for a portion of climate damage
					costs. This suggests a shift in perception – despite years
					of “carbon footprint” messaging, more than half the public
					now explicitly holds the industry accountable in substantial
					measure. In essence, while BP’s campaign succeeded in
					injecting personal carbon footprints into the climate
					zeitgeist, it has not completely forestalled a growing
					public recognition that the climate crisis is, at its core,
					a systemic problem requiring systemic solutions.
				</p>
			</div>
		</div>
	</section>
</div>
<section id="perspective">
<figure class="sticky-text">
	<img
		src="{base}/smoke-stack-extended.jpg"
		alt="Painting of a man's sillouette in smoke billowing from a smoke stack"
		class="smokestack-image"
	/>
	<div class="perspective above">
		Putting Emissions <br /> Back in Perspective
	</div>
</figure>
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
		</div>
		<div class="content-box-2">
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
					<p>
						To help explore this idea, Downstream project are
						building a 'reverse carbon calculator', a calculator
						aimed at showing our own emissions on the scale of large
						emitters, to help crystallise the large role of these
						actors in climate change.
					</p>
				</div>
			</div>
			<div class="pictures-2 chart">
				<figure>
					<div
						bind:this={container}
						id="lottie-animation"
						style="width: 100%; height: 500px;"
					></div>
					<div class="caption-1">
						Click on the chart to see your <br /> emissions in
						perspective. Click again to <br /> show your individual emissions
						breakdown.
					</div>
				</figure>
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
	}

	.title {
		position: absolute;
		font-family: "Work Sans", sans-serif;
		font-weight: 600;
		text-align: left;
		font-size: clamp(4rem, 15vw, 11rem);
		line-height: clamp(3.5rem, 12vw, 9.5rem);
		padding: clamp(10px, 5vw, 64px);
		z-index: 2;
		color: black;
		white-space: nowrap;
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
	}

	#s-origins {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	figure {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin: 4rem 0rem;
	}

	.smokestack-image {
		min-width: 1470px;
	}

	.perspective.above {
		position: absolute;
		text-align: left;
		line-height: 120px;
		color: white;
		overflow: hidden;
		white-space: nowrap;
		bottom: 0;
		left: 0;
	}

	#s-origins h2 {
		border-bottom: 1px solid var(--color-border);
		width: 735px;
		padding: 2rem 0rem;
	}

	.content-box-2 {
		display: grid;
		grid-template-columns: repeat(2, 50%);
		gap: 2rem;
	}

	.pictures-2 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		gap: 4rem; /* Space between images */
		padding: 4rem 0rem;
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
		border-top: 1px solid var(--color-border);
		padding: 4rem 0rem;
		margin-top: 2rem;
		width: clamp(320px, 50%, 548px);
	}

	.paragraph-2 {
		padding: 4rem 0rem;
	}

	.paragraph-2.light {
		color: white;
	}

	.paragraph-2 p {
		margin-bottom: 2rem;
	}

	#perspective {
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
		width: clamp(320px, 50%, 548px);
	}

	.reverse-paragraph {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: auto;
		width: 100%;
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
