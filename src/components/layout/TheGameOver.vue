<template>
  <div class="app__game-over white">
    <h1>Player, Your Game is Over</h1>
    <p>Player,You Can Restart Game</p>
    <start-button
        class="black-text"
        @click="changeStep('the-game')">
        Play Again
    </start-button>
  </div>

</template>

<script>
import StartButton from "@/components/UI/BaseButton";

export default {
  components: {
    StartButton
  },
  inject: ['changeStep'],

}
</script>

<style scoped lang="scss">
  .app {
    &__game-over {
      //background-color: #ffffff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      padding: 20px;
      border-radius: 12px;
    }
  }

</style>
