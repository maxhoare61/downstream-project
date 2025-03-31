import { W as stringify } from "../../../chunks/index.js";
import "clsx";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function WhatWeDo($$payload) {
  $$payload.out += `<section class="section svelte-bvdu9k"><div class="title-group svelte-bvdu9k"><h1 class="title">What we do</h1> <div class="lead">Our process at the downstream project</div></div> <div class="item-group svelte-bvdu9k"><div class="item svelte-bvdu9k"><h3 class="item-title">01 Compile and Clean the Data</h3> <p class="item-description">We identify an are where data fails to communicate a clear narrative. We then gather data from various sources such as pdfs, sparse databases and APIs.</p></div> <div class="item svelte-bvdu9k"><h3 class="item-title">02 Analysis</h3> <p class="item-description">We meticulously analyse the data to uncover patterns, trends, and insights that can be used to inform our articles.</p></div> <div class="item svelte-bvdu9k"><h3 class="item-title">03 Create Visuals</h3> <p class="item-description">We transform complex data into easy-to-understand graphics, making it easier for stakeholders to grasp the insights.</p></div> <div class="item svelte-bvdu9k"><h3 class="item-title">04 Deliver the Insights</h3> <p class="item-description">We present the insights in a clear and concise manner.</p></div></div></section>`;
}
function _page($$payload) {
  $$payload.out += `<div class="content-container svelte-1vo0xn"><h1 class="title svelte-1vo0xn">About Us</h1> <div class="top-section svelte-1vo0xn"><div class="section-left svelte-1vo0xn"><div class="lead svelte-1vo0xn">At Downstream, we believe public data should be truly public.</div> <div class="paragraph-2 svelte-1vo0xn"><p class="svelte-1vo0xn">However, important insights often sit buried in fragmented government databases and
					publications. Whilst the information is publicly available, extracting meaningful insights requires technical expertise,
					time, and resources. That’s why at Downstream, we do the heavy lifting. We clean, investigate, and transform raw
					government data into engaging, interactive stories that invite exploration and understanding.</p> <figure class="figure svelte-1vo0xn"><img${attr("src", `${stringify(base)}/about-us.jpg`)} alt="Impressionist painting of a mining site" class="img1 svelte-1vo0xn"> <figcaption class="caption svelte-1vo0xn">Our mission is to create a world where the public feels empowered to make decisions on issues affecting themselves and the environment (source: Imagen 3 AI)</figcaption></figure> <p class="svelte-1vo0xn">We connect scattered datasets, highlight hidden patterns, and present information in ways that help
					you understand the full picture. Our mission is to help the public use data to make informed decisions on important issues. <br></p></div></div> <div class="section-right svelte-1vo0xn"></div></div> `;
  WhatWeDo($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
