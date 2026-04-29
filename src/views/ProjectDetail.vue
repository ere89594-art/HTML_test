<template>
  <section class="project-detail">
    <template v-if="project">
      <RouterLink to="/works" class="back-link">← 返回作品</RouterLink>

      <div class="hero-image">
        <img :src="project.images[0]" :alt="project.title" />
      </div>

      <div class="project-body">
        <div class="meta">
          <span class="meta-tag">{{ project.tag }}</span>
          <span class="meta-item">{{ project.year }}</span>
          <span class="meta-divider">·</span>
          <span class="meta-item">{{ project.client }}</span>
          <span class="meta-divider">·</span>
          <span class="meta-item">{{ project.role }}</span>
        </div>

        <h1 class="project-title">{{ project.title }}</h1>

        <div class="project-desc">
          <p v-for="(para, i) in descriptionParagraphs" :key="i">{{ para }}</p>
        </div>

        <div class="tech-section">
          <p class="section-label">技术与工具</p>
          <div class="tech-list">
            <span v-for="t in project.tech" :key="t" class="tech-tag">{{ t }}</span>
          </div>
        </div>

        <div v-if="project.link" class="project-link">
          <a :href="project.link" target="_blank" rel="noopener" class="btn-primary">
            查看项目 ↗
          </a>
        </div>

        <div v-if="project.images.length > 1" class="gallery">
          <img
            v-for="(img, i) in project.images.slice(1)"
            :key="i"
            :src="img"
            :alt="project.title + ' - 图片 ' + (i + 2)"
          />
        </div>
      </div>
    </template>

    <template v-else>
      <div class="not-found">
        <h2>项目未找到</h2>
        <RouterLink to="/works">← 返回作品列表</RouterLink>
      </div>
    </template>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))
const descriptionParagraphs = computed(() =>
  project.value ? project.value.fullDescription.split('\n\n').filter(Boolean) : []
)
</script>

<style scoped>
.project-detail {
  min-height: 100vh;
  padding: 8rem 3rem 4rem;
}

.back-link {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--muted);
  letter-spacing: 0.05em;
  transition: color 0.2s;
  margin-bottom: 2rem;
}

.back-link:hover {
  color: var(--accent);
}

.hero-image {
  width: 100%;
  aspect-ratio: 21/9;
  overflow: hidden;
  background: var(--surface2);
  margin-bottom: 3rem;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-body {
  max-width: 820px;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: var(--muted);
}

.meta-tag {
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.7rem;
}

.meta-divider {
  color: var(--border);
}

.project-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.05;
  margin-bottom: 2rem;
}

.project-desc p {
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 1.25rem;
}

.tech-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.section-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-tag {
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: var(--accent);
  background: var(--accent-dim);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
}

.project-link {
  margin-bottom: 3rem;
}

.btn-primary {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: var(--accent);
  color: #0a0a0a;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  transition: opacity 0.2s;
}

.btn-primary:hover {
  opacity: 0.85;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.gallery img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  background: var(--surface2);
  border-radius: 2px;
}

.not-found {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

.not-found h2 {
  font-family: var(--font-display);
  font-size: 2rem;
}

.not-found a {
  color: var(--accent);
}

@media (max-width: 768px) {
  .project-detail {
    padding: 6rem 1.25rem 3rem;
  }

  .hero-image {
    aspect-ratio: 4/3;
  }

  .meta {
    gap: 0.35rem;
    font-size: 0.75rem;
  }

  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>
