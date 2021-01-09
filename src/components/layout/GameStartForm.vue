<template>
  <form class="app__start-form">
    <input type="text" class="app__start-input" placeholder="NAME" ref="inputGetNameStart">
    <div v-show="isInputEmpty" class="app__start-error">
      <p><i class="fas fa-exclamation-circle app__start-error-icon"></i>Please write your name!!!</p>
    </div>
    <BaseButton type="submit" class="app__start-button" @click="startGame('the-game')">
      <i class="fas fa-gamepad app__start-button-icon"></i>
      Let`s Start The Game
      <i class="fas fa-gamepad app__start-button-icon"></i>
    </BaseButton>
  </form>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      isInputEmpty: false
    }
  },
  computed : {
    getPlayerName() {
      return this.$store.state.playerName
    }
  },
  methods: {
    startGame(step) {
      const playerName = this.$refs.inputGetNameStart.value
      if(!playerName) {
        this.isInputEmpty = true;
        return;
      }
      this.$store.commit('getPlayerName', playerName);
      this.$store.commit('changeStep', step);
    }
  },
}

</script>

<style scoped lang="scss">
.app {
  &__start {

    &-form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-button {
      display: inline-flex;
      align-items: center;
      width: auto;
      margin: 35px 0;

      &-icon {
        padding: 0 10px;
      }
    }

    &-input {

      &[type='text']:not(.browser-default) {
        width: 300px;
        font-size: 22px;

        &:focus,
        &:focus:not(.readonly),
        &:hover {
          border-bottom: 1px solid #616161;
          box-shadow: 0 2px 0 0 #616161
        }
      }
    }

    &-error {
      color: #e53935;
      width: 300px;
      text-align: left;

      &-icon {
        margin-right: 5px;
      }
    }
  }
}

</style>
