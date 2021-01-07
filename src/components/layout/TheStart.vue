<template>
  <div class="app__start white">
    <h1> Is A Start Component </h1>
    <slot></slot>
    <p>Please input Your name and chose a level</p>
    <BaseButton class="app__start-button" @click="changeStep('the-game')">
      <i class="fas fa-gamepad app__start-button-icon"></i>
      Let`s Start The Game
      <i class="fas fa-gamepad app__start-button-icon"></i>
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";
  export default {
    components: {
      BaseButton
    },
    data() {
      return {

      }
    },
    inject: ['changeStep'],
  }
</script>

<style scoped lang="scss">
  .app {
    &__start {
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

      &-button {
        display: inline-flex;
        align-items: center;
        width: auto;

        &-icon {
          padding: 0 10px;
        }
      }
    }
  }

</style>
