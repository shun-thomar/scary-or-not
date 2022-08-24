<template>
  <NavBar></NavBar>
  <section class="hero">
    <div class="hero-head pt-2">
      <h1 class="title has-text-centered">Is it scary?</h1>
    </div>
    <div class="hero-body p-0">
      <router-view/>
    </div>
  </section>
  <MainFooter></MainFooter>
</template>

<script>
import NavBar from "@/components/NavBar";
import MainFooter from "@/components/MainFooter";

export default {
  name: 'App',
  components: {
    NavBar,
    MainFooter
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

.app-title {
  font-family: 'Major Mono Display', monospace;
}
</style>
