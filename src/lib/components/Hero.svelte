<script lang="ts">
  import { base } from "$app/paths";
  import InteractiveGraph2 from "./InteractiveGraph.svelte";
  export let subtitle = "Because public data deserves public understanding.";

  let graphOverlay: HTMLButtonElement | null = null;
  let counter = 0;
  let isHiding: boolean;

  function hideInstruct() {
    if (isHiding || counter < 0) return; // Prevent the function from running if it's already in progress
    isHiding = true; // Set the flag to true
    console.log('set ishiding true')
    setTimeout(() => {
    const instructElement = graphOverlay?.querySelector(".instruct");
    const instruct2Element = graphOverlay?.querySelector(".instruct.i2");
    const instruct3Element = graphOverlay?.querySelector(".instruct.i3");
      if (instructElement && instruct2Element && counter == 0) {
        instructElement.classList.remove("show");
        instruct2Element.classList.add("show");
        counter += 1;
      } else if (instruct2Element && instruct3Element && counter == 1) {
        instruct2Element.classList.remove("show");
        instruct3Element.classList.add("show");
        counter += 1;
      } else if (instruct2Element && instruct3Element && counter == 2) {
        instruct3Element.classList.remove("show");
        counter = -1;
      }
      isHiding = false;
      console.log('set ishiding false')
    }, 1500);
  }
</script>

<section class="hero-landing">
  <div class="hero-left">
    <button
      class="graph-overlay"
      bind:this={graphOverlay}
      on:click={hideInstruct}
    >
      <div class="instruct show">
        Use the mouse to interact with the navigation graph.
      </div>
      <div class="instruct i2">Click on a node to reveal sub-nodes.</div>
      <div class="instruct i3">
        Click on a subnode to navigate to that page.
      </div>
      <InteractiveGraph2 />
    </button>
    <div class="diagram-backdrop"></div>
  </div>
  <div class="hero-right">
    <div class="hero-right-container">
      <div class="hero">
        Less ones and <br />zeroes, more 
        <span class="glow">insight.</span>
      </div>
      <p class="lead">{subtitle}</p>
      <a href="{base}/about-us" class="btn-1 inverse">About us</a>
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
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
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

  .instruct {
    position: absolute;
    text-align: center;
    top: 15%;
    width: 100%;
    z-index: 2;
    color: black;
    pointer-events: none;
    transition:
      opacity 1.5s ease-out,
      transform 1.5s ease-out;
    opacity: 0;
  }

  .instruct.show {
    opacity: 0.7;
    transform: translateY(50%);
    background-color: white;
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
