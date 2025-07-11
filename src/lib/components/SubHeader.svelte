<script lang="ts">
    interface Link {
    href: string;
    text: string;
    }
    export let links: Link[] = [];
    import { base } from '$app/paths';
</script>

<div class="sub-header-container">
    <nav>
        <a class="all" href="{base}/">All</a>
        {#each links as link}
          <a href={link.href}>{link.text}</a>
        {/each}
      </nav>
</div>

<style>
.sub-header-container{
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
    align-items: center;
    min-width: 75%;
    text-align: center;
    line-height: 1.25;
}

nav a:hover {
    font-weight: 500;
}

.all{
    color: var(--accent-primary);
}

.all:hover {
    font-weight: 500;
}
</style>

