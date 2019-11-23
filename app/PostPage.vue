<template>
  <div class="post-page">
    <a href="/">Back</a>
    <p>Post #{{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],

  data: () => ({
    post: null
  })
}
</script>

<style scoped>
.post-page {
  width: 400px;
  margin: 2em auto;
}
</style>
