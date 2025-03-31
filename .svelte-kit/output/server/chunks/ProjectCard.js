import { Z as fallback, _ as bind_props, W as stringify } from "./index.js";
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
  $$payload.out += `<a${attr("href", link)} class="project-card-link"><div${attr("style", `flex-direction: ${stringify(flexDirection)};`)} class="project-card svelte-xypbi9"><div class="project-display svelte-xypbi9"${attr("style", `background-image: url(${stringify(imgUrl)});`)}></div> <div class="project-text svelte-xypbi9"><div class="tile-type">${escape_html(cat)}</div> <h5 class="svelte-xypbi9">${escape_html(title)}</h5> <p class="tile-description svelte-xypbi9">${escape_html(description)}</p></div></div></a>`;
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
