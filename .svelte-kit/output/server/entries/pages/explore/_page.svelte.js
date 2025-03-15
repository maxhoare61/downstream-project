import { i as ensure_array_like, f as bind_props, d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { f as fallback } from "../../../chunks/utils.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { P as ProjectCard } from "../../../chunks/ProjectCard.js";
function SubHeader($$payload, $$props) {
  let links = fallback($$props["links"], () => [], true);
  const each_array = ensure_array_like(links);
  $$payload.out += `<h1 class="svelte-15i5jy6">Explore Our Projects</h1> <div class="sub-header-container svelte-15i5jy6"><nav class="svelte-15i5jy6"><a class="all svelte-15i5jy6"${attr("href", `${stringify(base)}/`)}>All</a> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<a${attr("href", link.href)} class="svelte-15i5jy6">${escape_html(link.text)}</a>`;
  }
  $$payload.out += `<!--]--></nav></div>`;
  bind_props($$props, { links });
}
function _page($$payload) {
  $$payload.out += `<div class="content-container">`;
  SubHeader($$payload, {
    links: [
      { href: "#", text: "Carbon Emissions" },
      { href: "#", text: "Political Donations" }
    ]
  });
  $$payload.out += `<!----> <section class="Project-Container svelte-5b9tkh"><div class="project-grid svelte-5b9tkh"><div class="text-container left svelte-5b9tkh"><h3>Carbon Emissions in Perspective</h3> <p class="svelte-5b9tkh">A project to shed light on how data is often misrepresented
					to paint consumers as the cause of emissions.</p></div> `;
  ProjectCard($$payload, {
    imgUrl: `${stringify(base)}/smoke-stack-extended.jpg`,
    type: "column",
    cat: "Project",
    title: "The Carbon Footprint Story",
    description: "In this article we cover why carbon footprint exists and how it has been used to shape the public's perception of climate change.",
    link: `${stringify(base)}/articles/article-one`
  });
  $$payload.out += `<!----></div> <div class="project-grid svelte-5b9tkh">`;
  ProjectCard($$payload, {
    link: `${stringify(base)}/articles/article-two`,
    imgUrl: `${stringify(base)}/calculator-thumbnail.png`,
    cat: "Project",
    title: "Reverse Carbon Footprint Calculator",
    description: "A detailed investigation into ..."
  });
  $$payload.out += `<!----> `;
  ProjectCard($$payload, {
    cat: "Project",
    title: "Carbon Emissions in Perspective",
    description: "An in-depth analysis of carbon emissions across various industries and their impact on the environment."
  });
  $$payload.out += `<!----> `;
  ProjectCard($$payload, {
    imgUrl: `${stringify(base)}/political-donations.jpg`,
    cat: "Article",
    title: "Un-masking Political Donations",
    description: "A comprehensive report uncovering the sources and amounts of political donations in recent elections."
  });
  $$payload.out += `<!----></div></section></div>`;
}
export {
  _page as default
};
