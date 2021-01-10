<template>
  <div class="app__active-step">
    <div class="container">
      <div class="row">
        <div class="col s12 center-align">
          <transition appear name="app__active-step">
            <component :is="getCurrentStep"></component>
          </transition>
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

<style lang="scss" scoped>
.app {
  &__active-step {
    border-radius: 12px;
    padding: 20px;

    &-enter {
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

    &-leave {
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
  }
}

</style>
