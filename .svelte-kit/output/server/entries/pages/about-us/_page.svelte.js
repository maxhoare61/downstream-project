import "clsx";
function WhatWeDo($$payload) {
  $$payload.out += `<section class="section svelte-bvdu9k"><div class="title-group svelte-bvdu9k"><h1 class="title">What we do</h1> <div class="lead">Our process at the downstream project</div></div> <div class="item-group svelte-bvdu9k"><div class="item svelte-bvdu9k"><h3 class="item-title">01 Compile and Clean the Data</h3> <p class="item-description">We gather data from various sources and ensure it is clean and ready for analysis. This step is crucial to ensure the accuracy and reliability of the insights we provide.</p></div> <div class="item svelte-bvdu9k"><h3 class="item-title">02 Analysis</h3> <p class="item-description">Meticulously analyse the data to uncover patterns, trends, and insights that can drive informed decision-making.</p></div> <div class="item svelte-bvdu9k"><h3 class="item-title">03 Create Engaging Visuals</h3> <p class="item-description">We transform complex data into visually appealing and easy-to-understand graphics, making it easier for stakeholders to grasp the insights.</p></div> <div class="item svelte-bvdu9k"><h3 class="item-title">04 Deliver the Insights</h3> <p class="item-description">We present the insights in a clear and concise manner, ensuring that our clients can take actionable steps based on the data.</p></div></div></section>`;
}
function _page($$payload) {
  $$payload.out += `<div class="content-container svelte-aoux72"><h1 class="title svelte-aoux72">About Us</h1> <div class="top-section svelte-aoux72"><div class="section-left svelte-aoux72"><div class="lead svelte-aoux72">At Downstream, we believe public data should be truly public.</div> <div class="body-text svelte-aoux72"><p>However, important insights often sit buried in fragmented government databases and
					publications. Whilst the information is publicly available, extracting meaningful insights requires technical expertise,
					time, and resources. That’s why at Downstream, we do the heavy lifting. We clean, investigate, and transform raw
					government data into engaging, interactive stories that invite exploration and understanding. <br> <br> We connect scattered datasets, highlight hidden patterns, and present information in ways that help
					you understand the full picture. Our mission is to help the public use data to make informed decisions on important issues. <br></p></div></div> <div class="section-right svelte-aoux72"><img src="/about-us.jpg" alt="Impressionist painting of a mining site" class="svelte-aoux72"> <p class="caption svelte-aoux72">Our mission is to create a world where the public feels empowered to make decisions on issues affecting themselves and the environment (source: Imagen 3 AI)</p></div></div> `;
  WhatWeDo($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
