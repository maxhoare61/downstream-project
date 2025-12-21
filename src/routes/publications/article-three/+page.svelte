<script lang="ts">
    import { base } from "$app/paths";
    import Calculator from "$lib/components/Calculator.svelte";
    import AnimatedHeader from "$lib/components/AnimatedHeader3.svelte";
    import isQuestionnaireComplete from "$lib/components/Calculator.svelte";
    import AnswerStore from "$lib/components/Calculator.svelte";
</script>

<section id="hero">
    <div class="animated-header">
        <div class="title t2">
            More data sharing can be a good thing with Open Finance
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
                Dirty Donations is an investigative piece that transforms public
                data on politicians declared interests into a cohesive and
                accessible narrative, revealing the often-financial ties between
                elected officials and powerful interests. This article seeks to
                bridge the gap between complex, fragmented datasets and public
                understanding, shedding light on who funds Australian
                politicians and what that might mean for policy decisions.
            </p>
            <p class="lead">
                Under Australia's Commonwealth Electoral Act 1918, political
                parties and candidates are required to disclose donations above
                a certain threshold. However, loopholes in disclosure laws,
                delays in reporting, and the use of trusts and third-party
                entities can obscure the true influence of money in politics.
                Downstream project has collated these declarations into a
                clearer picture, mapping the flow of funds from donors to
                decision-makers.
            </p>
            <p class="lead">
                The article seeks to present the data as it is, allowing readers
                to draw informed conclusions about the financial relationships
                shaping Australian democracy. By making these financial
                connections more transparent, we invite readers to critically
                assess the role of money in governance and to consider how
                regulatory reform might ensure greater accountability in
                political funding. This article is the first in a series on the
                ties between Australian politics and the fossil fuel industry.
                It is currently a work in progress.
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
        display: flex;
        flex-direction: column;
        font-family: "Work Sans", sans-serif;
        font-weight: 600;
        width: 100%;
        text-align: center;
        top: 30%;
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
