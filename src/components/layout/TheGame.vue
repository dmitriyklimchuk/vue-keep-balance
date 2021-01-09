<template>
  <div class="app__game">
    <GameTopbar></GameTopbar>
    <GameContainer></GameContainer>
    <GamePopUp v-if="getGameStatus" title="GAME OVER">
      <template #default>
        <p>{{ getPlayerName }}, Unfortunately</p>
        <p>Your Game is Over</p>
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

