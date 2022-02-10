<template>
  <header class="d-flex align-items-center">
    <img
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
  height: 85px;
  #spotify-logo {
    margin-left: 20px;
    width: 50px;
  }
}
</style>