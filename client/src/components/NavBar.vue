<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">

        <span class="icon-text">
          <span class="fa-stack fa-1x">
            <span class="fa-solid fa-ghost fa-stack-1x" style="color:Tomato"></span>
            <span class="fa-regular fa-circle fa-stack-2x" style="color:White"></span>
          </span>
        </span>

          <span class="app-title mr-1 ml-1">Scary || !Scary</span>

          <span class="icon-text">
            <span class="fa-stack fa-1x">
              <span class="fa-solid fa-ghost fa-stack-1x"></span>
              <span class="fa-solid fa-ban fa-stack-2x" style="color:Tomato"></span>
            </span>
          </span>

      </router-link>
      <!-- TODO: try to replace by this awesome icon fa-solid fa-burger -->
      <div class="navbar-burger navbar-end" data-target="theNavBar" style="color:Tomato">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="theNavBar" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item">
          Register
        </a>
        <a class="navbar-item">
          Login
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
</script>

<style>
</style>