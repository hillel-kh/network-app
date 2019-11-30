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

    <form class="postForm">
      <h2>Write your title</h2>
      <input v-model="postText">
      <button @click.prevent="sendPost()">Post</button>
    </form>
  </div>
</template>

<script>
import api from './api'

export default {
  data: () => ({
    posts: null,
    postText: '',
  }),

  methods: {
    sendPost() {
      const postAuthor = prompt('Who you are?');
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ title: this.postText, author: postAuthor })
      }).then(r => {
        api.loadPosts().then(posts => {
          this.posts = posts})
        });
      this.postText = '';
    },
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
.postForm > button{
  display: block;
  padding: 5px 10px;
  margin-top: 5px; 
}
</style>