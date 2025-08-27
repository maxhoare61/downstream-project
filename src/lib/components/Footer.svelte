<script>
  import { base } from '$app/paths';
</script>

<footer class="footer">
  <div class="logo">
    <img src="{base}/mocklogo1.png" alt="logo" class="logo-image" />
    <div>Downstream<br>Project</div>
  </div>
  <div class="footer-text">
    <a href="https://www.linkedin.com/company/downstream-project/" target="_blank" rel="noopener">Downstream LinkedIn</a>
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
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--accent-secondary);
  }
  @media (max-width: 768px) {
    .footer-text {
      justify-content: flex-end;
      padding-right: 1rem; /* Optional: add some right padding */
    }
  }
</style>
