<script lang="ts">
  import { base } from "$app/paths";
  import InteractiveGraph2 from "./InteractiveGraph.svelte";
  export let subtitle = "Because public data deserves public understanding.";

  let words = [
    "stories.",
    "insights.",
    "knowledge.",
    "understanding.",
    "thoughtful.",
  ];
  let currentWordIndex = 0;
  let intervalId;

  // Function to update the word
  function updateWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }

  // Function to calculate the next interval based on an upside-down quadratic function
  function getNextInterval(t: number): number {
    const a = 0.001; // Coefficient for the quadratic function
    const b = -0.5; // Coefficient for the linear term
    const c = 90; // Initial interval in milliseconds
    return Math.max(a * t * t + b * t + c, 0);
  }

  // Function to start the word update process
  function startUpdatingWords() {
    let t = 0;
    function update() {
      updateWord();
      t += getNextInterval(t);
      if (t < 1500) {
        // Stop after 1.5 seconds
        intervalId = setTimeout(update, getNextInterval(t));
      }
    }
    update();
  }

  // Start the word update process if in the browser
  if (typeof window !== "undefined") {
    startUpdatingWords();
  }

  let graphOverlay: HTMLButtonElement | null = null;

  function hideInstruct() {
        const instructElement = graphOverlay?.querySelector(".instruct");
        if (instructElement) {
            instructElement.classList.remove("show");
        }
  }

</script>

<section class="hero-landing">
  <div class="hero-left">
    <button class="graph-overlay" bind:this={graphOverlay} on:click={hideInstruct}>
      <div class="instruct show">Use the mouse to interact with the navigation graph. <br> Click on a node to reveal it's sub-nodes.</div>
      <InteractiveGraph2 />
    </button>
    <div class="diagram-backdrop"></div>
  </div>
  <div class="hero-right">
    <div class="hero-right-container">
      <div class="hero">
        Less spreadsheets,<br /> more
        <span class="glow">{words[currentWordIndex]}</span>
      </div>
      <p class="lead">{subtitle}</p>
      <a href="{base}/about-us" class="btn-1">About us</a>
    </div>
  </div>
</section>
<section class="insight-banner">
  <div class="lead">
    <strong>Downstream</strong> ensures the important insights flow to you
  </div>
</section>

<style>
  .hero-landing {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    gap: 2rem; /* Space between columns */
    align-items: center; 
    justify-content: center;
    width: 100%;
    min-height: clamp(520px, 80vh, 958px);
  }

  /* Stack the layout in portrait mode (mobile screens) */
  @media (max-width: 768px) {
    .hero-landing {
      grid-template-columns: 1fr; /* Single column layout */
      grid-template-rows: auto auto; /* Stack top to bottom */
      gap: 1rem;
      height: clamp(360px, 18.229vw, 600px);
    }
  }

  .hero-left {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .diagram-backdrop {
    position: relative;
    background-color: #ffffff;
    width: clamp(348px, 33.25vw, 602px);
    aspect-ratio: 1/1;
    height: auto;
    border-radius: var(--box-corner-radius);
    overflow: hidden;
  }

  .graph-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-items: center;
    width: clamp(348px, 31.25vw, 602px);
    aspect-ratio: 1/1;
    height: clamp(348px, 31.25vw, 602px);
    z-index: 1;
    border: none;
    border-radius: var(--box-corner-radius);
  }

  .instruct{
    position: absolute;
    text-align: center;
    top: 10%;
    width: 100%;
    z-index: 2;
    color: grey;
    pointer-events: none;
    transition: opacity 1s ease-out, transform 1s ease-out;
    opacity: 0;
  }


  .instruct.show{
    opacity: 1;
    transform: translateY(60%);
  }

  .hero-right {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 0rem 0rem;
    overflow: hidden;
  }
  .hero-right-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    min-height: clamp(200px, 18.229vw, 600px);
    width: 100%;
  }

  .hero-right-container a {
    margin-top: 1rem;
  }
  .hero {
    white-space: nowrap; /* Allow text to wrap */
    font-size: clamp(38px, 4vw, 73.5px);
  }
  .glow {
    text-decoration: underline;
    /*text-shadow: 0 0 10px var(--color-green), 0 0 20px var(--color-green), 0 0 30px var(--color-green);*/
  }
  .insight-banner {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    background-color: var(--color-background);
    min-height: calc(100vw / 7);
    text-align: center;
    justify-content: center;
    padding: 1.5rem 2rem;
    border-top: solid 1px var(--color-border);
    border-bottom: solid 1px var(--color-border);
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
</style>
