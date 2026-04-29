<template>
  <section class="blog-post">
    <template v-if="post">
      <RouterLink to="/blog" class="back-link">← 返回博客</RouterLink>

      <header class="post-header">
        <span class="post-date">{{ post.date }}</span>
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </header>

      <hr class="divider" />

      <div class="post-content" v-html="renderedContent"></div>

      <hr class="divider" />

      <RouterLink to="/blog" class="back-link bottom">← 返回博客</RouterLink>
    </template>

    <template v-else>
      <div class="not-found">
        <h2>文章未找到</h2>
        <RouterLink to="/blog">← 返回博客列表</RouterLink>
      </div>
    </template>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { blogPosts } from '../data/blogPosts.js'
import { renderMarkdown } from '../utils/markdown.js'

const route = useRoute()
const post = computed(() => blogPosts.find(p => p.id === route.params.id))
const renderedContent = computed(() => post.value ? renderMarkdown(post.value.content) : '')
</script>

<style scoped>
.blog-post {
  min-height: 100vh;
  padding: 8rem 3rem 4rem;
  max-width: 760px;
  margin: 0 auto;
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

.back-link.bottom {
  margin-top: 2rem;
  margin-bottom: 0;
}

.post-header {
  margin-bottom: 2rem;
}

.post-date {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
}

.post-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.post-tags {
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

.divider {
  border: none;
  height: 1px;
  background: var(--border);
  margin: 0 0 2rem 0;
}

.post-content :deep(h1) {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
  margin: 2.5rem 0 1rem;
  line-height: 1.2;
}

.post-content :deep(h2) {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin: 2rem 0 0.75rem;
  line-height: 1.3;
}

.post-content :deep(h3) {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
  margin: 1.5rem 0 0.5rem;
}

.post-content :deep(p) {
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 1.25rem;
}

.post-content :deep(strong) {
  color: var(--text);
  font-weight: 600;
}

.post-content :deep(em) {
  color: var(--accent);
  font-style: italic;
}

.post-content :deep(code) {
  font-family: 'Courier New', monospace;
  font-size: 0.88em;
  background: var(--accent-dim);
  color: var(--accent);
  padding: 0.15em 0.4em;
  border-radius: 3px;
}

.post-content :deep(pre) {
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  overflow-x: auto;
  border-radius: 4px;
}

.post-content :deep(pre code) {
  background: none;
  color: var(--text);
  padding: 0;
  font-size: 0.85rem;
  line-height: 1.7;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
  color: var(--muted);
  line-height: 1.9;
}

.post-content :deep(li) {
  margin-bottom: 0.25rem;
}

.post-content :deep(blockquote) {
  border-left: 2px solid var(--accent);
  padding: 0.5rem 0 0.5rem 1.25rem;
  margin-bottom: 1.25rem;
  color: var(--text);
  font-style: italic;
}

.post-content :deep(a) {
  color: var(--accent);
  text-decoration: underline;
}

.post-content :deep(hr) {
  border: none;
  height: 1px;
  background: var(--border);
  margin: 2rem 0;
}

.post-content :deep(img) {
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 1.25rem;
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
  .blog-post {
    padding: 6rem 1.25rem 3rem;
  }

  .post-content :deep(h1) {
    font-size: 1.5rem;
  }

  .post-content :deep(h2) {
    font-size: 1.25rem;
  }
}
</style>
