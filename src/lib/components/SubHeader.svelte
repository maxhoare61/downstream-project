<script>
    export let links = [];
</script>

<h1>Explore Our Projects</h1>
<div class="sub-header-container">
    <nav>
        <a class="all" href="#">All</a>
        {#each links as link}
          <a href={link.href}>{link.text}</a>
        {/each}
        <a class="filter" href="#">Filter</a>
      </nav>
</div>

<style>

h1{
    margin-top: 8rem;
}
.sub-header-container{
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 1rem 0;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
}

.sub-header-container nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 35vw;
}

.sub-header-container nav a {
    margin-left: 1rem;
    justify-content: space-between;
}

.all{
    color: var(--accent-primary);
}

.filter{
    font-weight: bold;
}

</style>

