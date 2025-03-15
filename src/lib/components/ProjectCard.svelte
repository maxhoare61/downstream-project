<script>
  export let title = "";
  export let description = "";
  export let cat = "";
  export let imgUrl = ""; 
  export let type = "";
  export let link = "";
  $: flexDirection = type === "row" ? "row" : "column";
</script>

<a href={link} class="project-card-link">
  <div
    style="flex-direction: {flexDirection};"
    class="project-card"
  >
    <div class="project-display" style="background-image: url({imgUrl});"></div>
    <div class="project-text">
      <div class="category">{cat}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
</a>

<style>
  .project-card {
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-radius: var(--box-corner-radius);
    height: 100%;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  .project-display {
    position: relative;
    display: flex;
    background-size: cover; /* Ensures the image covers the entire div */
    background-position: center; /* Centers the image in the div */
    border-radius: calc(var(--box-corner-radius) / 1.5);
    min-height: 294px;
    min-width: 294px;
    flex-grow: 1;
    gap: 2rem;
}

  .project-text {
    padding: 1rem;
    color: var(--color-dark-text);
    min-height: 15vw;
    max-width: 735px;
    gap: 0.5rem;
  }

  .project-card h4 {
    font-size: 2rem;
    line-height: 1.15;
    padding-bottom: var(h4-padding-below);
  }

  .project-card p {
    line-height: 1.75;
  }

  .category {
    font-size: var(--highlight-font-size);
    font-weight: var(--highlight-font-weight);
    color: var(--accent-primary);
  }

  @media (max-width: 768px) {
    .project-card p {
      font-size: 12px;
    }
  }
</style>
