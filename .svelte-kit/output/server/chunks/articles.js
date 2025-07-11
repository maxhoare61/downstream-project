import { Z as fallback, _ as bind_props, W as stringify } from "./index.js";
import { a as attr } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
function ArticleCard($$payload, $$props) {
  let flexDirection;
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let cat = fallback($$props["cat"], "");
  const project = "";
  let imgUrl = fallback($$props["imgUrl"], "");
  let type = fallback($$props["type"], "");
  let link = fallback($$props["link"], "");
  flexDirection = type === "row" ? "row" : "column";
  $$payload.out += `<a${attr("href", link)} class="article-card-link"><div${attr("style", `flex-direction: ${stringify(flexDirection)};`)} class="article-card svelte-11dd3v1"><div class="article-display svelte-11dd3v1"${attr("style", `background-image: url(${stringify(imgUrl)});`)}></div> <div class="article-text svelte-11dd3v1"><div class="tile-type svelte-11dd3v1">${escape_html(cat)}</div> <h5 class="svelte-11dd3v1">${escape_html(title)}</h5> <p class="tile-description svelte-11dd3v1">${escape_html(description)}</p></div></div></a>`;
  bind_props($$props, {
    title,
    description,
    cat,
    imgUrl,
    type,
    link,
    project
  });
}
const articlesData = [
  {
    project: "Putting Emissions back in Perspective",
    projectDescription: "Climate narratives are often shaped by ideology and confusion, making it easy to lose sight of what’s truly at stake. This project seeks to undo our biases and reground the climate narrative in real data to give readers a fresh view of this thoroughly discussed topic.",
    projectLink: "#",
    imgUrl: "/smoke-stack-extended.jpg",
    articles: [
      {
        title: "The Aesthetics of Inaction: BP's Story",
        description: "In the 2000s BP launched a peculiar marketing campaign that was drastically out of step with its oil peers. However, their new look was not all that it seemed.",
        cat: "Article • July 4, 2025",
        project: "Carbon Emissions",
        imgUrl: "/article_five.jpg",
        type: "column",
        link: "/articles/article-five"
      },
      {
        title: "Understanding the Scale of Emissions",
        description: "Studies show that while the publics understanding of the science behind climate change has improved, we struggle to understand the scale of climate change. This article explains emissions using units of measurement that anyone can understand.",
        cat: "Article • June 20, 2025",
        project: "Carbon Emissions",
        imgUrl: "/smoke-stack-extended.jpg",
        type: "column",
        link: "/articles/article-four"
      }
    ]
  }
];
export {
  ArticleCard as A,
  articlesData as a
};
