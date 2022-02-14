<template>
  <select v-model="selected">
    <option value="">{{ placeholder }}</option>
    <option v-for="(option, index) in options" :key="index || option.id">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: ["placeholder", "options"],
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style>
</style>