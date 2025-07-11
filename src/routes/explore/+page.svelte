<script lang="ts">
	import SubHeader from "$lib/components/SubHeader.svelte";
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
		articles: Article[];
	}

	const projects: Project[] = articlesData;
</script>

<div class="content-container">
	<h1 class="page-title">Explore Projects</h1>
	<SubHeader links={[
		{ href: '#', text: 'Emissions in Perspective' }
	]} />
	{#each projects as { project, projectDescription, articles }, i}
		<section class="project-section">
			<div class="project-header">
				<div class="display-text">
					<p class="tile-type">Project</p>
					<h4>{project}</h4>
					<p class="lead project-description">{projectDescription}</p>
				</div>
			</div>
			<div class="article-grid">
				{#each articles as article}
						<ArticleCard
							title={article.title}
							description={article.description}
							cat={article.cat}
							imgUrl="{base}{article.imgUrl}"
							type={article.type}
							link="{base}{article.link}"
							project={article.project}
						/>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	.article-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* Strict two-column layout */
		gap: 3rem;
	}
	.project-section {
		padding-bottom: 4rem;
	}
	.project-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: clamp(100px, 25vh, 600px);
	}
	.display-text {
		display: flex;
		padding-top: 2rem;
		flex-direction: column;
		align-items: left;
		text-align: left;
		min-width: clamp(18rem, 33vw, 25rem);
	}

	.project-section:not(:last-child) {
		border-bottom: 1px solid var(--color-border, #e0e0e0); /* Thin line, fallback color */
	}

	.lead.project-description {
		padding: 0.5rem 0;
		font-family: 'Bai Jamjuree';
		font-size: 1.2rem;
		font-weight: 400;
		line-height: 1.8rem;
	}

	h4 {
		font-weight: 500;
		font-size: 2rem;
		color: var(--color-dark-text);
		line-height: normal;
	}

	.tile-type {
		color: var(--color-blue);
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		.article-grid {
			grid-template-columns: 1fr; /* Stack to one column on mobile */
			gap: 1.5rem;
		}
    }
</style>
