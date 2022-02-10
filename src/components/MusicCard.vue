<template>
  <div id="music-card" class="d-flex flex-column align-items-center">
    <img :src="poster" alt="title" class="img-fluid mb-3" />
    <div class="h4 text-white text-center text-uppercase">
      <strong>{{ title }}</strong>
    </div>
    <div class="mt-2 text-muted fw-600">{{ author }}</div>
    <div class="text-muted fw-600">{{ year }}</div>
  </div>
</template>

<script>
export default {
  name: "MusicCard",
  props: ["poster", "title", "author", "genre", "year"],
};
</script>

<style scoped lang="scss">
.fw-600 {
  font-weight: 600;
}
img {
  padding: 5px;
}
</style>