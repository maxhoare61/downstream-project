<script lang="ts">
    import { fade, fly } from "svelte/transition";

    let answers = {};
    let currentQuestion = 1;
    let q1answer = '';
    const totalQuestions = 7; // Adjust based on the number of questions

    function selectAnswer(questionId, answer) {
        answers[questionId] = answer;
        setTimeout(() => {
            if (currentQuestion < totalQuestions) {
                if (questionId === 1) {
                    switch (answer) {
                        case "Drive":
                            console.log(
                                "Specific logic for Drive",
                            );
                            q1answer = 'd'
                            currentQuestion = 1.5;
                            break;
                        case "Motorbike":
                            console.log(
                                "Specific logic for Motorbike",
                            );
                            q1answer = 'mb'
                            currentQuestion = 1.5;
                            break;
                        default:
                            console.log("Default case for other answers");
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
                                console.log("skip to q2 cause mb");
                                currentQuestion = 2;
                                break;
                            }
                        default:
                            console.log("Default case");
                            currentQuestion = 2;
                            break;
                    }
                } else if (questionId === 1.75) {
                    currentQuestion = 2;
                } else {
                    currentQuestion += 1; // Move to the next question
                }
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
    ];
</script>

<div class="questions-container">
    <h1 class="preamble">Choose the option below that suits you best</h1>
    {#each questions as question}
        {#if question.id === currentQuestion}
            <div class="question">
                <h2
                    in:fly={{ y: 50, duration: 500 }}
                    out:fly={{ y: -50, duration: 500 }}
                >
                    {question.text}
                </h2>
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
</div>

<style>
    .questions-container {
        margin-top: 8rem;
        display: flex;
        flex-direction: column;
        position: relative;
        border-top: 1px solid #ffffff;
        height: 600px;
    }

    .question {
        position: absolute;
        bottom: 20rem;
    }

    h1 {
        color: #ffffff;
    }

    h2 {
        font-style: normal;
        font-weight: 400;
        color: #ffffff;
    }

    .buttons {
        position: absolute;
        height: 107px;
        bottom: 11rem;
        width: 70rem;
        display: flex;
    }

    .buttons button {
        box-sizing: border-box;
        width: calc(25% - 1px);
        padding: 0rem 1rem;
        height: 80px;
        background: #000000;
        border: 1px solid #ffffff;
        font-family: "Bai Jamjuree", sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
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
</style>
