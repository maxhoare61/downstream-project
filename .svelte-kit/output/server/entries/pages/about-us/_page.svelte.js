import { W as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<div class="content-container svelte-1hyx28l"><h1 class="title svelte-1hyx28l">About Us</h1> <div class="top-section svelte-1hyx28l"><div class="paragraph-2 svelte-1hyx28l"><p class="svelte-1hyx28l">At Downstream project, we believe critical information on
				important issues should be accessible. However, these insights
				often sit buried in fragmented government databases and
				publications. Whilst the information is publicly available,
				extracting meaningful insights requires technical expertise,
				time, and resources. That’s why at Downstream, we do the heavy
				lifting. We clean, investigate, and transform raw government
				data into engaging, interactive stories that invite exploration
				and understanding.</p> <p class="svelte-1hyx28l">We connect scattered datasets, highlight hidden patterns, and
				present information in ways that help you understand the full
				picture. Our mission is to help the public use data to make
				informed decisions on issues they care about.</p> <div class="fig-container-abtus svelte-1hyx28l"><figure class="figure-dessert svelte-1hyx28l"><img${attr("src", `${stringify(base)}/about-us.jpg`)} alt="Impressionist painting of a mining site" class="img1 svelte-1hyx28l"> <figcaption class="caption svelte-1hyx28l">Our mission is to create a world where the public feels
						empowered to make decisions on issues affecting
						themselves and the environment (source: Imagen 3 AI)</figcaption></figure></div></div></div></div>`;
}
export {
  _page as default
};
