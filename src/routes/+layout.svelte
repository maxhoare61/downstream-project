<!-- src/routes/+layout.svelte -->
<script>
  import "$lib/styles/tokens.css";
  import "$lib/styles/global.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<slot></slot>
<Footer />
