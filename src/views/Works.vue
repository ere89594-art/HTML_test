<template>
  <section class="works">
    <div class="works-header">
      <p class="section-label">精选作品</p>
      <h2 class="works-title">WORKS</h2>
    </div>

    <div class="works-grid">
      <div
        v-for="(work, i) in projects"
        :key="work.id"
        class="grid-item"
        :class="{ 'span-2': i === 0 || i === 3 }"
      >
        <WorkCard :work="work" :to="'/works/' + work.id" />
      </div>
    </div>
  </section>
</template>

<script setup>
import WorkCard from '../components/WorkCard.vue'
import { projects } from '../data/projects.js'
</script>

<style scoped>
.works {
  min-height: 100vh;
  padding: 8rem 3rem 6rem;
}

.works-header {
  margin-bottom: 4rem;
}

.section-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.works-title {
  font-size: clamp(3rem, 6vw, 6rem);
  color: transparent;
  -webkit-text-stroke: 1px var(--muted);
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.grid-item.span-2 {
  grid-column: span 2;
}

@media (max-width: 1024px) {
  .works-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .works {
    padding: 6rem 1.25rem 3rem;
  }

  .works-grid {
    grid-template-columns: 1fr;
  }

  .grid-item.span-2 {
    grid-column: span 1;
  }

  .works-header {
    margin-bottom: 2.5rem;
  }
}
</style>
