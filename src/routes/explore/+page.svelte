<script>
	import SubHeader from "$lib/components/SubHeader.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { base } from "$app/paths";
</script>

<div class="content-container">
	<SubHeader
		links={[
			{ href: "#", text: "Carbon Emissions" }
		]}
	/>

	<section class="Project-Container">
		<div class="project-grid">
			<div class="text-container left">
				<h3>Carbon Emissions in Perspective</h3>
				<p class="tile-type">Project</p>
				<p>
					A project to shed light on how data is often misrepresented
					to paint consumers as the cause of emissions.
				</p>
			</div>
			<ProjectCard
				imgUrl="{base}/smoke-stack-extended.jpg"
				type="column"
				cat="Article"
				title="The Carbon Footprint Story"
				description="In this article we cover the idea of the 'carbon footprint' and how it has shaped the public's perception of climate change."
				link="{base}/articles/article-one"
			/>
		</div>
		<div class="project-grid">
			<ProjectCard
				link="{base}/articles/article-two"
				imgUrl="{base}/calculator-thumbnail.png"
				cat="Article"
				title="Reverse Carbon Footprint Calculator"
				description="This article introduces the Reverse Carbon Calculator, a tool to help contextualize individual carbon emissions."
			/>
		</div>
	</section>
	<section class="Project-Container">
		<div class="project-grid">
			<div class="text-container left">
				<h3>Political Donations Revealed</h3>
				<p class="tile-type">Project</p>
				<p>
					A project to transform public data on politicians declared interests into a cohesive and
					accessible narrative, revealing the often-financial ties between
					elected officials and powerful interests.
				</p>
			</div>
			<ProjectCard
				imgUrl="{base}/political-donations.jpg"
				type="column"
				cat="Article"
				title="Political Donations Revealed"
				description="This article aims to transform politicians declared interests into a cohesive and
                accessible narrative."
				link="{base}/articles/article-three"
			/>
		</div>
	</section>
</div>

<style>
	.Project-Container {
		padding: 6rem 0rem;
		min-height: 50vh;
		gap: 4rem;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
		align-items: stretch;
		gap: 2rem;
	}

	@media (max-width: 768px) {
		.project-grid {
			grid-template-columns: 1fr; /* Single column */
			grid-template-rows: auto; /* Allow natural row height */
			gap: 1.5rem; /* Adjust spacing */
		}
	}

	.project-grid:not(:last-child) {
		margin-bottom: 2rem;
	}

	.Project-Container:not(:last-child) {
		border-bottom: 1px solid var(--color-border);
		margin-bottom: 2rem;
	}

	.text-container {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		gap: 0.25rem;
		padding: 3rem;
		background-color: white;
		border-radius: var(--box-corner-radius);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.tile-type {
		padding-bottom: 0.75rem;
		margin-bottom: 0.75rem;
		border-bottom: solid 1px var(--color-border);
	}

	.text-container p {
		max-width: 35vw;
	}

	/*.Project-Container:last-child {
		border-top: 1px solid var(--color-border);
	}*/
</style>
