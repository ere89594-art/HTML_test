<template>
  <CursorGlow v-if="!isTouchDevice" />
  <NavBar />
  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import CursorGlow from './components/CursorGlow.vue'

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
</script>
