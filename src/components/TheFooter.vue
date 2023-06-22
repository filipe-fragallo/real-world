<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        MiguelS007
      </router-link>
      <span class="attribution">
        Access the project's source code on
        <a
          rel="noopener noreferrer"
          target="blank"
          href="https://github.com/MiguelS007/real-world"
          >GitHub</a
        >. &amp; let your star.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "RwvFooter"
};
</script>
