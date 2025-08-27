<script lang="ts">
	import { base } from "$app/paths";
	import type { AnimationDirection, TextDocumentData } from "lottie-web";
	import { onMount } from "svelte";
	import AnimatedHeader2 from "$lib/components/AnimatedHeader4.svelte";

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
		}
	});
</script>

<section id="hero">
	<div class="animated-header">
		<div class="title-container">
			<h1 class="title {isTitleVisible ? 'visible' : ''}">
				The Promise <br /> of Open Finance
			</h1>
		</div>
		<div class="ah1">
			<AnimatedHeader2 />
		</div>
	</div>
</section>
<section id="s-origins">
	<div class="makeover-paragraph">
		<div class="paragraph-2">
			<p>
				The four-pillar oligopoly in Australia’s banking sector has
				become increasingly concentrated. In August 2025, major banks
				accounted for a quarter of the ASX50’s total market value. With
				great market concentration comes great pricing power, and risk
				of a worse deal for everyday banking customers. Despite clear
				evidence that highly concentrated industries are harming
				Australian society, more direct remedies to introduce
				competition have failed to drive necessary change. As a nation
				with a mature digital finance ecosystem, however, Australia’s
				vast stores of financial data may present another path to
				fostering a more competitive banking landscape, through a set of
				policies known as Open Finance.
			</p>
			<figure class="bar-chart">
				<figcaption class="caption lead">
					As cash payments decline, digital finance ecosystems may be
					able to reintroduce compeititon into Australia's entrenched
					finance industry.
				</figcaption>
				<figcaption class="caption subcaption">
					The chart shows the proportion of cash payments collapsing
					between 2010 and 2020 across major economies. This shift has
					unlocked vast streams of transaction data, which, if opened
					up to new entrants through Open Finance, could challenge
					incumbents and deliver cheaper, more tailored services to
					consumers.
				</figcaption>
				<img
					src="{base}/DS-graph-51.png"
					alt="The decline of cash payments (volume) by
					country between 2010 and 2020"
					class="bar-chart-img"
				/>
				<figcaption>Source: Mckinsey & Company, 2020</figcaption>
			</figure>
			<h2>What is Open Finance?</h2>
			<p>
				Open Finance is a system of data sharing where individuals can
				compel institutions holding their personal data to share it with
				financial services firms through secure data portals (or APIs).
				The allure of Open Finance comes from its potential to lower the
				legal and technological barriers that have held back customers
				from accessing their information, prevented them from easily
				sharing it with third parties, and thus deterred them from
				switching to different financial institutions.
			</p>
			<p>
				Through a secure and centralised system of financial data,
				consumers may choose to share information with “FinTech” firms
				who could use it to provide novel, personalised financial
				services. For instance, businesses could offer customers
				insights into their financial standing, or help them to find a
				loan suited to their specific financial needs. Additionally, by
				making a variety of data points on an individual readily
				available, Open Finance makes it easier for loan providers to
				verify groups with atypical credit profiles who may struggle to
				pass standard credit checks. For instance, students or gig
				economy workers.
			</p>
			<figure class="bar-chart">
				<figcaption class="caption lead">
					Open Finance helps consumers reclaim ownership of their data
					and use it to their benefit.
				</figcaption>
				<figcaption class="caption subcaption">
					The flow chart shows the basic process underlying Open
					Finance. It begins with you and the companies that hold your
					data. Open finance policies give you the right to compel
					these companies to share your data with other organisations.
					This is done through secure APIs, or in other words, secure
					data portals. Data sharing in this form opens opportunities
					for people to manage their money in new ways, which reduces
					the inefficiency of a concentrated banking market through
					introducing competition.
				</figcaption>
				<img
					src="{base}/DS-graph-53.png"
					alt="Conceptual diagram of Open Finance"
					class="bar-chart-img long"
				/>
			</figure>
			<p>
				While public awareness of Open Finance remains modest, policy
				development has continued to accelerate around the world since
				2015. As of November 2024, 95 countries have taken concrete
				steps toward implementing Open Finance frameworks, ranging from
				early-stage consultations and pilot programs to fully
				operational regimes. Over the coming years, many of these
				initiatives will transition into live systems.
			</p>
			<h2>Policy Strategy</h2>
			<p>
				Governments’ Open Finance policy approaches can differ based on
				the specific objectives they have for the banking sector in
				their country. Key differences between countries policy include
				the scope of data types being shared, which organisations
				participate, if participation is mandatory, and the degree of
				government involvement in implementation. There are three main
				policy configurations that have been adopted so far.
			</p>
			<h5>
				Informal economies with high digital finance tool penetration
			</h5>
			<p>
				Countries such as Brazil, Nigeria, and India are using Open
				Finance to build on existing digital infrastructure and expand
				access to the formal financial system for previously unbanked
				populations. While digital payments and mobile finance are
				already widespread, traditional credit scoring often excludes
				self-employed individuals and those without formal income
				records. By enabling the use of alternative data, Open Finance
				makes it easier for these individuals to be verified and access
				credit. Greater participation in the formal financial sector not
				only supports economic activity by allowing more people to
				borrow and invest, but also improves data quality and broadens
				the tax base.
			</p>
			<h5>
				Developed economies with concentrated domestic finance
				industries
			</h5>
			<p>
				Consumer data rights and antitrust concerns characterise the
				policy goals for Open Finance in developed economies with high
				formal participation. Developed countries with concentrated
				domestic financial industries, such as Australia, the UK, and
				the EU, have been more hands on with their Open Finance
				policies, legislating mandatory participation for some
				organisations, and pursuing a broader base of data types to be
				shared. While Australia and the EU are yet to reap the fully
				suite of benefits from Open Finance, these policies are already
				reducing high-risk practices such as screen scraping, where
				users provide their username and password to a third party to
				access their data. The UK continues to be a leader in Open
				Finance, with one of the most robust policy frameworks globally,
				and over 13.3 million active users in 2025.
			</p>
			<h5>
				Developed economies with competitive domestic finance industries
			</h5>
			<p>
				Other developed countries have fiercely competitive domestic
				finance industries and favour a less interventionalist policy
				approach. These include Hong Kong, Singapore, and the USA. So
				far, these governments have pursued partially or wholly
				market-based solutions where they work alongside private
				financial institutions to support their voluntary participation
				in data sharing. This approach comes with its own risks, since
				it delegates responsibility for data sharing infrastructure to
				third party private “data aggregator” firms. Without regulation,
				these two can form a concentrated “two-sided” market,
				potentially reinforcing the very concentration of data ownership
				Open Finance was intended to dismantle. In the USA, data
				aggregators such as “plaid” have already claimed a
				disproportionate amount of market share in the Open Finance
				ecosystem, which will need to be addressed in subsequent policy
				reform to ensure data sharing can function in an effective
				manner.
			</p>
			<figure class="bar-chart">
				<figcaption class="caption lead">
					Developed economies use Open Finance as a tool for
					stimulating competition and improving data security in the
					finance industry.
				</figcaption>
				<figcaption class="caption subcaption">
					The x-axis of the chart is a composite measure of Open
					Finance policy progress, how strongly it compels banks to
					enter in Open Finance arrangements with customers and the
					scope of data types they share. The size of each bubble is
					an illustrative measure of absolute population uptake, while
					the y-axis is the rate of consumer uptake in the population.
				</figcaption>
				<img
					src="{base}/DS-graph-52.png"
					alt="Policy progress and uptake of Open Finance in developed economies"
					class="bar-chart-img"
				/>
			</figure>
			<h5>Risks</h5>
			<p>
				In the last five years, data breaches have become larger, more
				frequent, and more costly. Open Finance systems risk becoming a
				target of such attacks without sufficient security standards
				governing both data transmission and infrastructure. As Open
				Finance expands the scope of financial data collection and
				transmission, the risks associated with its implementation grow
				in parallel. As a variety personal data sources become
				integrated into FinTech services, there is the risk that some
				users are excluded due to algorithmic prejudice or biases, such
				as those previously observed in the insurance industry. User
				consent is a core part of Open Finance, but could be vulnerable
				to cyber criminals if not implemented with the proper
				protections. It is essential that user consent is unambiguously
				obtained, securely verified, and retractable to ensure
				individuals have total autonomy over how their data is used. To
				dissuade firms from negligent handling of personal data, a clear
				system for accountability is needed the case of data misuse or
				abuse. It is critical that policy ensures there is no ambiguity
				over whether responsibility for a breach lies with the bank, the
				API aggregator, or the fintech. Without strong safeguards
				against these risks, it is likely both consumers and
				institutions will be hesitant to participate, slowing the flow
				of intended benefits, such as greater competition and
				innovation.
			</p>
			<h2>Conclusion</h2>
			<p>
				Open Finance is a promising policy tool with a range of enticing
				benefits for consumers and financial institutions alike. By
				enabling secure data sharing, it can lower barriers to entry for
				new entrants, foster competition, and improve the quality of
				financial services.
			</p>
			<p>
				However, there is no “one size fits all” solution to Open
				Finance policy. The best policy approach for a country depends
				on the structure and concentration of the existing financial
				landscape, industry objectives and consumer interest. So far,
				countries with strong consumer uptake of Open Finance tools have
				been characterised by fast and early policy implementation,
				strong pre-existing digital finance infrastructure, and the
				policy flexibility to enable and meet the needs of their
				population.
			</p>
			<h3 class="references">References</h3>
			<p>
				ASX. (2024). Top 50 by Market Cap. Australian Securities
				Exchange.
				https://www.asx.com.au/markets/trade-our-cash-market/equity-market-prices/top-50-market-cap
			</p>
			<p>
				Awrey, D., & Macey, J. (2022). The Promise and Perils of Open
				Finance. Yale Journal on Regulation, 40(1).
				https://doi.org/10.2139/ssrn.4045640
			</p>
			<p>
				Ben-Shahar, O. (2019). Data Pollution. Journal of Legal
				Analysis, 11, 104–159. https://doi.org/10.1093/jla/laz005
			</p>
			<p>
				Cambridge Centre for Alternative Finance. (2024). The Global
				State of Open Banking and Open Finance Report. In University of
				Cambridge Judge Business School. Cambridge Centre for
				Alternative Finance (CCAF).
				https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/the-global-state-of-open-banking-and-open-finance-report/
			</p>
			<p>
				Cambridge Centre for Alternative Finance. (2025). The APAC State
				of Open Banking and Open Finance Report. In University of
				Cambridge Judge Business School. Cambridge Centre for
				Alternative Finance (CCAF).
				https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/the-apac-state-of-open-banking-and-open-finance/
			</p>
			<p>
				McKinsey & Company. (2020). The 2020 McKinsey Global Payments
				Report (p. 6). McKinsey & Company.
			</p>
			<p>
				Mizen, R. (2025, August 14). Ahead of Jim Chalmers’ economic
				roundtable, RBA economists explain why Australia is $3000 poorer
				per person. Australian Financial Review.
				https://www.afr.com/politics/federal/why-australia-is-3000-poorer-per-person-according-to-rba-economists-20250814-p5mmyf
			</p>
			<p>
				Nizan Geslevich Packin. (2020). Show Me the (Data About the)
				Money! Utah Law Digital Commons.
				https://dc.law.utah.edu/ulr/vol2020/iss5/4/
			</p>
			<p>
				OECD. (2023a). Open finance policy considerations. In OECD
				Website. OECD.
				https://www.oecd.org/en/publications/open-finance-policy-considerations_19ef3608-en.html
			</p>
			<p>
				OECD. (2023b). Shifting from open banking to open finance:
				Results from the 2022 OECD survey on data sharing frameworks. In
				OECD Website. OECD.
				https://www.oecd.org/en/publications/shifting-from-open-banking-to-open-finance_9f881c0c-en.html
			</p>
			<p>
				The Australian Banking Association, Accenture. (2024). Consumer
				Data Right Strategic Review. In Australian Banking Association
				Website. Australian Banking Association.
				https://www.ausbanking.org.au/report/consumer-data-right-strategic-review-july-2024/
			</p>
			<p>
				The Australian Government the Treasury. (2023). Government
				statement in response to the Statutory Review of the Consumer
				Data Right. In Consumer Data Right. The Australian Government
				the Treasury. https://www.cdr.gov.au/rollout
			</p>
		</div>
	</div>
