<script lang="ts">
  export let title = "";
  export let description = "";
  export let cat = "";
  export const project: string = "";
  export let imgUrl = ""; 
  export let type = "";
  export let link = "";
  $: flexDirection = type === "row" ? "row" : "column";
</script>

<a href={link} class="article-card-link">
  <div
    style="flex-direction: {flexDirection};"
    class="article-card"
  >
    <div class="article-display" style="background-image: url({imgUrl});"></div>
    <div class="article-text">
      <div class="tile-type">{cat}</div>
      <h5>{title}</h5>
      <p class="tile-description">{description}</p>
    </div>
  </div>
</a>

<style>
  .article-card {
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-radius: var(--box-corner-radius);
    width: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  .article-display {
    position: relative;
    display: flex;
    background-size: cover; /* Ensures the image covers the entire div */
    background-position: top; /* Centers the image in the div */
    border-radius: calc(var(--box-corner-radius) / 1.5);
    min-height: clamp(180px, 16vw, 200px); /* Dynamic height */
    min-width: auto; 
    flex-grow: 1;
    gap: clamp(1rem, 2vw, 2rem); 
  }

  @media (max-width: 768px) {
    .article-display {
        flex-direction: column; /* Stack items vertically */
        min-height: clamp(180px, 40vw, 240px); /* Reduce size further */
        min-width: auto; /* Ensure it adapts to screen width */
        gap: 1rem; /* Reduce spacing */
    }
    .article-card p {
      font-size: 12px;
    }
  }

  .article-text {
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    max-width: 735px;
    gap: 0.5rem;
    justify-content: center;
  }

  .article-text h5 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .article-card p {
    line-height: auto;
    text-align: left;
  }

  .tile-type {
    color: var(--accent-primary);
  }
</style>
