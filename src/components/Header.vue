<template>
  <header class="d-flex align-items-center justify-content-between px-5">
    <div>
      <img
        class="grow"
        role="button"
        id="spotify-logo"
        src="../assets/img/Spotify.png"
        alt="Spotify Logo"
      />
    </div>
    <div>
      <Select placeholder="Seleziona un genere" :options="genres" />
    </div>
  </header>
</template>

<script>
import Select from "./Select.vue";
export default {
  name: "Header",
  components: {
    Select,
  },
  data() {
    return {
      selectTerm: "",
    };
  },
  props: ["genres"],
  methods: {
    filteredGenres() {
      return this.response.filter((element) => {
        element.genre.includes(this.selectTerm);
      });
    },
  },
};
</script>

<style scoped lang="scss">
Header {
  background-color: #2e3a46;
  height: 60px;
  margin-bottom: 50px;
  #spotify-logo {
    margin-left: 20px;
    width: 40px;
  }
}
</style>