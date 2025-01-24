import { f as bind_props, d as stringify } from "./index.js";
import { f as fallback } from "./utils.js";
import { a as attr } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
function ProjectCard($$payload, $$props) {
  let flexDirection;
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let cat = fallback($$props["cat"], "");
  let col = fallback($$props["col"], "");
  let type = fallback($$props["type"], "");
  let link = fallback($$props["link"], "");
  flexDirection = type === "row" ? "row" : "column";
  $$payload.out += `<a${attr("href", link)} class="project-card-link"><div${attr("style", `--color: ${stringify(col)}; flex-direction: ${stringify(flexDirection)};`)} class="project-card svelte-keh2g"><div class="project-display svelte-keh2g"></div> <div class="project-text svelte-keh2g"><div class="category svelte-keh2g">${escape_html(cat)}</div> <h4 class="svelte-keh2g">${escape_html(title)}</h4> <p class="svelte-keh2g">${escape_html(description)}</p></div></div></a>`;
  bind_props($$props, { title, description, cat, col, type, link });
}
export {
  ProjectCard as P
};
