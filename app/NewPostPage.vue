<template>
  <div>
    <a href="/">Back</a>
    <form @submit="submit"
          class="post-form"
          name="post-form">
      <div class="form-group">
        <label for="author">Author</label>
        <input v-model="author" id="author" class="form-control" type="text" placeholder="author">
      </div>
      <div class="form-group">
        <label for="title">Your post</label>
        <textarea v-model="title" id="title" class="form-control" rows="5" placeholder="Your title"></textarea>
      </div>
      <div class="btn-holder">
        <button class="btn" type="submit">Send your post</button>
      </div>
    </form>
  </div>
</template>

<script>
import api from './api';

export default {
  data: () => ({
    author: null,
    title: null
  }),
  methods: {
    submit(event) {
      console.log(event.target);
      event.preventDefault();

      api.setPost(this.title, this.author);

      event.target.reset();
    }
  }
}
</script>

<style scoped>
  .post-form {
    padding: 25px;
    margin: 0 auto;
    max-width: 700px;
  }

  .form-group {
    flex-grow: 1;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-control {
    width: 100%;
    display: block;
  }

  .btn-holder {
    padding: 10px 0 0;
  }

  .btn {
    border: none;
    color: white;
    background: blue;
    border-radius: 5em;
    padding: 5px 15px;
    transition: background .27s linear;
  }

  .btn:hover {
     background: orange;
   }
</style>