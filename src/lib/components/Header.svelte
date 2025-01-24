<script>
  import { base } from '$app/paths';
</script>

<header class="header">
  <div class="logo">
    <a href="{base}/" class="logo-link">
    <img src="{base}/mocklogo1.png" alt="logo" class="logo-image" />
    <div>Downstream<br>Project</div>
  </a>
  </div>
  <nav>
      <a class="btn-1" href="{base}/explore">explore</a>
      <a class="btn-1" href="{base}/about-us">about us</a>
  </nav>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-border);
    gap: 1rem;
    min-height: var(--spacing-8);
    margin-bottom: 1rem;
    width: 100vw;
  }
  .header nav a {
    margin-left: 1rem;
    justify-content: space-between;
  }
  
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
    }

    .logo {
      justify-content: center;
      width: 100%;
    }

    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      gap: 1rem;
    }

    .btn-1 {
      margin: 0.5rem 0;
      width: 100%;
      text-align: center;
    }

    .header nav a {
    margin-left: 0rem;
    }
  }

  @media (max-width: 768) {
    .header {
      padding: 0.5rem;
    }

    .logo-image {
      height: 36px;
    }

    .btn-1 {
      font-size: 0.875rem;
      padding: 0.5rem;
    }
  }
</style>

