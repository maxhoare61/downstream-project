import { S as getContext, T as store_get, V as unsubscribe_stores, Q as pop, W as stringify, O as push, X as head, Y as slot } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import "../../chunks/client.js";
import { a as attr } from "../../chunks/attributes.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<header class="header svelte-bw6erp"><div class="logo svelte-bw6erp"><a${attr("href", `${stringify(base)}/`)} class="logo-link"><img${attr("src", `${stringify(base)}/mocklogo1.png`)} alt="logo" class="logo-image svelte-bw6erp"> <div>Downstream<br>Project</div></a></div> <nav class="svelte-bw6erp">`;
  if (store_get($$store_subs ??= {}, "$page", page).url.pathname !== `${base}/`) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a class="btn-1 svelte-bw6erp"${attr("href", `${stringify(base)}/`)}>Home</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (store_get($$store_subs ??= {}, "$page", page).url.pathname !== `${base}/explore`) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a class="btn-1 svelte-bw6erp"${attr("href", `${stringify(base)}/explore`)}>Explore</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (store_get($$store_subs ??= {}, "$page", page).url.pathname !== `${base}/about-us`) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a class="btn-1 svelte-bw6erp"${attr("href", `${stringify(base)}/about-us`)}>About us</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></nav></header>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload) {
  $$payload.out += `<footer class="footer svelte-1isf7km"><div class="logo"><img${attr("src", `${stringify(base)}/mocklogo1.png`)} alt="logo" class="logo-image"> <div>Downstream<br>Project</div></div> <div class="footer-text svelte-1isf7km"><a href="https://www.linkedin.com/company/downstream-project/" target="_blank" rel="noopener">Downstream LinkedIn</a></div></footer>`;
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
