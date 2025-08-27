import { Z as fallback, $ as ensure_array_like, _ as bind_props, W as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { A as ArticleCard, a as articlesData } from "../../../chunks/articles.js";
function SubHeader($$payload, $$props) {
  let links = fallback($$props["links"], () => [], true);
  const each_array = ensure_array_like(links);
  $$payload.out += `<div class="sub-header-container svelte-hyx0qu"><nav class="svelte-hyx0qu"><a class="all svelte-hyx0qu"${attr("href", `${stringify(base)}/`)}>All</a> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<a${attr("href", link.href)} class="svelte-hyx0qu">${escape_html(link.text)}</a>`;
  }
  $$payload.out += `<!--]--></nav></div>`;
  bind_props($$props, { links });
}
function _page($$payload) {
  const projects = articlesData;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="content-container"><h1 class="page-title">Explore Projects</h1> `;
  SubHeader($$payload, {
    links: [
      { href: "#project-0", text: "Ideas in Finance" },
      {
        href: "#project-1",
        text: "Emissions in Perspective"
      }
    ]
  });
  $$payload.out += `<!----> <!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let { project, projectDescription, articles } = each_array[i];
    const each_array_1 = ensure_array_like(articles);
    $$payload.out += `<section class="project-section svelte-1vwr8fa"${attr("id", "project-" + i)}><div class="project-header svelte-1vwr8fa"><div class="display-text svelte-1vwr8fa"><p class="tile-type svelte-1vwr8fa">Project</p> <h4 class="svelte-1vwr8fa">${escape_html(project)}</h4> <p class="lead project-description svelte-1vwr8fa">${escape_html(projectDescription)}</p></div></div> <div class="article-grid svelte-1vwr8fa"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let article = each_array_1[$$index];
      ArticleCard($$payload, {
        title: article.title,
        description: article.description,
        cat: article.cat,
        imgUrl: `${stringify(base)}${stringify(article.imgUrl)}`,
        type: article.type,
        link: `${stringify(base)}${stringify(article.link)}`,
        project: article.project
      });
    }
    $$payload.out += `<!--]--></div></section>`;
  }
  $$payload.out += `<!--]--></div>`;
}
export {
  _page as default
};
