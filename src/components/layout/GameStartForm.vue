<template>
  <form class="app__start-form">
    <input type="text" class="app__start-input" placeholder="NAME" ref="inputGetNameStart">
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
        alert('Please Insert Name');
        return;
      }
      this.$store.commit('getPlayerName', playerName);
      this.$store.commit('changeStep', step);
    }
  },
}

</script>

<style scoped lang="scss">


</style>
