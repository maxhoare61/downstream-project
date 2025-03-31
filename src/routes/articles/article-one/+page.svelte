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
	let scrollcontainer: Element | null = null;
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

		if (lottieAnimation && container && scrollcontainer) {
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

			const scrollanimation = lottieAnimation.loadAnimation({
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
			<p class="lead">
				The term ‘carbon footprint’ refers to emissions that are created
				as a result of our personal actions. Over the last two decades,
				this idea has played a central role in debates about climate
				change. Why do we often frame this enormously complex problem,
				whose causes are entrenched in all areas of society, in terms of
				the simple decisions we make each day? In this article, I will
				cover the main reasons behind the shift toward emphasising
				individual contributions when talking about greenhouse gas
				emissions, and propose a path forward for the role of individual
				actions in fighting climate change.
			</p>
		</div>
	</div>
</section>
<section id="s-origins">
	<div class="makeover-paragraph">
		<h2>Different Types of Emissions</h2>
		<div class="paragraph-2">
			<p>
				To understand society's focus on individual carbon footprints,
				it helps to know about the concepts of 'scope' emissions. These
				are three categories that have become the accepted method for
				categorising the different levels of responsibility an entity
				has for emissions they produce. This system has found use in
				assisting governments when labelling emissions for
				sustainability policies and for corporations pursuing
				decarbonization initiatives, and are defined as follows:
			</p>
			<p>
				<span class="bold">Scope 1</span> refers to direct emissions created
				by a company's assets being used for its purposes. For example, in
				a mining company, these would include emissions from running large
				trucks to transport rubble or from burning diesel to power heavy
				machinery for excavation.
			</p>
			<p>
				<span class="bold">Scope 2</span> emissions are those produced indirectly
				through the purchase of electricity. For instance, a large corporation
				creates Scope 2 emissions by using electricity in its head offices.
			</p>
			<p>
				<span class="bold">Scope 3</span> emissions are those that would
				not occur without the company's activities but are produced by assets
				or sources that the company does not directly own or control. For
				example, when you drive a Camry to work, the emissions you produce
				are Toyota’s scope 3 emissions. The emissions produced by steelmakers
				creating intermediate goods for use in a Camry are part of Toyota’s
				scope 3 emissions.
			</p>
			<p>
				To use an analogy, we can think of the emissions created in
				different stages of the lifecycle of a product as water flowing
				down a river.
			</p>
		</div>
	</div>
	<div class="scroll-animation-container outer-container">
		<div class="labels label-left">
			<div class="scope s1">
				<div class="highlight-font darken-2">Scope 1</div>
				<p class="tile-description">
					Emissions released into the atmosphere as a direct result of
					the activities at a company facility or using company
					equipment.
				</p>
			</div>
			<div class="scope s2">
				<div class="highlight-font darken-2">Scope 2</div>
				<p class="tile-description">
					Emissions released outside company facilities to produce the
					electricity that the company imported into the facility and
					used.
				</p>
			</div>
		</div>
		<div class="scroll-animation-container">
			<div
				bind:this={scrollcontainer}
				class="lottie-scroll-animation"
			></div>
			<div class="label-number n1 darken">1</div>
			<div class="label-number n2 darken">2</div>
			<div class="label-number n3 darken">3</div>
		</div>
		<div class="labels label-right">
			<div class="scope s3">
				<div class="highlight-font darken-2">Scope 3</div>
				<p class="tile-description">
					Scope 3 emissions are indirect emissions other than scope 2
					emissions. They occur outside of company premises, but are
					still as a result of your actions. A company may create
					these both downstream (e.g through consumers using a
					product) and upstream (e.g through manufacturing
					intermediate products) in the supply chain of a companies
					direct actions.
				</p>
			</div>
		</div>
	</div>
	<div class="makeover-paragraph">
		<div class="paragraph-2">
			<p>
				This difference is crucial to understand when we attempt to
				trace the true source of emissions. Now, we are ready to get
				into which key players and events caused the idea of the carbon
				footprint to go from virtually unknown to the centre of public
				discourse in a matter of years.
			</p>
		</div>
	</div>
</section>
<div class="content-container">
	<section id="s-origins">
		<div class="makeover-paragraph">
			<h2>1. Optics</h2>
			<div class="paragraph-2">
				<p>
					In 2004, BP’s marketing underwent a remarkable
					transformation. The oil behemoth ditched its dated BP-crest
					logo for a green flower, adopted the tagline “Beyond
					Petroleum”, and featured adverts in major newspapers which
					prompted readers to <span class="italic"
						>“Find out the size of your household’s carbon
						footprint, learn how you can reduce it, and see how
						we’re reducing ours at bp.com”.</span
					>
					At the heart of this overhaul was BP’s “carbon footprint calculator”.
					The concept was simple: people could go online, enter details
					about their daily activities into the calculator (driving, electricity
					use, flights, etc.), and it calculates their personal annual
					carbon emissions for them. But why was BP, an almost 100-year-old
					company, suddenly conducting a drastic rebrand?
				</p>
				<figure>
					<img
						src="{base}/BP-Logo-history.jpg"
						alt="The progression of BPs logo since the 1960s"
						class="campaign-image calc"
					/>
					<figcaption>
						The progression of BP's logo since the 1960s (1000
						Logos)
					</figcaption>
				</figure>
				<p>
					BP’s new look aimed to secure future public good-will for
					the company by capitalising on the current social climate of
					the western world. In the last two decades, BP had undergone
					rapid growth on the back of a series of acquisitions,
					including the fifth largest oil company in the US at the
					time. BP had also been struggling with public relations on
					multiple fronts. Public consensus on climate change was now
					growing, causing the company to draw increased criticism
					from potential customers. Additionally, successive scandals
					at its facilities resulting from poor safety standards made
					BP seem reckless and inhumane. As a company which was new
					presence in many markets, BP capitalised on the opportunity
					to reinvent itself with a new, green image. Oglivy & Mather,
					the marketing agency behind the rebrand, described the
					campaign as BP reinventing itself “as an energy company
					people can have faith in”. The public reception wasn’t
					perfect, inspiring scepticism in some groups due to BPs
					misdoings being a recent memory. Here is an excerpt from a
					2006 article from the NYT “Walking through an airport
					earlier this week, I happened to spot a BP advertisement.
					You know the kind I’m talking about: the letters BP in
					lower-case type — making them somehow warmer and fuzzier —
					above a yellow and green sun, and the words “beyond
					petroleum.” Like most BP ads, indeed, like virtually all BP
					marketing, it spoke to the company’s commitment to the
					environment”. Despite the cynicism evident in the authors
					tone, they capture the effect of BPs new marketing well. For
					those without the time or resources to know the company’s
					true character, BPs marketing would likely strike the
					intended chord - signalling that they were the oil company
					of the 21st century. The carbon footprint calculator, an
					emblem of holding the public responsible for private
					companies’ actions, was to be the flagship offering of this
					new identity.
				</p>
				<figure>
					<iframe
						width="100%"
						height="400"
						src="https://www.youtube.com/embed/ywrZPypqSB4"
						title="BP Ad: Carbon Footprint"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</figure>
				<p>
					From start to finish, BPs rebrand was a masterclass in
					obfuscation. Whilst they boldly paraded around their image
					as a friend of the environment, almost nothing about their
					operations had changed. They had realised that public
					opinion of their highly polluting activities, at least in
					the short term, was a game of optics. If they could convince
					the public that the biggest emitters cared about the
					environment, and had it handled, then what reason did they
					have to worry about it?
				</p>
				<p>
					The carbon footprint calculator, which BP began
					pushingthrough promotional material around this time, was
					thecentrepiece of the campaign. By encouraging individuals
					tomeasure their own emissions, BP’s messaging implied
					thatclimate change was the result of personal choices.
					Throughadverts and rebranding they silently pushed the
					message“That’s right, I’m doing my part. Are you?”. They
					were earlyto the party, too. BP's then chi'ef executive
					Lorde Browne wasthe first oil executive to announce that
					climate change wasa real issue (shocker), and that oil
					companies had toaddress in a speech at Stanford in 1999.
					While most otherpolluting companies were still firmly in the
					category ofclimate denial, which had worked so far, BP was a
					first moverof the greenwashing movement. Greenwashing is the
					act ofcreating the image of being an environmentally
					consciouscompany without intending to actually change your
					harmfulactions, "washing" them using PR tactics. Because of
					this, BP got toreap the rewards in the form of social
					currency. Peoplewanted to buy messaging about a company
					taking thethe action they wanted to see in the corporate
					world. Thecarbon footprint calculator itself was especially
					hard todiscredit, being an actual tool for people trying
					todecrease their emissions. By allowing people to
					quantifytheir personal contributions to climate change, they
					werehelping people to set goals to make improvements and
					measurethe results.
				</p>
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
				<p>
					Climate scientists observed that this move was part of a
					broader shift in tactics by fossil fuel interests from
					outright climate science denial to a technique called
					“deflection”. Deflection is when an actor is seeking to
					challenge a narrative in public discourse, and instead of
					outright denying it, seems to agree, while serving up a
					slightly altered version of events to an unassuming
					audience. BP’s massive PR campaign not only places the
					burden of responsibility on consumers, but alleviates
					corporate polluters. Instead of being seen as one of the
					worst perpetrators of environmental havoc, now they were
					<span class="italic">“trying to make a difference”</span>.
					This positioned the company as doing their part by providing
					tools and encouragement, despite their core business still
					being overwhelmingly in high emissions activities.
				</p>
				<figure>
					<img
						src="{base}/bp-boardroom.jpg"
						alt="Chief scientist at BP presenting on the energy transition"
						class="campaign-image calc"
					/>
					<figcaption>
						BP's chief scientist presenting on the energy transition
						in 2005 (Source: Kaihsu Tai)
					</figcaption>
				</figure>
			</div>
		</div>
	</section>
	<section id="s-origins">
		<div class="makeover-paragraph">
			<h2>2. Consumer Behaviour</h2>
			<div class="paragraph-2">
				<p>
					While the carbon footprint concept has its origins in
					corporate deflection—exemplified by BP’s 2004 marketing
					campaign—its persistence in public discourse is not purely
					the result of manipulative corporate tactics. In fact, part
					of what made the idea so enduring was its resonance with a
					growing awareness that climate change demands not only
					structural reform, but also widespread participation. The
					appeal of individual carbon accounting lies in its offer of
					agency: an accessible entry point for ordinary people to
					engage with an otherwise overwhelming problem.
				</p>
				<figure>
					<img
						src="{base}/cfc-screenshot.jpg"
						alt="The progression of BPs logo since the 1960s"
						class="campaign-image calc"
					/>
					<figcaption>
						A carbon footprint calculator from the 2000s (Source:)
					</figcaption>
				</figure>
				<p>
					Although climate science is unequivocal that most emissions
					stem from large industrial actors, research has shown that
					individual and household-level behaviours can cumulatively
					influence system-wide outcomes through market signals and
					democratic pressure. Although hard to coordinate, a change
					in consumer preferences can effectively signal to businesses
					a desire for more eco-friendly products and services.
				</p>
				<p>
					The carbon footprint also helped to normalise environmental
					thinking in everyday life. By placing emissions at the level
					of personal consumption, it engaged a broad public in
					climate discourse in a way few policy frameworks could. Over
					the past two decades, pressure from environmentally
					conscious consumers has become a recognised force in
					corporate governance, particularly within ESG
					(Environmental, Social, and Governance) frameworks. A 2020
					review by Amel-Zadeh and Serafeim in Journal of Economic
					Perspectives found that reputational concerns and investor
					preferences—both shaped by public awareness—are now major
					factors that can influence firms' bottom line.
				</p>
				<p>
					The carbon footprint was never a sufficient frame for
					understanding climate change. But, in helping to cultivate a
					culture of environmental accountability, it opened up a
					space for discussions around consumer behaviour and
					corporate responsibility. While individuals may not be able
					to significantly reduce emissions through their actions,
					they can lead by example, and influence others to think more
					critically about what activities and organisations are most
					responsible for climate change.
				</p>
			</div>
		</div>
	</section>
	<section id="s-makeover">
		<div class="makeover-paragraph">
			<h2>What does the Data Say?</h2>
			<div class="paragraph-2">
				<p>
					If everyone is responsible for their carbon footprint, how
					big are those footprints really? How do they compare to the
					carbon pollution emitted by large fossil fuel companies? The
					data overwhelmingly show the emissions output of
					individuals, even in high-income countries, are a fraction
					of corporate carbon footprints. In Australia – which has one
					of the highest per-capita carbon footprints – the average
					person’s activities produce about 15.4 tons of CO₂ per year.
					Multiplying that by almost 27 million Australians yields
					415.8 million tons – which is significant. Bewilderingly,
					that is a only 5.6% of the 7.4 billion tonnes of CO₂
					produced by just 5 entities in 2023. This underscores that
					the increase in CO₂ concentrations in the atmosphere over
					the last 40 years is driven by industrial activity and
					energy production choices, not lifestyle choices. As experts
					have pointed out, the real levers with the power to make
					change – systemic factors like how electricity is generated,
					how goods are produced, and what policies govern energy use
					– are influenced by corporate and governmental control far
					more than any average person.
				</p>
				<p>
					It is telling that even when individual behaviour changed
					dramatically during the COVID-19 pandemic the drop in global
					CO₂ emissions was not significant – between 6-8% in 2020.
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
		<figure class="annual-emissions-chart fadein-scroll">
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
					This demonstrates that since a large portion our personal
					carbon footprint is made up of emissions from third parties,
					we are limited in how much we can can do to decrease our
					emissions through personal action. This is because more
					drastic change requires changes to systems such as the grid,
					or the creation of infrastructure such as bike lanes.
					Electric grids are known as natural monopolies because it is
					inefficient to have multiple firms competing to supply the
					same areas with power. Instead, a few, highly regulated
					firms are typically given the task of supply power toa
					specific area. This means the emissions intensity of your
					power is not something you get to choose, outside of some
					alterations you make to your house, it is by virtue of where
					you live. For instance, between 2000 and 2023, the amount of
					CO₂ produced per unit of energy produced in Australia has
					decreased by 47%. This enormous improvement, which affects
					the carbon footprint of all Australians, had nothing to do
					with individual decision-making. Rather, it was brought
					about through placing pressure on those in power, targeted
					policy, changing cultural attitudes and coordinated efforts
					to add renewable generation to the grid.
				</p>
				<p>
					Another similarly essential industry for life in the 21st
					century whose services are considered “emitting behaviours”
					by carbon footprint calculators is air travel. Air travel
					has such high barriers to entry that true competition is
					hard to come by, and it is a hard-to-abate sector. This
					means that, unlike some other industries, there are few
					commercially viable solutions to allow planes to fly without
					producing the amount of emissions they do currently. As a
					result, consumers have little choice but to contribute to
					emissions through participating in these systems, or lose
					out on access to this important service required for modern
					life, which is not realistic. It should be noted that the
					point here is not to show that we cannot make change or set
					a positive example for others by choosing to make
					sustainable decisions. It is the expectation that our
					personal decisions alone can make a tangible impact in
					fighting climate change that is deeply misguided.
				</p>
				<p>
					There are certain sets of emissions we do have control over.
					Typically, these are Scope 1 emissions—the direct emissions
					from sources you own or control. This includes things like
					the fuel you burn in your personal vehicle, and emissions
					from gas heaters in your home, or any other combustion that
					happens under your direct ownership. These are the easiest
					to influence directly, since they are directly produced
					through your actions. Therefore, transitioning to electric
					vehicles, improving home insulation, or switching from gas
					to electric cooking can significantly reduce this category.
					Albeit, these changes do require an initial investment, so
					they may not always be an option. Other changes such as
					using public transport, or riding a bike to work can be both
					affordable and effective at reducing your personal impact,
					and can give some degree of satisfaction that you are
					contributing to limiting human impact on the environment.
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
					rose-tinted lens that they once did.
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
					transportation, and agriculture. We should aim for a more
					balanced climate discourse that encourages individual
					“carbon footprint” reductions (such as saving energy, diet
					shifts, and conscious consumption) firmly contextualized in
					a broader push that must also include major corporate and
					governmental emissions cuts. Rather than feeling personal
					guilt as the primary response to climate change, individuals
					should channel that concern into collective action and
					demand accountability from the heavy emitters.
				</p>
				<figure>
					<div bind:this={container} id="lottie-animation"></div>
					<figcaption class="caption-1">
						Click on the chart to see your <br /> emissions in
						perspective. Click again to <br /> show your individual emissions
						breakdown.
					</figcaption>
				</figure>
				<p>
					To help explore this idea, Downstream project are building a
					'reverse carbon calculator', a calculator aimed at showing
					our own emissions on the scale of large emitters, to help
					crystallise the large role of these actors in climate
					change.
				</p>
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
		background: var(--color-background-dark);
		border-radius: 16px;
		padding: 1.5rem;
		margin-bottom: 20px;
		width: clamp(320px, 41vw, 600px);
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
		height: auto;
		width: 100%;
	}

	.italic {
		font-family: "times new roman";
		font-style: oblique;
		font-size: 1.05rem;
		line-height: 1.0625rem;
	}

	.bold {
		font-weight: 700;
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
		.scroll-animation-container.outer-container {
			flex-direction: column;
		}
		.labels {
			flex-direction: row;
		}
	}

	.caption-1 {
		color: white;
		padding-top: 2rem;
	}
</style>