</section>

<style>
	.animated-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		height: clamp(220px, 50vw, 600px);
		overflow: hidden;
	}

	.title {
		position: absolute;
		display: flex;
		flex-direction: column;
		font-family: "Work Sans", sans-serif;
		font-weight: 600;
		text-align: center;
		font-size: clamp(3rem, 9vw, 6rem);
		line-height: clamp(3.1rem, 12vw, 6rem);
		padding: clamp(12px, 5vw, 5rem);
		z-index: 2;
		color: white;
		white-space: nowrap;
		transition:
			opacity 1s ease,
			transform 1s ease;
		opacity: 0;
		justify-content: end;
		letter-spacing: normal;
		height: 100%;
		width: 100vw;
	}

	.title-container {
		height: 100%;
		display: flex;
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

	.campaign-image {
		height: auto; /* Maintains the aspect ratio */
		border-radius: var(--box-corner-radius);
		width: clamp(260px, 61.9047vw, 520px);
	}

	.lead {
		padding-bottom: 1rem;
		overflow: hidden;
	}

	.lead.two {
		padding-bottom: 1rem;
		overflow: hidden;
		font-size: 1.25rem;
	}

	.paragraph-1 {
		position: relative;
		padding: 1rem 0rem;
		width: clamp(320px, 65%, 600px);
	}

	.paragraph-2 {
		padding-top: clamp(16px, 4.1vw, 3rem);
		padding-bottom: clamp(16px, 4.1vw, 3rem);
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

	.bar-chart-img.long {
		height: 700px;
		width: auto;
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
</style>
