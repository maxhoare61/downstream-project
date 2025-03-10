import { i as ensure_array_like, f as bind_props, d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { f as fallback } from "../../../chunks/utils.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { P as ProjectCard } from "../../../chunks/ProjectCard.js";
function SubHeader($$payload, $$props) {
  let links = fallback($$props["links"], () => [], true);
  const each_array = ensure_array_like(links);
  $$payload.out += `<h1 class="svelte-1l2m6kc">Explore Our Projects</h1> <div class="sub-header-container svelte-1l2m6kc"><nav class="svelte-1l2m6kc"><a class="all svelte-1l2m6kc"${attr("href", `${stringify(base)}/`)}>All</a> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<a${attr("href", link.href)} class="svelte-1l2m6kc">${escape_html(link.text)}</a>`;
  }
  $$payload.out += `<!--]--> <a class="filter svelte-1l2m6kc"${attr("href", `${stringify(base)}/`)}>Filter</a></nav></div>`;
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
  $$payload.out += `<!----> <section class="Project-Container svelte-jsdxag"><div class="project-grid svelte-jsdxag"><div class="text-container left svelte-jsdxag"><h2>Carbon Emissions in Perspective</h2> <p class="svelte-jsdxag">A project to shed light on how data is often misrepresented
					to paint consumers as the cause of emissions.</p></div> `;
  ProjectCard($$payload, {
    imgUrl: `${stringify(base)}/smoke-stack-extended.jpg`,
    type: "column",
    cat: "Project",
    title: "The Carbon Footprint Story",
    description: "In this article we cover why carbon footprint exists and how it has been used to shape the public's perception of climate change.",
    link: `${stringify(base)}/articles/article-one`
  });
  $$payload.out += `<!----></div> <div class="project-grid svelte-jsdxag">`;
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
  $$payload.out += `<!----></div></section> <section class="Project-Container svelte-jsdxag"><div class="project-grid svelte-jsdxag">`;
  ProjectCard($$payload, {
    type: "column",
    cat: "Project",
    title: "Carbon Emissions in Perspective",
    description: "An in-depth analysis of carbon emissions across various industries and their impact on the environment."
  });
  $$payload.out += `<!----> <div class="text-container right svelte-jsdxag"><h2>Political Donations Revealed</h2> <p class="svelte-jsdxag">A collection of articles, interactive stories and data on
					carbon emissions and the notion of our ‘carbon footprint’.</p></div></div> <div class="project-grid svelte-jsdxag">`;
  ProjectCard($$payload, {
    cat: "Project",
    title: "Carbon Emissions in Perspective",
    description: "An in-depth analysis of carbon emissions across various industries and their impact on the environment."
  });
  $$payload.out += `<!----> `;
  ProjectCard($$payload, {
    cat: "Article",
    title: "Political Donations Revealed",
    description: "A comprehensive report uncovering the sources and amounts of political donations in recent elections."
  });
  $$payload.out += `<!----> `;
  ProjectCard($$payload, {
    cat: "Project",
    title: "Minister and Senator Interests",
    description: "A detailed investigation into the financial interests and holdings of current ministers and senators."
  });
  $$payload.out += `<!----></div></section></div>`;
}
export {
  _page as default
};
