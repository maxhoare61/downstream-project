import { d as stringify, h as head, e as slot } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function Header($$payload) {
  $$payload.out += `<header class="header svelte-bw6erp"><div class="logo svelte-bw6erp"><a${attr("href", `${stringify(base)}/`)} class="logo-link"><img${attr("src", `${stringify(base)}/mocklogo1.png`)} alt="logo" class="logo-image svelte-bw6erp"> <div>Downstream<br>Project</div></a></div> <nav class="svelte-bw6erp"><a class="btn-1 svelte-bw6erp"${attr("href", `${stringify(base)}/explore`)}>explore</a> <a class="btn-1 svelte-bw6erp"${attr("href", `${stringify(base)}/about-us`)}>about us</a></nav></header>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="footer svelte-j6upov"><div class="logo"><img${attr("src", `${stringify(base)}/mocklogo1.png`)} alt="logo" class="logo-image"> <div>Downstream<br>Project</div></div> <div class="footer-text svelte-j6upov"><p>2025 Downstream Project</p></div></footer>`;
}
function _layout($$payload, $$props) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="stylesheet"${attr("href", `${stringify(base)}/styles/tokens.css`)}> <link rel="stylesheet"${attr("href", `${stringify(base)}/styles/global.css`)}>`;
  });
  Header($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
