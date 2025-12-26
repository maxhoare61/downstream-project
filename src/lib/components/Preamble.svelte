<script lang="ts">
  export let heading1 = "The Problem";
  export let text1 = "The government and public institutions publish data to ensure transparency and foster good decision-making in society. Yet, such data is often scattered across PDFs, spreadsheets, and fragmented databases. While data disclosure is a good first step, access alone does not promote understanding.";
  export let heading2 = "Our Mission";
  export let text2 = "Downstream Project is an independent research platform focused on transforming messy, fragmented public data into clear, coherent narratives. We want to make it as easy as possible to gain insight on the issues that matter to you.";
  export let heading3 = "Our Approach";
  export let text3 = "Building something coherent from messy data begins with analysis, but it doesn’t end there. We go beyond the numbers, leveraging deep expertise to explain their practical significance. By presenting findings in the economic, political, and cultural contexts that give them their importance, we aim to promote understanding that goes beyond theory, supporting decision-making for everyday people.";
  
  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  let lottieContainer: HTMLElement;
  let animation: any = null;

  onMount(async () => {
    if (typeof window !== 'undefined') {
      const lottie = (await import('lottie-web')).default;
      animation = lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: './preamble_lottie.json'
      });

      animation.setSpeed(0.5); // Change the speed to 1.5x
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: ".section-right",
        scrub: true,

        onUpdate: function(self) {
          const progress = self.progress;
          const adjprogress = Math.min(Math.max((progress - 0.28)/0.46,0),1);
          const frame = Math.floor(adjprogress * animation.totalFrames);
          animation.goToAndStop(frame, true);
          //console.log(`Progress: ${progress}, Current Frame: ${frame}`);
        },
      });

    }
  });
</script>

<section class="section">
  <div class="section-left">
    <div class="section-left-child">
      <h2>{heading1}</h2>
      <div class="p">{text1}</div>
    </div>
    <div class="section-left-child">
      <h2>{heading2}</h2>
      <div class="p">{text2}</div>
    </div>
    <div class="section-left-child">
      <h2>{heading3}</h2>
      <div class="p">{text3}</div>
    </div>
  </div>
  <div class="section-right">
    <div class="backdrop-right">
    <div class="lottie-container" bind:this={lottieContainer}></div>
  </div>
  </div>
</section>

<style>
  .section{
    width: 100%;
    height: 200vh;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
    justify-content: space-around;
    gap: clamp(1rem, 2.5vw, 2rem);
    padding: 0 7%;
  }

  .section-left {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    height: 100%;
    text-align: left;
  }

  .section-left-child {
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(100% / 3);
    min-height: 0;
    align-items: flex-start;
    justify-content: center;
    gap: clamp(1rem, 2.5vw, 1.5rem);
    text-align: left;
    max-width: clamp(136px, 35vw, 602px);
  }

  .section-right {
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    flex: 1;
    min-width: 0;
    flex-direction: row;
    flex: 1;
    min-width: 0;
    padding-top: 3rem;
  }

  .backdrop-right {
    top: calc((100vh - 41vw) / 2);
    position: sticky;
    background-color: var(--color-white);
    border-radius: 2rem;
    width: clamp(180px, 31.25vw, 602px);
    height: clamp(180px, 31.25vw, 602px);
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: clamp(10px, 1.25vw, 2rem);
    margin: 0 auto;
    align-self: center;
  }

  .lottie-container {
    position: sticky;
    top: calc((100vh - 38vw) / 2);
    aspect-ratio: 1/1;
    border-radius: 2rem;;
    margin-top: 1vw;
    margin-bottom: 1vw;
    border: none; 
  }
</style>
