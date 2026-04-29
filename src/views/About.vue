<template>
  <section class="about">
    <div class="hero">
      <div class="hero-text">
        <p class="hero-label">创意艺术家 / 设计师</p>
        <h1 class="hero-name">
          <span class="line">YOUR</span>
          <span class="line accent">NAME</span>
        </h1>
        <p class="hero-bio">
          用视觉语言讲述故事。专注于创意方向、品牌设计与数字艺术，
          将想象力转化为令人难忘的视觉体验。
        </p>
        <div class="hero-actions">
          <RouterLink to="/works" class="btn-primary">查看作品</RouterLink>
          <RouterLink to="/contact" class="btn-ghost">联系我</RouterLink>
        </div>
      </div>
      <div class="hero-visual">
        <div class="photo-frame">
          <div class="photo-placeholder">
            <span>YOUR PHOTO</span>
          </div>
          <div class="frame-accent"></div>
        </div>
      </div>
    </div>

    <div class="skills-section">
      <p class="section-label">技能领域</p>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <span class="skill-name">{{ skill.name }}</span>
          <div class="skill-bar">
            <div class="skill-fill" :style="{ width: skill.level + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: '视觉设计', level: 95 },
  { name: '插画创作', level: 88 },
  { name: '品牌策划', level: 80 },
  { name: '摄影后期', level: 75 },
  { name: '动态设计', level: 70 },
]
</script>

<style scoped>
.about {
  min-height: 100vh;
  padding: 0 3rem;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 100vh;
  padding-top: 6rem;
}

.hero-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero-name {
  font-size: clamp(4rem, 8vw, 8rem);
  line-height: 0.95;
  margin-bottom: 2rem;
}

.hero-name .line {
  display: block;
}

.hero-name .accent {
  color: var(--accent);
  -webkit-text-stroke: 2px var(--accent);
  color: transparent;
}

.hero-bio {
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.8;
  max-width: 420px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
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

.btn-ghost {
  display: inline-block;
  padding: 0.75rem 2rem;
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  transition: border-color 0.2s, color 0.2s;
}

.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.photo-frame {
  position: relative;
  width: 380px;
  height: 480px;
}

.photo-placeholder {
  width: 100%;
  height: 100%;
  background: var(--surface2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--muted);
}

.frame-accent {
  position: absolute;
  bottom: -16px;
  right: -16px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--accent);
  z-index: -1;
}

.skills-section {
  padding: 6rem 0;
  border-top: 1px solid var(--border);
}

.section-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 3rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-name {
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

.skill-bar {
  height: 2px;
  background: var(--border);
}

.skill-fill {
  height: 100%;
  background: var(--accent);
  transition: width 1s ease;
}

@media (max-width: 1024px) {
  .hero {
    gap: 2.5rem;
  }

  .photo-frame {
    width: 300px;
    height: 380px;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 0 1.25rem;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 2rem;
    min-height: auto;
    padding-top: 6rem;
    padding-bottom: 3rem;
  }

  .hero-text {
    order: 1;
  }

  .hero-visual {
    order: 0;
    justify-content: flex-start;
  }

  .photo-frame {
    width: min(280px, 80vw);
    height: auto;
    aspect-ratio: 4/5;
  }

  .hero-name {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  .hero-bio {
    max-width: 100%;
  }

  .skills-section {
    padding: 3rem 0;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
