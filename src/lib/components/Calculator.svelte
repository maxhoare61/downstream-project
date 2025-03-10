<script lang="ts">
    import { base } from "$app/paths";
    import { fade, fly } from "svelte/transition";
    import { isQuestionnaireComplete } from '$lib/stores/store';

    type Answers = {
        [key: number]: string;
    };

    let answers: Answers = {};
    let currentQuestion = 1;
    let q1answer = '';
    const totalQuestions = 6; // Adjust based on the number of questions
    let showQuestionnaire = true;

    function selectAnswer(questionId: number, answer: string) {
        answers[questionId] = answer;

        setTimeout(() => {
            if (currentQuestion < totalQuestions) {
                if (questionId === 1) {
                    switch (answer) {
                        case "Drive":
                            q1answer = 'd'
                            currentQuestion = 1.5;
                            break;
                        case "Motorbike":
                            q1answer = 'mb'
                            currentQuestion = 1.5;
                            break;
                        default:
                            currentQuestion += 1;
                            break;
                    }
                } else if (questionId === 1.5) {
                    switch (answer) {
                        case "Pre-2005":
                        case "2005 - 2014":
                        case "After 2015":
                            if(q1answer === 'd'){
                                currentQuestion = 1.75;
                                break;
                            }else if(q1answer === 'mb'){
                                currentQuestion = 2;
                                break;
                            }
                        default:
                            currentQuestion = 2;
                            break;
                    }
                } else if (questionId === 1.75) {
                    currentQuestion = 2;
                } else {
                    currentQuestion += 1; // Move to the next question
                }
            } else {
                isQuestionnaireComplete.set(true);
                showQuestionnaire = false;
            }
        }, 500);
    }

    const questions = [
        {
            id: 1,
            text: "How do you travel to work or school?",
            answers: [
                "Drive",
                "Public Transport",
                "Cycle",
                "Walk",
                "Motorbike",
            ],
        },
        {
            id: 1.5,
            text: "What year model was your vehicle made?",
            answers: ["Pre-2005", "2005 - 2014", "After 2015"],
        },
        {
            id: 1.75,
            text: "What type of fuel do you put in your vehicle?",
            answers: ["Petrol", "Diesel"],
        },
        {
            id: 2,
            text: "Has your house replaced most of it's appliances, insulation and lightbulbs in the past 15 years?",
            answers: ["Yes", "No"],
        },
        {
            id: 3,
            text: "How many domestic flights do you take in a year?",
            answers: ["0", "1", "2", "3", "4", "5+"],
        },
        {
            id: 4,
            text: "How many international flights do you take in a year?",
            answers: ["0", "1", "2", "3", "4", "5+"],
        },
        {
            id: 5,
            text: "What is your usual diet?",
            answers: ["Omnivore", "Pescatarian", "Vegetarian", "Vegan"],
        },
        {
            id: 6,
            text: "How do you like being asked all these questions?",
            answers: ["I like it", "I'm ok with it", "Not at all"],
        },
        {
            id: 7,
            text: "",
            answers: [],
        },
    ];
</script>

<section id="calc-section">
    <div class="form-panel">
        <div class="questions-container">
            {#if showQuestionnaire}
            <p out:fade={{duration: 500 }} class="preamble">Choose the option below that suits you best</p>
                {#each questions as question}
                    {#if question.id === currentQuestion}
                        <div class="question">
                            <p
                                in:fly={{ y: 50, duration: 500 }}
                                out:fly={{ y: -50, duration: 500 }}
                            >
                                {question.text}
                        </p>
                        </div>
                        <div
                            class="buttons"
                            in:fade={{ duration: 300 }}
                            out:fade={{ duration: 300 }}
                        >
                            {#each question.answers as answer}
                                <button
                                    on:click={() => selectAnswer(question.id, answer)}
                                    class:selected={answers[question.id] === answer}
                                >
                                    {answer}
                                </button>
                            {/each}
                        </div>
                    {/if}
                {/each}
            {:else}
                <div class="conclusion-text" in:fade={{duration: 500 }}>
                    <p>Thank you</p>
                    <p class="lead">Keep scrolling to learn about your climate impact.</p>
                    <!-- Additional paragraphs or dynamic content based on answers can go here -->
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    #calc-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 700px;
    }

    .form-panel{
        width: 1080px;
        height: 450px;
        border-radius: 2rem;
        border: 1px solid #ffffff;
    }

    .questions-container {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: left;
        justify-content: center;

        font-size: 2rem;
        font-family: 'Bai Jamjuree';
    }

    .preamble{
        position: relative;
        font-weight: 200;
        border-bottom: solid 1px white;
        padding: 2rem;
    }

    .question {
        position: absolute;
        height: 128px;
        width: 100%;
        display: flex;
        align-items: center;
        font-weight: 400;
        bottom: -10rem;
        margin-left: 2.5rem;
    }

    .conclusion-text {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 450px;
        width: 1080px;
        top: 0rem;
        gap: 2rem;
    }

    .buttons {
        position: absolute;
        top: 16rem;
        display: flex;
        height: 107px;
        width: 100%;
        padding: 2rem;
        font-size: 1.5rem;
        font-weight: 300;
    }

    .buttons button {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        color: white;
        height: 80px;
        border: 1px solid #ffffff;
        padding: 0;
        flex-basis: 0;
        flex-grow: 1;
        transition:
            flex-grow 0.6s ease,
            background-color 0.05s;
        white-space: nowrap;
    }

    .buttons button:hover {
        flex-grow: 1.1;
    }

    .buttons button.selected {
        background-color: grey;
        flex-grow: 1;
    }

    .buttons button:last-child {
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .buttons button:first-child {
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
</style>
