import "clsx";
import { c as pop, p as push } from "../../../chunks/index.js";
function SplittingText($$payload, $$props) {
  push();
  $$payload.out += `<div id="scrolly-container" class="svelte-1yb5q8j"><div class="lead">When people can't get access to information, this creates a gap between</div> <h4 id="public-data" class="svelte-1yb5q8j">public data</h4> <h4 id="and" class="svelte-1yb5q8j">and</h4> <h4 id="public-understanding" class="svelte-1yb5q8j">public understanding</h4></div> <div id="text-container"><p>Public data is only truly transparent when its insights are accessible to everyone - not just
    data scientists.<br> <br></p> <p>That’s why at Downstream, we do the heavy lifting. We clean, investigate, and transform raw
    government data into engaging, interactive stories that invite exploration and understanding. We
    connect scattered datasets, highlight hidden patterns, and present information in ways that help
    you understand the full picture. From tracking political influence through donation patterns to
    putting carbon emissions in perspective, we make important data accessible to everyone.<br> <br></p> <p>That's why we're Downstream—delivering insights from public data, to the public.<br> <br></p></div>`;
  pop();
}
function WhatWeDo($$payload) {
  $$payload.out += `<section class="section svelte-bvdu9k"><div class="title-group svelte-bvdu9k"><h1 class="title">What we do</h1> <div class="lead">Our process at the downstream project</div></div> <div class="item-group svelte-bvdu9k"><div class="item svelte-bvdu9k"><h3 class="item-title">01 Compile and Clean the Data</h3> <p class="item-description">We gather data from various sources and ensure it is clean and ready for analysis. This step is crucial to ensure the accuracy and reliability of the insights we provide.</p></div> <div class="item svelte-bvdu9k"><h3 class="item-title">02 Analysis</h3> <p class="item-description">Meticulously analyse the data to uncover patterns, trends, and insights that can drive informed decision-making.</p></div> <div class="item svelte-bvdu9k"><h3 class="item-title">03 Create Engaging Visuals</h3> <p class="item-description">We transform complex data into visually appealing and easy-to-understand graphics, making it easier for stakeholders to grasp the insights.</p></div> <div class="item svelte-bvdu9k"><h3 class="item-title">04 Deliver the Insights</h3> <p class="item-description">We present the insights in a clear and concise manner, ensuring that our clients can take actionable steps based on the data.</p></div></div></section>`;
}
function _page($$payload) {
  $$payload.out += `<div class="content-container"><h1 class="title svelte-k6xiar">About Us</h1> <div class="lead svelte-k6xiar">At Downstream, we believe public data should be truly public.</div> <p>However, important insights often sit buried in fragmented government databases and
		publications. <br> Whilst the information is publicly available, extracting meaningful insights requires technical expertise,
		time, and resources.<br></p> <div class="animation-container svelte-k6xiar"><div class="animation-backdrop svelte-k6xiar"></div></div> `;
  SplittingText($$payload);
  $$payload.out += `<!----> `;
  WhatWeDo($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
