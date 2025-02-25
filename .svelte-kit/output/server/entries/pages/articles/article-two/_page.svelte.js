import { i as ensure_array_like, d as stringify, c as pop, p as push } from "../../../../chunks/index.js";
import { b as base } from "../../../../chunks/paths.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
function Calculator($$payload) {
  let answers = {};
  let currentQuestion = 1;
  const questions = [
    {
      id: 1,
      text: "How do you travel to work or school?",
      answers: [
        "Drive",
        "Public Transport",
        "Cycle",
        "Walk",
        "Motorbike"
      ]
    },
    {
      id: 1.5,
      text: "What year model was your vehicle made?",
      answers: ["Pre-2005", "2005 - 2014", "After 2015"]
    },
    {
      id: 1.75,
      text: "What type of fuel do you put in your vehicle?",
      answers: ["Petrol", "Diesel"]
    },
    {
      id: 2,
      text: "Has your house replaced most of it's appliances, insulation and lightbulbs in the past 15 years?",
      answers: ["Yes", "No"]
    },
    {
      id: 3,
      text: "How many domestic flights do you take in a year?",
      answers: ["0", "1", "2", "3", "4", "5+"]
    },
    {
      id: 4,
      text: "How many international flights do you take in a year?",
      answers: ["0", "1", "2", "3", "4", "5+"]
    },
    {
      id: 5,
      text: "What is your usual diet?",
      answers: [
        "Omnivore",
        "Pescatarian",
        "Vegetarian",
        "Vegan"
      ]
    },
    {
      id: 6,
      text: "How do you like being asked all these questions?",
      answers: ["I like it", "I'm ok with it", "Not at all"]
    }
  ];
  const each_array = ensure_array_like(questions);
  $$payload.out += `<div class="questions-container svelte-1f6cybq"><h1 class="preamble svelte-1f6cybq">Choose the option below that suits you best</h1> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let question = each_array[$$index_1];
    if (question.id === currentQuestion) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(question.answers);
      $$payload.out += `<div class="question svelte-1f6cybq"><h2 class="svelte-1f6cybq">${escape_html(question.text)}</h2></div> <div class="buttons svelte-1f6cybq"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let answer = each_array_1[$$index];
        $$payload.out += `<button${attr("class", `svelte-1f6cybq ${stringify([
          answers[question.id] === answer ? "selected" : ""
        ].filter(Boolean).join(" "))}`)}>${escape_html(answer)}</button>`;
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<section id="hero"><div class="content-container"><div class="title-container svelte-1smoon"><div class="title t1 svelte-1smoon">Reverse <br> Carbon <br> Footprint <br> Calculator</div> <div class="title t2 svelte-1smoon">Reverse <br> Carbon <br> Footprint <br> Calculator</div></div></div></section> <section id="calculator" class="svelte-1smoon"><div class="content-container"><div class="paragraph p1 svelte-1smoon"><p class="lead">The idea of the Carbon footprint has put our
                individual carbon producing behaviours under a
                microscope. Have you ever wondered how the immense
                focus on personal emissions came to be? Keep
                scrolling to find out.</p> <p class="lead">In 2004, British Petroleum hired public relations
                experts to promote the idea that climate change is
                not the fault of large corporations, but that of
                individuals.</p> <p class="lead">This initiative proved wildly successful, altering
                the way we view climate change in the 21st century.</p></div> `;
  Calculator($$payload);
  $$payload.out += `<!----></div></section> <section id="balloon"><img${attr("src", `${stringify(base)}/blue-sky.jpg`)} alt="Bright blue sky" class="sky-image"> <img${attr("src", `${stringify(base)}/balloon.png`)} alt="Red hot air balloon" class="balloon-png svelte-1smoon"> <div class="ur-impact svelte-1smoon">Your <br> impact:</div></section>`;
  pop();
}
export {
  _page as default
};
