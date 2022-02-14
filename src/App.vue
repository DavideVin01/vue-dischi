<template>
  <div>
    <Header :genres="genres" @selected-genre="setSelectedGenre" />
    <Main @fetch-genres="setGenres" :selected-genre="selectedGenre" />
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
      selectedGenre: "",
    };
  },
  methods: {
    setGenres(genres) {
      this.genres = genres;
    },
    setSelectedGenre(genre) {
      this.selectedGenre = genre;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>