<template>
  <RouterLink :to="'/blog/' + post.id" class="blog-card">
    <span class="card-date">{{ post.date }}</span>
    <h3 class="card-title">{{ post.title }}</h3>
    <p class="card-excerpt">{{ post.excerpt }}</p>
    <div class="card-tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  post: { type: Object, required: true },
})
</script>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: var(--surface);
  border-left: 2px solid var(--border);
  transition: border-color 0.3s, background 0.3s;
  cursor: none;
}

.blog-card:hover {
  border-left-color: var(--accent);
  background: var(--surface2);
}

.card-date {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.75rem;
  color: var(--text);
}

.card-excerpt {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  color: var(--accent);
  background: var(--accent-dim);
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
}
</style>
