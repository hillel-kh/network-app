<template>
  <div class="home-page">
    <h1>Posts</h1>

    <p v-if="!posts">loading</p>

    <p v-if="posts && !posts.length">No posts</p>

    <ul v-if="posts && posts.length">
      <li v-for="post in posts">
        <a :href="`/post?id=${post.id}`">{{ post.title }}</a>
      </li>
    </ul>

    <div class="form-wrapper">
      <input type="text" ref="postTitle">
      <button @click="addPost">send post</button>
    </div>


  </div>
</template>

<script>
import api from './api'

export default {
  data: () => ({
    posts: null
  }),
  methods: {
    addPost() {
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          id: this.posts.length + 1,
          title: this.$refs.postTitle.value,
          author: 'somebody'
        })
      });
    }
  },
  created() {
    api.loadPosts().then(posts => {
      this.posts = posts
    })
  }
}
</script>

<style scoped>
.home-page {
  width: 400px;
  margin: 2em auto;
}
</style>
