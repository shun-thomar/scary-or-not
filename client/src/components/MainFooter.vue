<template>
  <footer class="copyleft-footer has-text-centered">
    <span class="fa fa-copyright fa-flip-horizontal"></span>&nbsp;<span class="fa fa-flip-horizontal shun">SHUN</span>
  </footer>
</template>

<script>
export default {
  name: "MainFooter"
}
</script>

<style scoped>
.copyleft-footer {
  width: 100%;
  bottom: 0;
  position: fixed;
}
.shun {
  font-weight: lighter;
  font-family: 'Major Mono Display', monospace;
}
</style>