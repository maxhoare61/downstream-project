<script lang="ts">
    import { base } from "$app/paths";
    import Calculator from "$lib/components/Calculator.svelte";
    import AnimatedHeader from "$lib/components/AnimatedHeader2.svelte";
    import isQuestionnaireComplete from "$lib/components/Calculator.svelte";
    import AnswerStore from "$lib/components/Calculator.svelte";
</script>

<section id="hero">
    <div class="animated-header">
    <div class="title t2">
        Reverse <br /> Carbon <br /> Footprint <br /> Calculator
    </div>
    <div class="ah1">
    <AnimatedHeader />
    </div> 
</div>
</section>
<section id="calculator">
    <div class="content-container">
        <div class="paragraph-1">
            <p class="lead">
                The third article in the Carbon Emissions in Perspective series
                follows on by introducing the Reverse Carbon Calculator. 
                This instalment seeks to recalibrate
                our perspective of personal emissions by providing an
                interactive way to compare personal emissions to those of major
                polluters. 
            </p>
            <p class="lead">
                The Reverse Carbon Calculator is a tool to help contextualize individual carbon
                footprints against the staggering scale of industrial emissions,
                illustrating just how outsized corporate contributions are in
                driving climate change. The goal is not to diminish personal
                responsibility but to counter the prevailing narrative that
                small consumer choices alone will solve the crisis. 
            </p>
            <p class="lead">
                By visualizing emissions on a structural scale, readers can better
                grasp where their efforts—whether in activism, policy advocacy,
                or industry reform—might have the greatest impact. The article
                is a work in progress. As we continue developing this project,
                our aim is to equip readers with not just data, but a renewed
                sense of agency in how they engage with climate solutions.
            </p>
        </div>
        <!-- <Calculator /> -->
    </div>
</section>

<style>
    #hero {
        position: relative;
        max-height: 120vh;
        width: 100%;
        max-width: 100vw;
        background-color: black;
    }

    .lead {
        padding-bottom: 1rem;
    }

    .paragraph-1 {
		position: relative;
		border-top: 1px solid var(--color-border);
		padding: 4rem 0rem;
		margin-top: 2rem;
		width: clamp(320px, 50%, 548px);
	}

    .title {
        position: absolute;
		font-family: "Work Sans", sans-serif;
		font-weight: 600;
		text-align: left;
		font-size: clamp(4rem, 15vw, 10rem);
		line-height: clamp(3.5rem, 12vw, 8rem);
		padding: clamp(10px, 5vw, 48px);
		z-index: 2;
		color: white;
		white-space: nowrap;
    }

    .t2 {
        color: white;
        left: 15px;
    }

    .animated-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

    .ah1 {
		display: absolute;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		flex-grow: 1;
	}

    #calculator {
        padding: 2rem 0rem;
        background-color: black;
        color: white;
    }
</style>
