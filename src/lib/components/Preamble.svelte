<script lang="ts">
  export let heading1 = "The Problem";
  export let text1 = "Important data isn’t always publicly accessible. Key data from the stories that matter to us are often scattered across PDFs, spreadsheets, and fragmented databases. While technically publicly available, understanding it requires expertise, and a lot of time.";
  export let heading2 = "Our Approach";
  export let text2 = "At Downstream, we believe data should be truly public. We transform dense datasets into clear, interactive visuals and scrollable narratives. We handle the data cleaning, analysis, and visualisations - you explore the insights.";
  export let heading3 = "Our Work";
  export let text3 = "We're starting small but focusing on what matters—making carbon emissions and political donation data accessible to everyone through interactive storytelling. These are the stories we care about, and we believe you should be able to understand them too.";
  
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
    margin-top: 2rem;
    margin-bottom: 1rem;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 200vh;
    padding-top: 2rem;
    padding-bottom: 1rem;
    gap: clamp(1rem, 2.5vw, 2rem);
  }

  .section-left {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    text-align: left;
  }

  .section-left-child {
    display: flex;
    flex-direction: column;
    min-height: clamp(400px, 60vh, 920px);
    align-items: left;
    gap: clamp(1rem, 2.5vw, 1.5rem);
    text-align: left;
    width: clamp(136px, 42.153vw, 602px);
  }

  .section-left-child:last-child {
    min-height: clamp(200px, 30vh, 920px);
  }

  .section-right {
    padding: clamp(0, 0.83333vw, 2rem);
    display: flex;
    flex-direction: row;
    justify-content: center;
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
