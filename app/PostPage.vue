<template>
  <div class="post-page">
    <span v-if="!post">Whait a second...</span>
    <div v-if="post">
      <a href="/">Back</a>
      <p>Post #{{ id }}</p>
      <p>Author: {{ post.author }}</p>
      <p>Title: {{ post.title }}</p>
    </div>
    <div>
      <span>Comments:</span>
      <div v-if="!comments ||comments.length === 0">Here is no comments</div>
      <div v-else>
        <div v-for="comment in comments" class="comment" :key="comment.id">
          <p>Comment id: {{ comment.id }}</p>
          <p>{{ comment.body }}</p>
          <p>Post id: {{ comment.postId }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from './api'

export default {
  props: ['id'],

  data: () => ({
    post: null,
    comments: null
  }),

  created() {
    api.loadPost(this.id).then(posts => {
      this.post = posts
      console.log(this.post)
    }),
    api.loadComments(this.id).then(comments => {
      this.comments = comments
    })
  }
}
</script>

<style scoped>
.post-page {
  width: 400px;
  margin: 2em auto;
}
.comment {
  border: 1px solid black;
  padding: 5px;
  margin-bottom: 10px;
}
</style>