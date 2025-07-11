<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import Preamble from "$lib/components/Preamble.svelte";
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  import { base } from "$app/paths";
  import articlesData from "$lib/data/articles.json";

  // Define types for TypeScript
  interface Article {
    title: string;
    description: string;
    cat: string;
    project: string;
    imgUrl: string;
    type: string;
    link: string;
  }

  interface Project {
    project: string;
    projectDescription: string;
    projectLink: string;
    imgUrl: string;
    articles: Article[];
  }

  const projects: Project[] = articlesData;
</script>

<div class="content-container">
  <div class="hero-preamble">
    <Hero />
    <Preamble />
  </div>
  <section class="project-section">
    <div class="project-header">
      <div class="display-text">
        <h4>Current Projects</h4>
      </div>
    </div>
    <div class="article-grid">
      {#each projects as { project, projectDescription, projectLink, imgUrl }}
        <ArticleCard
          title={project}
          description={projectDescription}
          cat="Project"
          imgUrl={`${base}${imgUrl}`}
          type="column"
          link={projectLink}
          {project}
        />
      {/each}
    </div>
  </section>
</div>

<style>
  .display-text {
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
    align-items: left;
    text-align: left;
    min-width: clamp(18rem, 25vw, 10rem);
  }

  h4 {
    font-weight: 500;
    font-size: 2rem;
    color: var(--color-dark-text);
    line-height: normal;
    padding: 2rem 0;
  }

  .article-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Strict two-column layout */
    gap: 3rem;
  }

  .project-section {
    padding-bottom: 4rem;
  }

  @media (max-width: 768px) {
    .article-grid {
      grid-template-columns: 1fr; /* Stack to one column on mobile */
      gap: 1.5rem;
    }
    .hero-preamble {
      margin-top: 2rem;
    }
  }
</style>
