<template>
  <div class="hero-body p-5">
    <div class="is-flex is-justify-content-center">
      <img src="../assets/movie-card-placeholder-transparent.svg"
           width="300"
           height="600"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    id: Number
  },
  data() {
    return {
      movie: null
    }
  }
}
</script>