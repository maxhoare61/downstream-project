<script lang="ts">
  export let title = "";
  export let description = "";
  export let cat = "";
  export const project: string = "";
  export let type = "";
  $: flexDirection = type === "row" ? "row" : "column";
</script>

<div style="flex-direction: {flexDirection};" class="article-card">
  <div class="article-text">
    <div class="tile-type">{cat}</div>
    <h5>{title}</h5>
    <p class="tile-description">{description}</p>
  </div>
</div>

<style>
  .article-card {
    position: relative;
    display: flex;
    justify-content: space-between;
    border-radius: var(--box-corner-radius);
    height: 100%;
    width: auto;
    padding: 1rem;
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
    color: var(--color-bright-orange);
  }

  @media (max-width: 768px) {
    .article-card p {
      font-size: 12px;
    }
  }
</style>
