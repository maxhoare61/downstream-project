<script>
  import Hero from "$lib/components/Hero.svelte";
  import Preamble from "$lib/components/Preamble.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
</script>

<div class="content-container">
  <Hero />
  <Preamble />

  <section class="projects">
    <h2 class="current-projects">Current Projects</h2>
    <div class="project-grid">
      <ProjectCard col=var(--accent-secondary) cat="Project" title="Carbon Emissions in Perspective" description="An in-depth analysis of carbon emissions across various industries and their impact on the environment." />
      <ProjectCard col=var(--accent-primary) cat="Article" title="Political Donations Revealed" description="A comprehensive report uncovering the sources and amounts of political donations in recent elections." />
      <ProjectCard col=var(--accent-tertiary) cat="Project" title="Minister and Senator Interests" description="A detailed investigation into the financial interests and holdings of current ministers and senators." />
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
