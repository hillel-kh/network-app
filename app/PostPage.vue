<template>
  <div class="post-page">
    <a href="/">Back</a>

    <h1>{{post.title}}</h1>
    <p>{{post.author}}</p>
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
