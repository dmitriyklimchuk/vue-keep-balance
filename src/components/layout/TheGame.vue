<template>
  <div class="app__game">
    <GameTopbar></GameTopbar>
    <GameContainer></GameContainer>
    <transition>
      <GamePopUp :open='getGameStatus' title="GAME OVER">
        <template #default>
          <p>{{ getPlayerName }}, Unfortunately</p>
          <p>Your Game is Over</p>
          <p>Please Try Again</p>
        </template>
      </GamePopUp>
    </transition>
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

<style lang="scss" scoped>

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

.v-enter {
  &-from {
    opacity: 0;
    transform: rotateX(-9999px);
  }

  &-active {
    transition: all 1s ease-in-out;
  }

  &-to {
    opacity: 1;
    transform: translateX(0);
  }
}

.v-leave {
  &-from {
    opacity: 1;
    transform: translateX(0);
  }

  &-active {
    transition: all 0.2s ease-in-out;
  }

  &-to {
    opacity: 0;
    transform: translateX(9999px);
  }
}
</style>

