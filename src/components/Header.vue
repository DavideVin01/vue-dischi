<template>
  <header class="d-flex align-items-center">
    <img
      class="grow"
      role="button"
      id="spotify-logo"
      src="../assets/img/Spotify.png"
      alt="Spotify Logo"
    />
  </header>
</template>

<script>
export default {
  name: "Header",
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