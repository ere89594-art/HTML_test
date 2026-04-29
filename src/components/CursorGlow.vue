<template>
  <template v-if="!isTouchDevice">
    <div class="cursor-glow" :style="{ left: x + 'px', top: y + 'px' }"></div>
    <div class="cursor-dot" :style="{ left: x + 'px', top: y + 'px' }"></div>
  </template>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
const x = ref(-100)
const y = ref(-100)

function onMove(e) {
  x.value = e.clientX
  y.value = e.clientY
}

onMounted(() => {
  if (!isTouchDevice) {
    window.addEventListener('mousemove', onMove)
  }
})
onUnmounted(() => {
  if (!isTouchDevice) {
    window.removeEventListener('mousemove', onMove)
  }
})
</script>

<style scoped>
.cursor-glow {
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 255, 0, 0.06) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  transition: left 0.08s ease, top 0.08s ease;
}

.cursor-dot {
  position: fixed;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10000;
  transition: left 0.04s ease, top 0.04s ease;
}
</style>
