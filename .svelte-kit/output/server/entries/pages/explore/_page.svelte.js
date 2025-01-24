import "clsx";
import { i as ensure_array_like, f as bind_props } from "../../../chunks/index.js";
import { f as fallback } from "../../../chunks/utils.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { P as ProjectCard } from "../../../chunks/ProjectCard.js";
function SubHeader($$payload, $$props) {
  let links = fallback($$props["links"], () => [], true);
  const each_array = ensure_array_like(links);
  $$payload.out += `<h1 class="svelte-1ugdts6">Explore Our Projects</h1> <div class="sub-header-container svelte-1ugdts6"><nav class="svelte-1ugdts6"><a class="all svelte-1ugdts6" href="#">All</a> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<a${attr("href", link.href)} class="svelte-1ugdts6">${escape_html(link.text)}</a>`;
  }
  $$payload.out += `<!--]--> <a class="filter svelte-1ugdts6" href="#">Filter</a></nav></div>`;
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
  $$payload.out += `<!----> <section class="Project-Container svelte-5tt9gp"><div class="project-grid svelte-5tt9gp"><div class="text-container left svelte-5tt9gp"><h4>Carbon Emissions in Perspective</h4> <p class="svelte-5tt9gp">A collection of articles, interactive stories and data on carbon emissions and the notion of our ‘carbon footprint’.</p></div> `;
  ProjectCard($$payload, {
    col: "var(--accent-secondary)",
    type: "column",
    cat: "Project",
    title: "Carbon Emissions in Perspective",
    description: "An in-depth analysis of carbon emissions across various industries and their impact on the environment."
  });
  $$payload.out += `<!----></div> <div class="project-grid svelte-5tt9gp">`;
  ProjectCard($$payload, {
    col: "var(--accent-secondary)",
    cat: "Project",
    title: "Carbon Emissions in Perspective",
    description: "An in-depth analysis of carbon emissions across various industries and their impact on the environment."
  });
  $$payload.out += `<!----> `;
  ProjectCard($$payload, {
    col: "var(--accent-secondary)",
    cat: "Article",
    title: "Political Donations Revealed",
    description: "A comprehensive report uncovering the sources and amounts of political donations in recent elections."
  });
  $$payload.out += `<!----> `;
  ProjectCard($$payload, {
    col: "var(--accent-secondary)",
    cat: "Project",
    title: "Minister and Senator Interests",
    description: "A detailed investigation into the financial interests and holdings of current ministers and senators."
  });
  $$payload.out += `<!----></div></section> <section class="Project-Container svelte-5tt9gp"><div class="project-grid svelte-5tt9gp">`;
  ProjectCard($$payload, {
    col: "var(--accent-primary)",
    type: "column",
    cat: "Project",
    title: "Carbon Emissions in Perspective",
    description: "An in-depth analysis of carbon emissions across various industries and their impact on the environment."
  });
  $$payload.out += `<!----> <div class="text-container right svelte-5tt9gp"><h4>Political Donations Revealed</h4> <p class="svelte-5tt9gp">A collection of articles, interactive stories and data on carbon emissions and the notion of our ‘carbon footprint’.</p></div></div> <div class="project-grid svelte-5tt9gp">`;
  ProjectCard($$payload, {
    col: "var(--accent-primary)",
    cat: "Project",
    title: "Carbon Emissions in Perspective",
    description: "An in-depth analysis of carbon emissions across various industries and their impact on the environment."
  });
  $$payload.out += `<!----> `;
  ProjectCard($$payload, {
    col: "var(--accent-primary)",
    cat: "Article",
    title: "Political Donations Revealed",
    description: "A comprehensive report uncovering the sources and amounts of political donations in recent elections."
  });
  $$payload.out += `<!----> `;
  ProjectCard($$payload, {
    col: "var(--accent-primary)",
    cat: "Project",
    title: "Minister and Senator Interests",
    description: "A detailed investigation into the financial interests and holdings of current ministers and senators."
  });
  $$payload.out += `<!----></div></section></div>`;
}
export {
  _page as default
};
