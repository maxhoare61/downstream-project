import { Q as pop, O as push, W as stringify } from "../../../../chunks/index.js";
import { A as AnimatedHeader3 } from "../../../../chunks/AnimatedHeader3.js";
import "clsx";
import * as d3 from "d3";
import { a as attr } from "../../../../chunks/attributes.js";
function LifetimeEmissionsChart($$payload, $$props) {
  push();
  let data = [
    {
      company: "AGL",
      low: 11.84,
      medium: 17.1,
      high: 23.68
    },
    {
      company: "Stanwell",
      low: 21.92,
      medium: 31.67,
      high: 43.85
    },
    {
      company: "Origin",
      low: 23.56,
      medium: 32.33,
      high: 44.76
    },
    {
      company: "EnergyAus.",
      low: 22.38,
      medium: 34.04,
      high: 47.13
    },
    {
      company: "Chevron",
      low: 31.11,
      medium: 44.94,
      high: 62.23
    },
    {
      company: "Pioneer",
      low: 39.36,
      medium: 56.86,
      high: 78.73
    },
    {
      company: "CS Energy",
      low: 44.57,
      medium: 64.38,
      high: 89.14
    }
  ];
  const scenarios = [
    { key: "Low", field: "low", color: "#1f77b4" },
    {
      key: "Medium",
      field: "medium",
      color: "#ff7f0e"
    },
    { key: "High", field: "high", color: "#2ca02c" }
  ];
  data.flatMap((d) => scenarios.map((s) => ({
    company: d.company,
    scenario: s.key,
    value: d[s.field],
    color: s.color
  })));
  const allValues = data.flatMap((d) => [d.low, d.medium, d.high]);
  d3.max(allValues) ?? 0;
  $$payload.out += `<div id="chart-container"><svg id="chart"></svg></div>`;
  pop();
}
function AnnualEmissionsChart($$payload, $$props) {
  push();
  $$payload.out += `<div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<section id="hero"><div class="animated-header svelte-39cqq2"><div${attr("class", `title ${stringify("")} svelte-39cqq2`)}>Understanding <br> the scale of<br> Emissions</div> <div class="ah1 svelte-39cqq2">`;
  AnimatedHeader3($$payload);
  $$payload.out += `<!----></div></div> <div class="content-container svelte-39cqq2"><div class="paragraph-1 svelte-39cqq2"><p class="tile-description i svelte-39cqq2"><strong>Maxwell Hoare</strong></p> <p class="lead svelte-39cqq2">One reason that misconceptions about climate change gain
				traction is that it is hard to understand the units we use to
				measure it. What does one tonne of carbon dioxide look like? How about a
				million tonnes of carbon dioxide? Studies have shown that people are
				surprisingly bad at grasping numbers on the scale of climate
				change, especially when they involve invisible gasses. To create
				genuine impetus for action in circles that are uninformed about
				the climate crisis, we need to start describing climate change
				in units that anyone can digest. This article attempts to to
				show that this approach has the potential to lay bare the
				seriousness of the climate crisis.</p></div></div></section> <section id="s-origins" class="svelte-39cqq2"><div class="makeover-paragraph svelte-39cqq2"><h2 class="svelte-39cqq2">What Does the Data Say?</h2> <div class="paragraph-2 svelte-39cqq2"><p class="svelte-39cqq2">On average, each Australian produces 13 tonnes of CO₂ per year
				through direct emissions (7.5 tonnes) and electricity use (5.5
				tonnes), one of the highest in the developed world. To
				understand what this means, let’s look at what it takes to
				produce 1 tonne of CO₂. Burning a gas stove it would take 2,551
				hours (or about 106 days) to emit 1 tonne of CO₂. Driving in a
				Toyota Camry, you could emit 1 tonne of CO₂ by driving ~5,050
				kilometres, roughly the distance of a round trip from Sydney to
				Perth.</p> <p class="svelte-39cqq2">However, these 13 tonnes of CO2 represent a tiny fraction of the
				33 million tonnes of CO₂ produced by AGL’s facilities last year
				alone. Assuming AGLs emissions are evenly spread over the year,
				how long do you think it takes for AGL to produce emissions
				equivalent to one person’s average annual output? You may be
				surprised to know the answer; AGL produces approximately one
				Australian’s annual emissions worth of CO2 of every 12.37
				seconds or 2,553,398 times each year. The chart below shows the
				surprisingly short time it takes Australia’s three largest
				emitters to produce the annual emissions of a single Australian.</p></div></div> <figure id="d3-chart" class="svelte-39cqq2">`;
  AnnualEmissionsChart($$payload);
  $$payload.out += `<!----> <figcaption>The time it takes for Australia's largest emitters to produce
			emissions equal to the amount the average Australian produces in one
			year (source: WorldBank)</figcaption></figure> <div class="makeover-paragraph svelte-39cqq2"><div class="paragraph-2 svelte-39cqq2"><p class="svelte-39cqq2">Since we are interested in the usefulness of carbon footprint
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
				corporations.</p> <p class="svelte-39cqq2">Another helpful way to understand the scale of corporate
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
				emissions output in Australia.</p></div></div> <figure id="d3-chart-lifetime" class="svelte-39cqq2">`;
  LifetimeEmissionsChart($$payload);
  $$payload.out += `<!----> <figcaption>The time it takes for Australia's largest emitters to produce
			emissions equal to the amount the average Australian produces in
			their lifetime (source: WorldBank)</figcaption></figure> <div class="makeover-paragraph svelte-39cqq2"><div class="paragraph-2 svelte-39cqq2"><p class="svelte-39cqq2">It may be disheartening to those who choose to forego simple
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
				are the direct emissions caused by their daily operations.</p></div> <h2 class="svelte-39cqq2">Conclusions</h2> <div class="paragraph-2 svelte-39cqq2"><p class="svelte-39cqq2">While lifestyle changes can still provide market signals to
				corporations, there are clear limits to this strategy. However,
				not all hope is lost. Recognising this, we can refocus efforts
				on reforming the industries and institutions that shape the
				choices available to us in the first place.</p></div></div></section>`;
  pop();
}
export {
  _page as default
};
