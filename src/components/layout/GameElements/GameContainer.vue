<template>
  <main class="app__game-container">
    <GameWarehouse></GameWarehouse>
    <GameBalancer></GameBalancer>
  </main>
</template>

<script>
import GameWarehouse from "@/components/layout/GameElements/GameWarehouse";
import GameBalancer from "@/components/layout/GameElements/GameBalancer";

export default {
  components:{
    GameWarehouse,
    GameBalancer
  }
}
</script>

<style lang="scss" scoped>

.app {
  &__game-container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
  }
}

</style>
