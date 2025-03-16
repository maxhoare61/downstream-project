import { c as pop, p as push, f as bind_props, d as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
import "../../chunks/client.js";
import "d3";
import { f as fallback } from "../../chunks/utils.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { P as ProjectCard } from "../../chunks/ProjectCard.js";
function InteractiveGraph($$payload, $$props) {
  push();
  let width = 600;
  let height = 600;
  $$payload.out += `<canvas${attr("width", width)}${attr("height", height)}></canvas>`;
  pop();
}
function Hero($$payload, $$props) {
  let subtitle = fallback($$props["subtitle"], "Because public data deserves public understanding.");
  let words = [
    "stories.",
    "insights.",
    "knowledge.",
    "understanding.",
    "thoughtful."
  ];
  let currentWordIndex = 0;
  function updateWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }
  function getNextInterval(t) {
    const a = 1e-3;
    const b = -0.5;
    const c = 90;
    return Math.max(a * t * t + b * t + c, 0);
  }
  function startUpdatingWords() {
    let t = 0;
    function update() {
      updateWord();
      t += getNextInterval(t);
      if (t < 1500) {
        setTimeout(update, getNextInterval(t));
      }
    }
    update();
  }
  if (typeof window !== "undefined") {
    startUpdatingWords();
  }
  $$payload.out += `<section class="hero-landing svelte-san4qj"><div class="hero-left svelte-san4qj"><button class="graph-overlay svelte-san4qj"><div class="instruct show svelte-san4qj">Use the mouse to interact with the navigation graph. <br> Click on a node to reveal it's sub-nodes.</div> `;
  InteractiveGraph($$payload);
  $$payload.out += `<!----></button> <div class="diagram-backdrop svelte-san4qj"></div></div> <div class="hero-right svelte-san4qj"><div class="hero-right-container svelte-san4qj"><div class="hero svelte-san4qj">Less spreadsheets,<br> more <span class="glow svelte-san4qj">${escape_html(words[currentWordIndex])}</span></div> <p class="lead">${escape_html(subtitle)}</p> <a${attr("href", `${stringify(base)}/about-us`)} class="btn-1 svelte-san4qj">About us</a></div></div></section> <section class="insight-banner svelte-san4qj"><div class="lead"><strong>Downstream</strong> ensures the important insights flow to you</div></section>`;
  bind_props($$props, { subtitle });
}
function Preamble($$payload, $$props) {
  push();
  let heading1 = fallback($$props["heading1"], "The Problem");
  let text1 = fallback($$props["text1"], "Public data isn’t always publicly accessible. Key insights from government data are often  scattered across PDFs,  spreadsheets, and fragmented databases. While technically publicly available, understanding it requires expertise, and a lot of time.");
  let heading2 = fallback($$props["heading2"], "Our Approach");
  let text2 = fallback($$props["text2"], "At Downstream, we believe public data should be truly public. We transform dense datasets into clear, interactive visuals and scrollable narratives. We handle the data cleaning, analysis, and visualisations - you explore the insights.");
  let heading3 = fallback($$props["heading3"], "Our Work");
  let text3 = fallback($$props["text3"], "We're starting small but focusing on what matters—making carbon emissions and political donation data accessible to everyone through interactive storytelling. These are the stories we care about, and we believe you should be able to understand them too.");
  $$payload.out += `<section class="section svelte-wxevlp"><div class="section-left svelte-wxevlp"><div class="section-left-child svelte-wxevlp"><h2>${escape_html(heading1)}</h2> <div class="p">${escape_html(text1)}</div></div> <div class="section-left-child svelte-wxevlp"><h2>${escape_html(heading2)}</h2> <div class="p">${escape_html(text2)}</div></div> <div class="section-left-child svelte-wxevlp"><h2>${escape_html(heading3)}</h2> <div class="p">${escape_html(text3)}</div></div></div> <div class="section-right svelte-wxevlp"><div class="backdrop-right svelte-wxevlp"><div class="lottie-container svelte-wxevlp"></div></div></div></section>`;
  bind_props($$props, {
    heading1,
    text1,
    heading2,
    text2,
    heading3,
    text3
  });
  pop();
}
function _page($$payload) {
  $$payload.out += `<div class="content-container">`;
  Hero($$payload, {});
  $$payload.out += `<!----> `;
  Preamble($$payload, {});
  $$payload.out += `<!----> <section class="projects svelte-1rna3ic"><h2 class="current-projects svelte-1rna3ic">Current Projects</h2> <div class="project-grid svelte-1rna3ic">`;
  ProjectCard($$payload, {
    link: `${stringify(base)}/articles/article-one`,
    imgUrl: `${stringify(base)}/smoke-stack-extended.jpg`,
    cat: "Project",
    title: "Carbon Emissions in Perspective",
    description: "An in-depth analysis of carbon emissions across various industries and their impact on the environment."
  });
  $$payload.out += `<!----> `;
  ProjectCard($$payload, {
    imgUrl: `${stringify(base)}/political-donations.jpg`,
    cat: "Article",
    title: "Political Donations Revealed",
    description: "A comprehensive report uncovering the sources and amounts of political donations in recent elections."
  });
  $$payload.out += `<!----> `;
  ProjectCard($$payload, {
    link: `${stringify(base)}/articles/article-two`,
    imgUrl: `${stringify(base)}/calculator-thumbnail.png`,
    cat: "Project",
    title: "Reverse Carbon Footprint Calculator",
    description: "A detailed investigation into ..."
  });
  $$payload.out += `<!----></div></section></div>`;
}
export {
  _page as default
};
