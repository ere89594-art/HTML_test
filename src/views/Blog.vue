<template>
  <section class="blog">
    <div class="blog-header">
      <p class="section-label">文章</p>
      <h2 class="blog-title">BLOG</h2>
    </div>

    <div class="blog-grid">
      <BlogCard v-for="post in blogPosts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<script setup>
import BlogCard from '../components/BlogCard.vue'
import { blogPosts } from '../data/blogPosts.js'
</script>

<style scoped>
.blog {
  min-height: 100vh;
  padding: 8rem 3rem 6rem;
}

.blog-header {
  margin-bottom: 4rem;
}

.section-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.blog-title {
  font-size: clamp(3rem, 6vw, 6rem);
  color: transparent;
  -webkit-text-stroke: 1px var(--muted);
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.1;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog {
    padding: 6rem 1.25rem 3rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }

  .blog-header {
    margin-bottom: 2.5rem;
  }
}
</style>
