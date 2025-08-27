import { Q as pop, O as push, Z as fallback, _ as bind_props, W as stringify, $ as ensure_array_like } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
import "../../chunks/client.js";
import "d3";
import { e as escape_html } from "../../chunks/escaping.js";
import { A as ArticleCard, a as articlesData } from "../../chunks/articles.js";
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
  $$payload.out += `<section class="hero-landing svelte-meuhoz"><div class="hero-left svelte-meuhoz"><button class="graph-overlay svelte-meuhoz"><div class="instruct show svelte-meuhoz">Use the mouse to interact with the navigation graph.</div> <div class="instruct i2 svelte-meuhoz">Click on a node to reveal sub-nodes.</div> <div class="instruct i3 svelte-meuhoz">Click on a subnode to navigate to that page.</div> `;
  InteractiveGraph($$payload);
  $$payload.out += `<!----></button> <div class="diagram-backdrop svelte-meuhoz"></div></div> <div class="hero-right svelte-meuhoz"><div class="hero-right-container svelte-meuhoz"><div class="hero svelte-meuhoz">Less spreadsheets,<br> more <span class="glow svelte-meuhoz">${escape_html(words[currentWordIndex])}</span></div> <p class="lead">${escape_html(subtitle)}</p> <a${attr("href", `${stringify(base)}/about-us`)} class="btn-1 inverse svelte-meuhoz">About us</a></div></div></section> <section class="insight-banner svelte-meuhoz"><div class="lead"><strong>Downstream</strong> ensures the important insights flow to you</div></section>`;
  bind_props($$props, { subtitle });
}
function Preamble($$payload, $$props) {
  push();
  let heading1 = fallback($$props["heading1"], "The Problem");
  let text1 = fallback($$props["text1"], "Important data isn’t always publicly accessible. Key data from the stories that matter to us are often scattered across PDFs, spreadsheets, and fragmented databases. While technically publicly available, understanding it requires expertise, and a lot of time.");
  let heading2 = fallback($$props["heading2"], "Our Approach");
  let text2 = fallback($$props["text2"], "At Downstream, we believe data should be truly public. We transform dense datasets into clear, interactive visuals and scrollable narratives. We handle the data cleaning, analysis, and visualisations - you explore the insights.");
  let heading3 = fallback($$props["heading3"], "Our Work");
  let text3 = fallback($$props["text3"], "We're starting small but focusing on what matters—making carbon emissions and political donation data accessible to everyone through interactive storytelling. These are the stories we care about, and we believe you should be able to understand them too.");
  $$payload.out += `<section class="section svelte-tfzdcv"><div class="section-left svelte-tfzdcv"><div class="section-left-child svelte-tfzdcv"><h2>${escape_html(heading1)}</h2> <div class="p">${escape_html(text1)}</div></div> <div class="section-left-child svelte-tfzdcv"><h2>${escape_html(heading2)}</h2> <div class="p">${escape_html(text2)}</div></div> <div class="section-left-child svelte-tfzdcv"><h2>${escape_html(heading3)}</h2> <div class="p">${escape_html(text3)}</div></div></div> <div class="section-right svelte-tfzdcv"><div class="backdrop-right svelte-tfzdcv"><div class="lottie-container svelte-tfzdcv"></div></div></div></section>`;
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
  const projects = articlesData;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="content-container"><div class="hero-preamble svelte-1brpf11">`;
  Hero($$payload, {});
  $$payload.out += `<!----> `;
  Preamble($$payload, {});
  $$payload.out += `<!----></div> <section class="project-section svelte-1brpf11"><div class="project-header"><div class="display-text svelte-1brpf11"><h4 class="svelte-1brpf11">More articles</h4></div></div> <div class="article-grid svelte-1brpf11"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let { articles } = each_array[$$index_1];
    const each_array_1 = ensure_array_like(articles);
    $$payload.out += `<!--[-->`;
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
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></section></div>`;
}
export {
  _page as default
};
