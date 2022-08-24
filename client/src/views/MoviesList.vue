<template>
  <main class="hero">
    <section class="hero-head">
      <h1 class="title has-text-centered">Movies</h1>
    </section>
    <section class="hero-body">
  <div class="tile is-ancestor is-flex is-flex-wrap-wrap is-justify-content-space-around">
    <img src="../assets/movie-card-placeholder-transparent.svg"
         width="150"
         height="200"
         class="m-1"
    />
    <img src="../assets/movie-card-placeholder-transparent.svg"
         width="150"
         height="200"
         class="m-1"
    />
    <img src="../assets/movie-card-placeholder-transparent.svg"
         width="150"
         height="200"
         class="m-1"
    />
    <img src="../assets/movie-card-placeholder-transparent.svg"
         width="150"
         height="200"
         class="m-1"
    />
  </div>
    </section>
    <section class="hero-foot has-text-centered">
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "MoviesList.vue",
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b6f26c22f05e1d77874b6e13a3a3f09e&with_genres=27')
          .then(response => (this.movies = response.data))
  }
}
</script>

<style scoped>

</style>