<template>
  <div class="app__game">
    <p>YOUR SCORE {{ getScore }}</p>
    <GameTopbar></GameTopbar>
    <GameContainer></GameContainer>
    <GamePopUp v-if="getGameStatus" title="GAME OVER">
      <template #default>
        <p>Unfortunately</p>
        <p>{{ getPlayerName }} Game is Over</p>
        <p>Please Try Again</p>
      </template>
    </GamePopUp>
  </div>
</template>

<script>
import GameTopbar from "@/components/layout/GameElements/GameTopbar";
import GameContainer from "@/components/layout/GameElements/GameContainer";
import GamePopUp from "@/components/UI/GamePopUp";
export default {
  components: {
    GamePopUp,
    GameTopbar,
    GameContainer,
  },
  computed: {
    getGameStatus() {
      return this.$store.state.gameStatus;
    },
    getScore() {
      return this.$store.getters.leftSum;
    },
    getPlayerName() {
      return this.$store.state.playerName
    }
  }
}
</script>

<style lang="scss">

.app {
  &__game {
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}
</style>

