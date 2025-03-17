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
      <div class="tile-type">{cat}</div>
      <h5>{title}</h5>
      <p class="tile-description">{description}</p>
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
    width: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  .project-display {
    position: relative;
    display: flex;
    background-size: cover; /* Ensures the image covers the entire div */
    background-position: center; /* Centers the image in the div */
    border-radius: calc(var(--box-corner-radius) / 1.5);
    min-height: clamp(200px, 30vw, 294px); /* Dynamic height */
    min-width: auto; 
    flex-grow: 1;
    gap: clamp(1rem, 2vw, 2rem); 
  }

  @media (max-width: 768px) {
    .project-display {
        flex-direction: column; /* Stack items vertically */
        min-height: clamp(180px, 40vw, 240px); /* Reduce size further */
        min-width: auto; /* Ensure it adapts to screen width */
        gap: 1rem; /* Reduce spacing */
    }
  }

  .project-text {
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    max-width: 735px;
    gap: 0.5rem;
    justify-content: space-around;
  }

  .project-text h5 {
    display: flex;
    flex-direction: column;
    height: 4rem;
    justify-content: flex-end;
  }

  .project-card p {
    line-height: 1.75;
    text-align: justify;
  }

  @media (max-width: 768px) {
    .project-card p {
      font-size: 12px;
    }
  }
</style>
