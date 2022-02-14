<template>
  <div>
    <Header :genres="genres" />
    <Main @fetch-genres="setGenres" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      genres: [],
    };
  },
  methods: {
    setGenres(genres) {
      this.genres = genres;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>