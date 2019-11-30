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
      <div v-if="!comments || comments.length === 0">Here is no comments. You can write the first one:)</div>
      <div v-else>
        <div v-for="comment in comments" class="comment" :key="comment.id">
          <p>Comment id: {{ comment.id }}</p>
          <p>{{ comment.body }}</p>
          <p>Post id: {{ comment.postId }}</p>
        </div>
      </div>
      <form>
      <textarea rows="10" cols="45" class="newComment" v-model="commentText"></textarea>
      <button @click.prevent="sendComment()" class="commentButton">push</button>
    </form>
    </div>
  </div>
</template>

<script>
import api from './api'

export default {
  props: ['id'],

  data: () => ({
    post: null,
    comments: null,
    commentText: ''
  }),

  methods: {
    sendComment() {
      fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ body: this.commentText, postId: parseInt(this.id) })
      }).then(r => {
        api.loadComments(this.id).then(comments => {
          this.comments = comments})
        });
      this.commentText = '';
    }
  },

  created() {
    api.loadPost(this.id).then(posts => {
      this.post = posts
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
.newComment {
  display: block;
}
.commentButton {
  padding: 10px 15px;
}
</style>