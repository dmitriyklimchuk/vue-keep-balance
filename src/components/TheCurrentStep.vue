<template>
  <div class="app__active-step">
    <div class="container">
      <div class="row">
        <div class="col s12 center-align">
          <component :is="getCurrentStep"></component>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TheStart from "@/components/layout/TheStart.vue";
import TheGame from "@/components/layout/TheGame";
import TheGameOver from "@/components/layout/TheGameOver";

export default {
  components: {
    TheStart,
    TheGame,
    TheGameOver,
  },
  provide() {
    return {
      changeStep: this.changeStep,
    }
  },
  methods: {
    changeStep(step) {
      this.$store.commit('changeStep', step);
    }
  },
  computed: {
    getCurrentStep() {
      return this.$store.state.currentStep
    }
  }
}

</script>

<style lang="scss">
.app__active-step {
  border-radius: 12px;
  padding: 20px;
}

</style>
