<script>
  export let subtitle = "because public data deserves public understanding";

  let words = ["stories.", "insights.", "knowledge.", "understanding.", "thoughtful."];
  let currentWordIndex = 0;
  let intervalId;

  // Function to update the word
  function updateWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    document.querySelector(".glow").textContent = words[currentWordIndex];
  }

  // Function to calculate the next interval based on an upside-down quadratic function
  function getNextInterval(t) {
    const a = 0.001; // Coefficient for the quadratic function
    const b = -0.5; // Coefficient for the linear term
    const c = 90; // Initial interval in milliseconds
    return Math.max(a * t * t + b * t + c, 0);
  }

  // Function to start the word update process
  function startUpdatingWords() {
    let t = 0;
    function update() {
      updateWord();
      t += getNextInterval(t);
      if (t < 1500) { // Stop after 1.5 seconds
        intervalId = setTimeout(update, getNextInterval(t));
      }
    }
    update();
  }

  // Start the word update process if in the browser
  if (typeof window !== 'undefined') {
    startUpdatingWords();
  }
</script>

<section class="hero-landing">
  <div class="hero-left">
    <div class="diagram-backdrop"></div>
  </div>
  <div class="hero-right">
    <div class="hero-right-container">
      <div class="hero">Less spreadsheets,<br> more <span class="glow">stories.</span></div>
      <p class="lead">{subtitle}</p>
      <a href="/about-us" class="btn-1">about us</a>
    </div>
  </div>
</section>
<section class="insight-banner">
  <div class="lead"><strong>Downstream</strong> ensures the important insights flow to you</div>
</section>

<style>
  .hero-landing {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: calc(100vh - var(--spacing-7));
    min-width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    .hero-landing {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 1rem;
  }
  }

  .hero-left {
    max-width: 100%;
    justify-content: center;
    align-content: center;
  }
  .diagram-backdrop {
    background-color: var(--color-white);
    width: 41vw;
    height: 41vw;
    border-radius: var(--box-corner-radius)
  }
  .hero-right {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 0rem 0rem;
    min-height: 100%;
    width: 45vw;
  }
  .hero-right-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    max-height: 65%;
    width: 100%;
  }
  .hero-right-container a {
    margin-top: 1rem;
  }
  .hero {
    white-space: normal; /* Allow text to wrap */
    word-wrap: break-word; /* Break long words if necessary */
    font-size: 5vw;
  }
  .glow {
    text-decoration: underline;
    /*text-shadow: 0 0 10px var(--color-green), 0 0 20px var(--color-green), 0 0 30px var(--color-green);*/
  }
  .insight-banner {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    background-color: var(--color-background);
    min-height: calc(100vw / 7);
    text-align: center;
    justify-content: center;
    padding: 1.5rem 2rem;
    border-top: solid 1px var(--color-border);
    border-bottom: solid 1px var(--color-border);
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
</style>
