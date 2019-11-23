<template>
  <div @click="click" class="router">
    <component v-if="page" :is="page" v-bind="props"></component>
    <slot v-else></slot>
  </div>
</template>

<script>
const matchTag  = (node, tag) => node.tagName === tag
  ? node : (node.parentNode && matchTag(node.parentNode, tag));

const matchEventToTag = (event, tag) => matchTag(event.target, tag.toUpperCase());

const extractLinkProps = link => {
  const args = {};
  link.slice(1).split('&')
    .map(s => s.split('='))
    .forEach(p => {
      args[ p[0] ] = p[1]
    })
  return args;
};

export default {
  props: ['routes'],

  data: () => ({
    pathname: location.pathname,
    props: extractLinkProps(location.search)
  }),

  methods: {
    click(event) {
      const link = matchEventToTag(event, 'a');
      if (!link) return;
      if (link.origin !== location.origin) return;

      event.preventDefault();
      history.pushState(null, null, link.href.slice(link.origin.length));
      this.pathname = link.pathname;
      this.props = extractLinkProps(link.search)
    }
  },

  computed: {
    page() {
      return this.routes[this.pathname] || this.routes.default;
    }
  }
}
</script>

<style scoped>
.router {
  width: 100%;
  height: 100%;
}
</style>
