<script>
  import Hero from "$lib/components/Hero.svelte";
  import Preamble from "$lib/components/Preamble.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { base } from "$app/paths";
</script>

<div class="river-image overlay"></div>
<img
  src="{base}/carpentaria-karumba-queensland.jpg"
  alt="Scenic winding wiver"
  class="river-image"
/>
<div class="content-container">
  <div class="hero-preamble">
    <Hero />
    <Preamble />
  </div>

  <section class="projects">
    <h2 class="current-projects">Current Projects</h2>
    <div class="project-grid">
      <ProjectCard
        link="{base}/articles/article-one"
        imgUrl="{base}/smoke-stack-extended.jpg"
        cat="Project"
        title="Carbon Emissions in Perspective"
        description="An in-depth analysis of carbon emissions across various industries and their impact on the environment."
      />
      <ProjectCard
        imgUrl="{base}/political-donations.jpg"
        type="column"
        cat="Article"
        title="Political Donations Revealed"
        description="This article aims to transform politicians declared interests into a cohesive and
                accessible narrative."
        link="{base}/articles/article-three"
      />
      <ProjectCard
				link="{base}/articles/article-two"
				imgUrl="{base}/calculator-thumbnail.png"
				cat="Article"
				title="Reverse Carbon Footprint Calculator"
				description="This article introduces the Reverse Carbon Calculator, a tool to help contextualize individual carbon emissions."
			/>
    </div>
  </section>
</div>

<style>
  .current-projects {
    margin-bottom: 2rem;
  }

  .river-image {
    visibility: visible;
    top: 0;
    position: absolute;
    max-height: clamp(520px, 94.99vh, 958px);
    width: 100%;
    z-index: -1;
    opacity: 0.75;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0) 78%
    );
  }

  .projects {
    padding: 2rem 0;
    min-height: 50vh;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
    align-items: stretch;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    .project-grid {
      grid-template-columns: 1fr; /* Single column */
      grid-template-rows: auto; /* Allow natural row height */
      gap: 1.5rem; /* Adjust spacing */
    }
    .hero-preamble {
      margin-top: 2rem;
    }
    .projects {
      padding: 2rem;
    }
    .river-image {
      margin-top: 10rem;
      /*visibility: hidden;*/
    }
  }

  @media (min-width: 1024px) {
    .projects {
      padding: 2rem 3rem;
    }
  }
</style>
