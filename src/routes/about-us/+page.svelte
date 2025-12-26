<script>
	import WhatWeDo from "$lib/components/WhatWeDo.svelte";
	import { base } from "$app/paths";
</script>

<div class="content-container">
	<h1 class="title">About Us</h1>
	<div class="top-section">
		<div class="paragraph-2">
			<p>
				Downstream Project is an independent research platform focused
				on transforming messy, fragmented public data into clear,
				coherent narratives. Our mission is to help the public use data
				to make informed decisions on issues they care about.
			</p>
			<p>
				Governments and public institutions publish vast amounts of data
				to promote transparency and accountability. In theory, this data
				should help citizens, businesses, and policymakers make better
				decisions. In practice, this is not always the case. At
				Downstream Project, we noticed this recurring problem through
				our time at university, where dishevelled government databases
				would consistently stall research.
			</p>
			<p>
				Critical government data is scattered across PDFs, spreadsheets,
				and fragmented databases. Important context is buried in
				technical language. Key relationships are obscured by large
				datasets which require time and expertise to analyse. While disclosure
				continues to improve, this is only part of the information
				transparency equation. We began this project to see if
				we could help public audiences directly access insights
				from from raw government data, downstream.
			</p>
			<p>
				Our work begins with handling and analysing data, but extends to
				organising, interpreting, and contextualising findings to create
				truly accessible insights. We believe data only becomes useful
				when people can see how it connects to real outcomes. That means
				going beyond charts and tables. It means explaining what the
				numbers imply for policy, institutions, and everyday decisions.
				It also means framing analysis within the economic, political,
				and cultural contexts that give it meaning. We dissect complex
				datasets, identify what matters, and present findings in a way
				that invites exploration.
			</p>
		</div>
	</div>
</div>

<style>
	.title {
		border-bottom: solid 1px var(--color-border);
	}

	.content-container {
		gap: 2rem;
	}

	.top-section {
		display: flex;
		padding: 2rem 0;
	}

	.paragraph-2 p {
		margin: 1rem 0;
		width: 50%;
	}
</style>
