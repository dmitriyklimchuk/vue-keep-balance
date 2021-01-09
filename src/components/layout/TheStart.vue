<template>
  <div class="app__start white">
    <h1> Welcome </h1>
    <slot></slot>
    <p class="app__start-description">Please Input Your Name</p>
    <GameStartForm></GameStartForm>
  </div>
</template>

<script>
import GameStartForm from "@/components/layout/GameStartForm";
  export default {
    components: {GameStartForm},
    template: {
      GameStartForm
    },
  }
</script>

<style lang="scss" scoped>
  .app {
    &__start {
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

      &-description {
        text-transform: uppercase;
        font-size: 22px;
      }
    }
  }

</style>
