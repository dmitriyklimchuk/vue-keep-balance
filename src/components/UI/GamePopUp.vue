<template>
  <template>
    <teleport to="body">
      <transition name="app__popup-overlay">
        <div v-if="open" class="app__popup-overlay"></div>
      </transition>
      <transition name="app__popup">
        <dialog open v-if="open" class="app__popup">
          <header class="app__popup-heading-container">
            <slot name="header">
              <h2 class="app__popup-heading"> {{ title }} </h2>
            </slot>
          </header>
          <section class="app__popup-section">
            <slot></slot>
          </section>
          <menu class="app__popup-menu">
            <slot name="actions">
              <BaseButton class="app__popup-menu-button" @click="restartGame">Play again</BaseButton>
            </slot>
          </menu>
        </dialog>
      </transition>
    </teleport>
  </template>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";
import {START_NEW_GAME} from "@/constants";

export default {
  components: {
    BaseButton
  },
  props: {
    title: {
      type: String,
      required: false
    },
    open: {
      type: Boolean,
      required: true
    }

  },
  methods: {
    restartGame() {
      this.$store.dispatch(START_NEW_GAME);
    }
  }
}

</script>

<style scoped lang="scss">
.app {
  &__popup {
    position: fixed;
    top: 20vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0;
    margin: 0;
    overflow: hidden;

    @media (min-width: 768px) {
      left: calc(50% - 20rem);
      width: 40rem;
    }

    &-enter {
      &-from {
        opacity: 0;
        transform: translateY(-9999px);
      }

      &-active {
        transition: all 0.3s ease-in-out;
      }

      &-to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &-leave {
      &-from {
        opacity: 1;
        transform: translateY(0);
      }

      &-active {
        transition: all 0.3s ease-in-out;
      }

      &-to {
        opacity: 0;
        transform: translateY(9999px);

      }
    }

    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      z-index: 10;

      &-enter {
        &-from {
          opacity: 0;
        }

        &-active {
          transition: opacity 0.3s ease-in-out;
        }

        &-to {
          opacity: 1;
        }
      }

      &-leave {
        &-from {
          opacity: 1;
        }

        &-active {
          transition: all 0.3s ease-in-out;
        }

        &-to {
          opacity: 0;
        }
      }
    }

    &-heading {
      margin: 0;
      text-align: center;

      &-container {
        background-color: #eeeeee;
        color: rgba(0, 0, 0, 0.85);
        width: 100%;
        padding: 1rem;
      }
    }

    &-section {
      padding: 1rem;
      text-align: center;
      font-size: 22px;
      text-transform: uppercase;
    }

    &-menu {
      padding: 1rem;
      display: flex;
      justify-content: flex-end;
      margin: 0;

      &-button {
        margin: 0 auto;
      }
    }
  }
}

</style>
