<script>
  export let heading1 = "The Problem";
  export let text1 = "Public data isn’t always publicly accessible. Key insights from government data are often  scattered across PDFs,  spreadsheets, and fragmented databases. While technically publicly available, understanding it requires expertise, and a lot of time.";
  export let heading2 = "Our Approach";
  export let text2 = "At Downstream, we believe public data should be truly public. We transform dense datasets into clear, interactive visuals and scrollable narratives. We handle the data cleaning, analysis, and visualisations - you explore the insights.";
  export let heading3 = "Our Work";
  export let text3 = "We're starting small but focusing on what matters—making carbon emissions and political donation data accessible to everyone through interactive storytelling. These are the stories we care about, and we believe you should be able to understand them too.";
  

  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  let lottieContainer;
  let animation;
  let playedSegments = new Set();

  onMount(async () => {
    if (typeof window !== 'undefined') {
      const lottie = (await import('lottie-web')).default;
      animation = lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/preamble_lottie.json' 
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
      <div class="lead">{text1}</div>
    </div>
    <div class="section-left-child">
      <h2>{heading2}</h2>
      <div class="lead">{text2}</div>
    </div>
    <div class="section-left-child">
      <h2>{heading3}</h2>
      <div class="lead">{text3}</div>
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
    width: 100%;
    max-height: 300vh;
    min-width: 100%;
    padding-top: 2rem;
    padding-bottom: 1rem;
    gap: 2rem;
  }
  .section-left {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: left;
    justify-content: center;
    text-align: left;
    max-width: 50%;
  }
  .section-left-child {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    min-height: calc(100vh - 2rem);
    align-items: left;
    justify-content: center;
    text-align: left;
  }
  .section-right {
    padding: 3rem 2rem;
    min-width: calc(50vw - 2rem);
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .backdrop-right {
    top: calc((100vh - 41vw) / 2);
    position: sticky;
    background-color: var(--color-white);
    border-radius: 2rem;
    min-width: 41vw;
    max-height: 41vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .lottie-container {
    position: sticky;
    top: calc((100vh - 38vw) / 2);
    width: 38vw;
    height: 38vw;
    margin-top: 1vw;
    margin-bottom: 1vw;
    border: none; 
  }
</style>
