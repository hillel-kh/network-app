<template>
  <div class="post-page">
    <a href="/">Back</a>
    <p>Post #{{ id }}</p>
    <p>{{post.title}}</p>
  </div>
</template>

<script>
import api from './api'
export default {
  props: ['id'],

  data: () => ({
    post: null
  }),
  created() {
    api.loadPost(this.id).then(post => {
      this.post = post
    })
  }
}
</script>

<style scoped>
.post-page {
  width: 400px;
  margin: 2em auto;
}
</style>
