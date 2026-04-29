<template>
  <Transition name="menu-slide">
    <div v-if="isOpen" class="mobile-menu">
      <div class="backdrop" @click="$emit('close')"></div>
      <div class="panel">
        <button class="close-btn" @click="$emit('close')">
          <span></span>
          <span></span>
        </button>
        <nav class="menu-links">
          <RouterLink to="/" @click="$emit('close')">关于</RouterLink>
          <RouterLink to="/works" @click="$emit('close')">作品</RouterLink>
          <RouterLink to="/blog" @click="$emit('close')">博客</RouterLink>
          <RouterLink to="/contact" @click="$emit('close')">联系</RouterLink>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, required: true },
})

defineEmits(['close'])
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 200;
}

.backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

.panel {
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: var(--surface);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 1;
}

.close-btn {
  align-self: flex-end;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  position: relative;
  margin-bottom: 3rem;
}

.close-btn span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 1px;
  background: var(--muted);
  transition: background 0.2s;
}

.close-btn span:first-child {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-btn span:last-child {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.close-btn:hover span {
  background: var(--accent);
}

.menu-links {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.menu-links a {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--muted);
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s;
}

.menu-links a:hover,
.menu-links a.router-link-active {
  color: var(--accent);
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity 0.3s ease;
}

.menu-slide-enter-active .panel,
.menu-slide-leave-active .panel {
  transition: transform 0.3s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
}

.menu-slide-enter-from .panel,
.menu-slide-leave-to .panel {
  transform: translateX(100%);
}
</style>
