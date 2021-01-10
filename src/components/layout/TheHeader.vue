<template>
  <transition appear name="app__header">
    <header class="app__header">
      <h1 class="center-align">KEEP BALANCE
        <span>
        <i class="fab fa-playstation app__header-icon"></i>
      </span>
      </h1>
      <slot></slot>
    </header>
  </transition>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .app {
    &__header {
      border-radius: 12px;
      padding: 10px 0 20px;
      background-color: #ffffff;
      margin: 0 0 35px 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

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
