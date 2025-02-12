<script>
	import SubHeader from '$lib/components/SubHeader.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { base } from '$app/paths';
</script>

<div class="content-container">
	<SubHeader
		links={[
			{ href: "#", text: 'Carbon Emissions' },
			{ href: "#", text: 'Political Donations' }
		]}
	/>

	<section class="Project-Container">
		<div class="project-grid">
      <div class="text-container left">
        <h4>Carbon Emissions in Perspective</h4>
        <p>A project to shed light on how data is often misrepresented to paint consumers as the cause of emissions.</p>
      </div>
      <ProjectCard
	  			imgUrl="{base}/emissions-in-perspective.jpg"
				type="column"
				cat="Project"
				title="The Carbon Footprint Story"
				description="In this article we cover why carbon footprint exists and how it has been used to shape the public's perception of climate change."
				link="{base}/articles/article-one"
			/>
		</div>
		<div class="project-grid">
			<ProjectCard
				cat="Project"
				title="Carbon Emissions in Perspective"
				description="An in-depth analysis of carbon emissions across various industries and their impact on the environment."
			/>
			<ProjectCard
				imgUrl="{base}/political-donations.jpg"
				cat="Article"
				title="Un-masking Political Donations"
				description="A comprehensive report uncovering the sources and amounts of political donations in recent elections."
			/>
			<ProjectCard
				cat="Project"
				title="Miniwster and Senator Interests"
				description="A detailed investigation into the financial interests and holdings of current ministers and senators."
			/>
		</div>
	</section>
	<section class="Project-Container">
		<div class="project-grid">
      <ProjectCard
				col="var(--accent-primary)"
				type="column"
				cat="Project"
				title="Carbon Emissions in Perspective"
				description="An in-depth analysis of carbon emissions across various industries and their impact on the environment."
			/>
		<div class="text-container right">
			<h4>Political Donations Revealed</h4>
			<p>A collection of articles, interactive stories and data on carbon emissions and the notion of our ‘carbon footprint’.</p>
		</div>
		</div>
		<div class="project-grid">
			<ProjectCard
				col="var(--accent-primary)"
				cat="Project"
				title="Carbon Emissions in Perspective"
				description="An in-depth analysis of carbon emissions across various industries and their impact on the environment."
			/>
			<ProjectCard
				col="var(--accent-primary)"
				cat="Article"
				title="Political Donations Revealed"
				description="A comprehensive report uncovering the sources and amounts of political donations in recent elections."
			/>
			<ProjectCard
				col="var(--accent-primary)"
				cat="Project"
				title="Minister and Senator Interests"
				description="A detailed investigation into the financial interests and holdings of current ministers and senators."
			/>
		</div>
	</section>
</div>

<style>
	.Project-Container {
		padding: 6rem 0rem;
		min-height: 50vh;
		gap: 2rem;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
		gap: 4rem;
	}

  .project-grid:not(:last-child) {
    margin-bottom: 2rem;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
	padding: 1rem;
	margin-bottom: 4rem;
  }

  .left {
	border-right: 1px solid var(--color-border);
	padding-right: 3rem;
  }

  .right {
	border-left: 1px solid var(--color-border);
	padding-left: 3rem;
  }

  .text-container p {
    max-width: 30vw;
  }

  .Project-Container:last-child {
	border-top: 1px solid var(--color-border);
  }

</style>
