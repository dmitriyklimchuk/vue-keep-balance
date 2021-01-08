<template>
  <div class="app__start white">
    <h1> Welcome </h1>
    <slot></slot>
    <p class="app__start-description">Please Input Your Name</p>
    <GameStartForm></GameStartForm>
    <GamePopUp v-if="emptyNameDataInvalid" title="INVALID DATA">
      <template #default>
        <p> Name input is empty </p>
        <p>Please write your name</p>
      </template>
    </GamePopUp>
  </div>
</template>

<script>
import GameStartForm from "@/components/layout/GameStartForm";
  export default {
    components: {GameStartForm},
    template: {
      GameStartForm
    },
  }
</script>

<style lang="scss">
  .app {
    &__start {
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

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

      &-description {
        text-transform: uppercase;
        font-size: 22px;
      }
    }
  }

</style>
