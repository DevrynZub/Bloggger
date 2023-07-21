<template>
  <div class="container-fluid">
    <div class="row">
      <h1>The Blog</h1>
      <div>
        <div class="col-12 card" v-for="blog in blogs" :key="blog.id">
          <h3>{{ blog.title }}</h3>
          <p>{{ blog.body }}, {{ blog.tags }}</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import { blogService } from '../services/BlogService.js'
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';

export default {
  setup() {

    async function getBlogs() {
      try {
        await blogService.getBlogs()
      } catch (error) {
        Pop.error(error, '[GETTING BLOGS]')
      }
    }

    onMounted(() => {
      logger.log('blog page mounted')
      getBlogs()
    });

    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss"></style>
