<template>
  <section class="app__game-balancer">
    <GameSwing/>
    <GamePillar/>
  </section>
</template>

<script>
import GameSwing from "@/components/layout/GameElements/GameSwing";
import GamePillar from "@/components/layout/GameElements/GamePillar";

export default {
  components: {
    GameSwing,
    GamePillar
  }
}
</script>

<style scoped lang="scss">

.app {
  &__game-balancer {
    height: 35%;
    width: 100%;
  }
}

</style>
