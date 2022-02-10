<template>
  <main>
    <section id="songs">
      <div class="d-flex justify-content-center flex-wrap container">
        <div
          class="music-box m-3 grow"
          v-for="(card, index) in musicCards"
          :key="index"
        >
          <MusicCard
            :poster="card.poster"
            :title="card.title"
            :author="card.author"
            :genre="card.genre"
            :year="card.year"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import MusicCard from "./MusicCard.vue";
export default {
  name: "Main",
  components: {
    MusicCard,
  },
  data() {
    return {
      musicCards: [],
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => (this.musicCards = res.data.response));
  },
};
</script>

<style scoped lang="scss">
main {
  background-color: #1e2d3b;
  height: calc(100vh - 110px);
}
.music-box {
  background-color: #2e3a46;
  width: 200px;
  padding: 15px;
}
.grow {
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}
</style>