<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <RouterLink to="/" class="logo">
      <span class="logo-dot"></span>
      PORTFOLIO
    </RouterLink>
    <div class="nav-links">
      <RouterLink to="/" :class="{ active: $route.path === '/' }">关于</RouterLink>
      <RouterLink to="/works" :class="{ active: $route.path === '/works' }">作品</RouterLink>
      <RouterLink to="/blog" :class="{ active: $route.path === '/blog' }">博客</RouterLink>
      <RouterLink to="/contact" :class="{ active: $route.path === '/contact' }">联系</RouterLink>
    </div>
    <button class="hamburger" :class="{ open: isMobileMenuOpen }" @click="isMobileMenuOpen = !isMobileMenuOpen">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
  <MobileMenu :isOpen="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import MobileMenu from './MobileMenu.vue'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})

watch(isMobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  transition: padding 0.3s ease, border-bottom 0.3s ease;
}

.navbar.scrolled {
  padding: 1rem 3rem;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: var(--text);
}

.logo-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-links a {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  color: var(--muted);
  transition: color 0.2s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.2s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text);
}

.nav-links a.active::after,
.nav-links a:hover::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 300;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--text);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger.open span:first-child {
  transform: translateY(6px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:last-child {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .navbar {
    padding: 1rem 1.25rem;
  }

  .navbar.scrolled {
    padding: 0.75rem 1.25rem;
  }
}
</style>
