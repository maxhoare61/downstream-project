<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import Calculator from "$lib/components/Calculator.svelte";
    import AnimatedHeader from "$lib/components/AnimatedHeader2.svelte";
    import { isQuestionnaireComplete } from '$lib/stores/store';
    
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

            //console.log('newleftpos',newLeftPosition)

			//titletext.style.left = newLeftPosition + "px";
		});
	});
</script>

<section id="hero">
    <div class="title t2">Reverse <br> Carbon <br> Footprint <br> Calculator</div>
    <AnimatedHeader/>
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

</section>

<style>

    #hero{
        position: relative;
        height: 100vh;
    }

    .title{
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

    .t2{
        color: white;
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
    #balloon{
        height: 100vh;
        width: 100%;
        background-size: cover; 
    }
</style>