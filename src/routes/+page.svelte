<script>
  import Hero from "$lib/components/Hero.svelte";
  import Preamble from "$lib/components/Preamble.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { base } from '$app/paths';
</script>

<div class="content-container">
  <Hero />
  <Preamble />

  <section class="projects">
    <h2 class="current-projects">Current Projects</h2>
    <div class="project-grid">
      <ProjectCard link="{base}/articles/article-one" imgUrl="{base}/smoke-stack-extended.jpg" cat="Project" title="Carbon Emissions in Perspective" description="An in-depth analysis of carbon emissions across various industries and their impact on the environment." />
      <ProjectCard imgUrl="{base}/political-donations.jpg" cat="Article" title="Political Donations Revealed" description="A comprehensive report uncovering the sources and amounts of political donations in recent elections." />
      <ProjectCard link="{base}/articles/article-two" imgUrl="{base}/calculator-thumbnail.png" cat="Project" title="Reverse Carbon Footprint Calculator" description="A detailed investigation into ..." />
    </div>
  </section>
</div>

<style>

  .current-projects {
    margin-bottom: 2rem;
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

  @media (min-width: 768px) {
    .content-container {
      margin: 0 2rem;
    }

    .projects {
      padding: 2rem;
    }
  }

  @media (min-width: 1024px) {
    .content-container {
      margin: 0 3rem;
    }

    .projects {
      padding: 2rem 3rem;
    }
  }
</style>
