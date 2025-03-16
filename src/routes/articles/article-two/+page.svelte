<script lang="ts">
    import { base } from "$app/paths";
    import Calculator from "$lib/components/Calculator.svelte";
    import AnimatedHeader from "$lib/components/AnimatedHeader2.svelte";
    import isQuestionnaireComplete from "$lib/components/Calculator.svelte";
    import AnswerStore from "$lib/components/Calculator.svelte";
</script>

<section id="hero">
    <div class="title t2">
        Reverse <br /> Carbon <br /> Footprint <br /> Calculator
    </div>
    <AnimatedHeader />
</section>
<section id="calculator">
    <div class="content-container">
        <div class="paragraph p1">
            <p class="lead">
                The second article in the Carbon Emissions in Perspective series
                follows on from ‘The Carbon Footprint Story’, by introducing the
                Reverse Carbon Calculator. This instalment seeks to recalibrate
                our perspective of personal emissions by providing an
                interactive way to compare personal emissions to those of major
                polluters. 
            </p>
            <p class="lead">
                This tool helps contextualize individual carbon
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
        height: 120vh;
        width: 100%;
        max-width: 100vw;
        background-color: black;
    }

    .lead {
        padding-bottom: 1rem;
    }

    .title {
        position: absolute;
        margin: 3rem 2rem;
        padding: 1rem;
        bottom: 2rem;
        font-family: "Work Sans", sans-serif;
        font-size: 9.375rem;
        font-weight: 600;
        line-height: 8rem;
        overflow: hidden;
        white-space: nowrap;
        z-index: 1;
    }

    .t2 {
        color: white;
        left: 15px;
    }

    #calculator {
        padding: 2rem 0rem;
        background-color: black;
        color: white;
    }

    .paragraph {
        padding: 4rem 0rem;
        width: 550px;
    }

    .paragraph.p1 {
        border-top: 1px solid var(--color-border);
    }
</style>
