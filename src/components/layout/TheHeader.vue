<template>
  <header class="app__header">
    <h1 class="center-align">KEEP BALANCE
      <span>
        <i class="fab fa-playstation app__header-icon"></i>
      </span>
    </h1>
    <slot></slot>
  </header>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .app {
    &__header {
      border-radius: 12px;
      padding: 10px 0 20px;
      background-color: #ffffff;
      margin: 0 0 35px 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }
  }

</style>
