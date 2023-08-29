<template>
  <i :class="`fa-${type} fa-${icon}`" />
</template>

<script>
export default ({
  props: {
    type: {
      type: String,
      default: "fas"
    },
    icon: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
// @import '../fonts/FontAwesome/scss/fontawesome.scss';
// $fa-font-path: "../fonts/FontAwesome/webfonts";
// @import '../fonts/FontAwesome/scss/solid.scss';
// @import '../fonts/FontAwesome/scss/regular.scss';
</style>