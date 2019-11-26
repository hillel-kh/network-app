<template>
  <div class="post-page">
    <a href="/">Back</a>
    <p>Post #{{ id }}</p>
    <p v-if="!post">loading</p>
    <div v-if="post">
      <dl>
        <div>
          <dt>ID:</dt>
          <dd>{{post.id}}</dd>
        </div>
        <div>
          <dt>Title</dt>
          <dd>{{post.title}}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import api from './api';

export default {
  props: ['id'],

  data: () => ({
    post: null
  }),

  created() {
    api.loadPost(this.id).then(post => this.post = post)
  }
}
</script>

<style scoped>
  .post-page {
    width: 400px;
    margin: 2em auto;
  }

  dl {
    text-align: left;
  }

  dl div {
    display: flex;
  }

  dt {
    margin-right: 10px;
  }

  dd {
    margin: 0;
  }
</style>
