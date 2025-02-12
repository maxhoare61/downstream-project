<script lang="ts">
    interface Link {
    href: string;
    text: string;
    }
    export let links: Link[] = [];
    import { base } from '$app/paths';
</script>

<h1>Explore Our Projects</h1>
<div class="sub-header-container">
    <nav>
        <a class="all" href="{base}/">All</a>
        {#each links as link}
          <a href={link.href}>{link.text}</a>
        {/each}
        <a class="filter" href="{base}/">Filter</a>
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
    display: grid;
    grid-template-columns: repeat(4, 25%); 
    gap: 2rem; /* Space between grid items */
    justify-content: start;
    min-width: 50%;
    text-align: center;
}

nav a:hover {
    text-shadow: 1px 0 0 black;
}

.all{
    color: var(--accent-primary);
}

.all:hover {
    text-shadow: 1px 0 0 var(--accent-primary);
}

.filter{
    font-weight: bold;
}

</style>

