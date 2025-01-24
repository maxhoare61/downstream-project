import { d as stringify, e as slot } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
import "clsx";
function Header($$payload) {
  $$payload.out += `<header class="header svelte-dw5uff"><div class="logo svelte-dw5uff"><a${attr("href", `${stringify(base)}/`)} class="logo-link"><img src="/mocklogo1.png" alt="logo" class="logo-image svelte-dw5uff"> <div>Downstream<br>Project</div></a></div> <nav class="svelte-dw5uff"><a class="btn-1 svelte-dw5uff"${attr("href", `${stringify(base)}/explore`)}>explore</a> <a class="btn-1 svelte-dw5uff"${attr("href", `${stringify(base)}/about-us`)}>about us</a></nav></header>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="footer svelte-umydcw"><div class="logo"><img src="/mocklogo1.png" alt="logo" class="logo-image"> <div>Downstream<br>Project</div></div> <div class="footer-text svelte-umydcw"><p>2025 Downstream Project</p></div></footer>`;
}
function _layout($$payload, $$props) {
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
