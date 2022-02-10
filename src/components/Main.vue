<template>
  <main>
    <div class="container wrapper">
      <div class="music-card text-white"></div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Main",
  data() {
    return {
      musicCards: [],
    };
  },
  //   methods: {},
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => console.log(res.data));
  },
};
</script>

<style scoped lang="scss">
main {
  background-color: #1e2d3b;
  height: calc(100vh - 85px);
  .wrapper {
    padding: 50px 120px;
  }
}

.music-card {
  background-color: rgba(#fff, 0.15);
  width: 200px;
}
</style>