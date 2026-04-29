<template>
  <section class="contact">
    <div class="contact-inner">
      <p class="section-label">联系我</p>
      <h2 class="contact-title">
        LET'S<br />
        <span class="outline">TALK</span>
      </h2>
      <p class="contact-sub">有项目想聊？或者只是打个招呼也好。</p>

      <a href="mailto:your@email.com" class="email-link">
        your@email.com
        <span class="email-arrow">↗</span>
      </a>

      <div class="socials">
        <a href="#" class="social-item">Behance</a>
        <span class="divider">·</span>
        <a href="#" class="social-item">Instagram</a>
        <span class="divider">·</span>
        <a href="#" class="social-item">Dribbble</a>
        <span class="divider">·</span>
        <a href="#" class="social-item">LinkedIn</a>
      </div>
    </div>

    <div class="contact-footer">
      <span>© 2024 Your Name. All rights reserved.</span>
      <span>Made with Vue 3</span>
    </div>
  </section>
</template>

<style scoped>
.contact {
  min-height: 100vh;
  padding: 8rem 3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.section-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.contact-title {
  font-size: clamp(4rem, 10vw, 10rem);
  line-height: 0.9;
  margin-bottom: 2rem;
}

.contact-title .outline {
  -webkit-text-stroke: 2px var(--text);
  color: transparent;
}

.contact-sub {
  font-size: 1rem;
  color: var(--muted);
  margin-bottom: 3rem;
}

.email-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 3vw, 2.5rem);
  font-weight: 600;
  color: var(--text);
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
  transition: color 0.2s, border-color 0.2s;
  margin-bottom: 3rem;
}

.email-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.email-arrow {
  font-size: 0.7em;
  transition: transform 0.2s;
}

.email-link:hover .email-arrow {
  transform: translate(4px, -4px);
}

.socials {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-item {
  font-size: 0.85rem;
  color: var(--muted);
  letter-spacing: 0.05em;
  transition: color 0.2s;
}

.social-item:hover {
  color: var(--accent);
}

.divider {
  color: var(--border);
}

.contact-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  border-top: 1px solid var(--border);
  font-size: 0.75rem;
  color: var(--muted);
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .contact {
    padding: 6rem 1.25rem 2rem;
  }

  .contact-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
