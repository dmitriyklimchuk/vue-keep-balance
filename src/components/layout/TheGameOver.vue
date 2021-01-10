<template>
  <div class="app__game-over white">
    <h1 class="app__game-over-heading "> {{ getPlayerName }}</h1>
    <h2>Your Game is Over</h2>
    <p>You Can Restart Game</p>
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
  computed: {
    getPlayerName() {
      return this.$store.state.playerName
    }
  }

}
</script>

<style scoped lang="scss">
  .app {
    &__game-over {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      padding: 20px;
      border-radius: 12px;

      &-heading {
        text-transform: uppercase;
      }
    }
  }

</style>
