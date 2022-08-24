<template>
  <MovieCard></MovieCard>
  <ActionBar></ActionBar>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import ActionBar from "@/components/ActionBar";

export default {
  name: "RateAMovie",
  components: {
    MovieCard,
    ActionBar
  },
  data() {
    return {
      pageTitle: "Homepage"
    }
  }
}
</script>

<style scoped>
</style>