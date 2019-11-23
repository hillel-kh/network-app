<template>
  <Router :routes="routes">
    <NotFoundPage></NotFoundPage>
  </Router>
</template>

<script>
import Router from './Router.vue';

import HomePage from './HomePage.vue';
import PostPage from './PostPage.vue';
import NotFoundPage from './NotFoundPage.vue';

export default {
  data: () => ({
    routes: {
      '/': HomePage,
      '/post': PostPage,
    }
  }),

  components: { Router, NotFoundPage }
}
</script>
