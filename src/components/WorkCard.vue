<template>
  <component
    :is="to ? 'RouterLink' : 'div'"
    :to="to"
    class="work-card"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="card-img">
      <img :src="work.image" :alt="work.title" />
      <div class="card-overlay" :class="{ visible: hovered }">
        <span class="card-tag">{{ work.tag }}</span>
        <p class="card-desc">{{ work.desc }}</p>
        <span class="card-arrow">→</span>
      </div>
    </div>
    <div class="card-footer">
      <h3>{{ work.title }}</h3>
      <span class="card-year">{{ work.year }}</span>
    </div>
  </component>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  work: {
    type: Object,
    required: true,
  },
  to: {
    type: [String, Object],
    default: null,
  },
})

const hovered = ref(false)
</script>

<style scoped>
.work-card {
  cursor: none;
}

.card-img {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
  background: var(--surface2);
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.work-card:hover .card-img img {
  transform: scale(1.06);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-overlay.visible {
  opacity: 1;
}

.card-tag {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.85rem;
  color: var(--text);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.card-arrow {
  font-size: 1.2rem;
  color: var(--accent);
}

.card-footer {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0.75rem 0 0;
}

.card-footer h3 {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.card-year {
  font-size: 0.75rem;
  color: var(--muted);
}
</style>
