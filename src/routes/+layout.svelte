<!-- src/routes/+layout.svelte -->
<script>
  import { base } from '$app/paths';
  //import "/styles/tokens.css";
  //import "/styles/global.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="{base}/styles/tokens.css" />
  <link rel="stylesheet" href="{base}/styles/global.css" />
</svelte:head>

<Header />
<slot></slot>
<Footer />
