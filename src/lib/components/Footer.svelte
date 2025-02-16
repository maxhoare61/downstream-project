<script>
  import { base } from '$app/paths';
</script>

<footer class="footer">
  <div class="logo">
    <img src="{base}/mocklogo1.png" alt="logo" class="logo-image" />
    <div>Downstream<br>Project</div>
  </div>
  <div class="footer-text">
    <p>2025 Downstream Project</p>
  </div>
</footer>

<style>
  .footer {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--color-white);
    border-top: 1px solid var(--color-border);
    min-height: var(--spacing-7);
  }
  .footer-text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-right: 139px;
    color: var(--accent-secondary);
  }
</style>
