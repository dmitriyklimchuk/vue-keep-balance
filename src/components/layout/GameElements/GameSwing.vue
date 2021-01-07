<template>
  <div class="app__game-swing" :style="inlineStyleSwing">
    <GameBlock v-for="block in leftSideBlocks"
              :block="block"
              :key="block.id"/>
    <GameBlock v-for="block in rightSideBlocks"
              :block="block"
              :side="true"
              :key="block.id"/>
  </div>
</template>

<script>
import GameBlock from "@/components/layout/GameElements/GameBlock";
import {mapState, mapMutations} from 'vuex'
import {ADD_RIGHT_SIDE_BLOCK} from '@/constants'

export default {
  components: {
    GameBlock
  },
  computed: {
    ...mapState([
      'rightSideBlocks',
      'leftSideBlocks'
    ]),
    swingBending() {
      return this.$store.getters.swingBending
    },
    inlineStyleSwing() {
      return {
        transform: `rotate(${this.swingBending / 2}deg)`
      }
    }
  },
  methods: {
    ...mapMutations({
      addRightBlock: ADD_RIGHT_SIDE_BLOCK,
    })
  },
  beforeMount() {
    this.addRightBlock()
  }
}
</script>

<style lang="scss" scoped>

.app {
  &__game-swing {
    width: 100%;
    height: 0.5rem;
    background-color: #263238;
    border-radius: 12px;
    position: relative;
    transform: rotate(0deg);
    transition: transform 0.4s ease-in-out;
  }
}

</style>
