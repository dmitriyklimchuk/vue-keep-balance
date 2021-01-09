<template>
  <header class="app__game-topbar">
    <div class="app__game-topbar-container">
      <div class="app__game-topbar-actions">
        <div class="app__game-topbar-pause  grey-text text-darken-2"
             @click="togglePause">
          <i  class="fas fa-x7"
              :class="pauseButton"></i>
        </div>
        <base-button class="grey darken-2 white-text" @click="getSurrender('the-game-over')">Surrender</base-button>
      </div>
    </div>
  </header>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {START_NEW_GAME, TOGGLE_PAUSE} from "@/constants";
import BaseButton from "@/components/UI/BaseButton";

export default {
  components: {
    BaseButton
  },
  inject: ['changeStep'],
  computed: {
    ...mapState({
      isPaused: state => state.isPaused
    }),
    pauseButton() {
      return this.isPaused ? 'fa-play' : 'fa-pause'
    }
  },
  methods: {
    ...mapMutations({
      togglePause: TOGGLE_PAUSE
    }),
    getSurrender(step) {
      this.changeStep(step);
      this.$store.dispatch(START_NEW_GAME);
    }
  }
}
</script>

<style scoped lang="scss">

.app {
  &__game {
    &-topbar {
      width: 90%;
      margin: 20px auto 0 ;
      background-color: #f5f5f5;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      padding: 20px;

      &-container {
        width: 80%;
        margin: 0 auto;
      }

      &-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-pause {
        width: 20%;
        cursor: pointer;
        font-size: 2rem;
        line-height: 2rem;
        padding: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.4s ease-in-out;
      }
    }
  }
}
</style>
