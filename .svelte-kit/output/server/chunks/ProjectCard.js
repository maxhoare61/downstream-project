import { f as bind_props, d as stringify } from "./index.js";
import { f as fallback } from "./utils.js";
import { a as attr } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
function ProjectCard($$payload, $$props) {
  let flexDirection;
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let cat = fallback($$props["cat"], "");
  let imgUrl = fallback($$props["imgUrl"], "");
  let type = fallback($$props["type"], "");
  let link = fallback($$props["link"], "");
  flexDirection = type === "row" ? "row" : "column";
  $$payload.out += `<a${attr("href", link)} class="project-card-link"><div${attr("style", `flex-direction: ${stringify(flexDirection)};`)} class="project-card svelte-1ejuyra"><div class="project-display svelte-1ejuyra"${attr("style", `background-image: url(${stringify(imgUrl)});`)}></div> <div class="project-text svelte-1ejuyra"><div class="category svelte-1ejuyra">${escape_html(cat)}</div> <h4 class="svelte-1ejuyra">${escape_html(title)}</h4> <p class="svelte-1ejuyra">${escape_html(description)}</p></div></div></a>`;
  bind_props($$props, {
    title,
    description,
    cat,
    imgUrl,
    type,
    link
  });
}
export {
  ProjectCard as P
};
