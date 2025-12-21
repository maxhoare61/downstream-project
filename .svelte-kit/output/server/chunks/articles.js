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
  $$payload.out += `<a${attr("href", link)} class="article-card-link"><div${attr("style", `flex-direction: ${stringify(flexDirection)};`)} class="article-card svelte-1xwe889"><div class="article-display svelte-1xwe889"${attr("style", `background-image: url(${stringify(imgUrl)});`)}></div> <div class="article-text svelte-1xwe889"><div class="tile-type svelte-1xwe889">${escape_html(cat)}</div> <h5 class="svelte-1xwe889">${escape_html(title)}</h5> <p class="tile-description svelte-1xwe889">${escape_html(description)}</p></div></div></a>`;
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
    project: "Ideas in Finance",
    projectDescription: "Breaking down new ideas in the world of finance, through clear explanations tied to real-world issues.",
    projectLink: "#",
    imgUrl: "/smoke-stack-extended.jpg",
    articles: [
      {
        title: "The Promise of Open Finance",
        description: "For a set of policy on its way to be enacted in 95 countries, Open Finance doesn't get much airtime. This article introduces the topic, and how it could help to solve one of Australia's biggest problems.",
        cat: "Article • August 23, 2025",
        project: "Ideas in Finance",
        imgUrl: "/OpenFinance_thumnail_crop.jpg",
        type: "column",
        link: "/publications/art_06"
      }
    ]
  },
  {
    project: "Putting Emissions back in Perspective",
    projectDescription: "Climate narratives are often shaped by ideology and confusion, making it easy to lose sight of what’s truly at stake. This project seeks to undo our biases and reground the climate narrative in real data to give readers a fresh view of this thoroughly discussed topic.",
    projectLink: "#",
    imgUrl: "/smoke-stack-extended.jpg",
    articles: [
      {
        title: "Understanding the Scale of Emissions",
        description: "The units we use to describe climate change are wholly unrelatable. This article explains emissions using units of measurement that anyone can understand.",
        cat: "Article • June 20, 2025",
        project: "Carbon Emissions",
        imgUrl: "/smoke-stack-extended.jpg",
        type: "column",
        link: "/publications/art_04"
      }
    ]
  }
];
export {
  ArticleCard as A,
  articlesData as a
};
