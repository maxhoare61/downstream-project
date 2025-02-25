<script lang="ts">
	import { base } from "$app/paths";
	import type { AnimationDirection, TextDocumentData } from "lottie-web";
	import { onMount } from "svelte";
	import Calculator from "$lib/components/Calculator.svelte";

    onMount(() => {
		document.addEventListener("scroll", function () {
			const scrollAmount = window.scrollY;
			const windowWidth = window.innerWidth;
			const heroWidth =
				document.getElementById("hero")?.offsetWidth ?? 0;
			const titletext = document.querySelector(
				".t2",
			) as HTMLElement;
			// Calculate the new bottom position based on the scroll amount
			let newLeftPosition =
                15 - (scrollAmount / windowWidth) * 150; // Maps scroll to percentage movement
			// Limit the rectangle's movement to not go below its initial position
			if (newLeftPosition < -16) {
				newLeftPosition = -16;
			}else if(newLeftPosition > 16){
                newLeftPosition = 16;
            }

            console.log('newleftpos',newLeftPosition)

			titletext.style.left = newLeftPosition + "px";
		});
	});

    let selectedTransport = '';
    let currentQuestion = 1;
    const totalQuestions = 2; // Adjust based on the number of questions

    function selectTransport(transport) {
        selectedTransport = transport;
        if (currentQuestion < totalQuestions) {
            currentQuestion += 1; // Move to the next question
        }
    }
</script>

<section id="hero">
    <div class="content-container">
        <div class="title-container">
            <div class="title t1">Reverse <br> Carbon <br> Footprint <br> Calculator</div>
            <div class="title t2">Reverse <br> Carbon <br> Footprint <br> Calculator</div>
        </div>
    </div>
</section>
<section id="calculator">
    <div class="content-container">
        <div class="paragraph p1">
            <p class="lead">
                The idea of the Carbon footprint has put our
                individual carbon producing behaviours under a
                microscope. Have you ever wondered how the immense
                focus on personal emissions came to be? Keep
                scrolling to find out.
            </p>
            <p class="lead">
                In 2004, British Petroleum hired public relations
                experts to promote the idea that climate change is
                not the fault of large corporations, but that of
                individuals.
            </p>
            <p class="lead">
                This initiative proved wildly successful, altering
                the way we view climate change in the 21st century.
            </p>
        </div>
        <Calculator/>
    </div>
</section>
<section id="balloon">
    <img
		src="{base}/blue-sky.jpg"
		alt="Bright blue sky"
		class="sky-image"
	/>
    <img
		src="{base}/balloon.png"
		alt="Red hot air balloon"
		class="balloon-png"
	/>
    <div class="ur-impact">Your <br> impact:</div>
</section>

<style>

    .title-container{
        min-height: 610px;
    }

    .title{
        position: absolute;
        padding: 3rem 0rem;
		font-family: "Work Sans", sans-serif;
		font-size: 9.375rem;
		font-weight: 600;
		line-height: 8rem;
		overflow: hidden;
		white-space: nowrap;
        mix-blend-mode: difference;
    }

    .t1{
        color: #CCBE6D;
    }

    .t2{
        color: #00339A;
        left: 15px;
    }

    #calculator{
        padding: 2rem 0rem;
        background-color: black;
        color: white;
    }

    .paragraph{
        padding: 4rem 0rem;
        width: 550px;
    }

    .paragraph.p1{
        border-top: 1px solid var(--color-border);
    }

    .ur-impact{
        position: absolute;
        top: 4rem;
        left: 4rem;
        font-family: 'Work Sans';
        font-size: 150px;
        font-weight: 500;
        line-height: 130px;
    }
    .balloon-png{
        position: absolute;
        top: -4rem;
        right: 15%;
        max-height: 90vh;
    }
</style>