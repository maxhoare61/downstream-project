<script>
  export let title = "";
  export let description = "";
  export let cat = "";
  export let col = "";
  export let type = "";
  export let link = "";
  $: flexDirection = type === "row" ? "row" : "column";
</script>

<a href={link} class="project-card-link">
  <div
    style="--color: {col}; flex-direction: {flexDirection};"
    class="project-card"
  >
    <div class="project-display"></div>
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
    min-height: 35vw;
    justify-content: space-between;
  }

  .project-display {
    position: relative;
    display: flex;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: var(--color); /* Default background color */
    border-radius: 16px;
    min-height: 20vw;
    min-width: 20vw;
    max-width: 50vw;
    flex-grow: 1;
    gap: 2rem;
    transition: opacity 0.5s ease-out;
  }

  .project-text {
    padding: 1rem;
    color: var(--color-dark-text);
    min-height: 15vw;
    max-width: 50vw;
  }

  .project-card h4 {
    font-size: 2vw;
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
