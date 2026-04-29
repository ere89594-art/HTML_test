import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import About from './views/About.vue'
import Works from './views/Works.vue'
import Contact from './views/Contact.vue'
import Blog from './views/Blog.vue'
import BlogPost from './views/BlogPost.vue'
import ProjectDetail from './views/ProjectDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: About },
    { path: '/works', component: Works },
    { path: '/works/:id', component: ProjectDetail },
    { path: '/blog', component: Blog },
    { path: '/blog/:id', component: BlogPost },
    { path: '/contact', component: Contact },
  ],
})

createApp(App).use(router).mount('#app')
