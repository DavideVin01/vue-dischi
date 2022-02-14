<template>
  <select v-model="selected" @change="changeOption">
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
  methods: {
    changeOption() {
      this.$emit("change-option", this.selected);
    },
  },
};
</script>

<style>
</style>