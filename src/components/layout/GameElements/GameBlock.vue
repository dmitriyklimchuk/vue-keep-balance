<template>
  <div :class="blockClassName"
       :style="blockInlineStyle"
       :ref="'element'">
    {{ block.weight }}
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true
    },
    side: {
      type: Boolean
    },
    top: {
      type: Number
    }
  },
  methods: {
    roundUp(number) {
      return Math.round(number * 100) / 100;
    },
    getBlockBottomCoord() {
      const domElement = this.$refs.element;

      return domElement.getBoundingClientRect().bottom;
    }
  },
  computed: {
    blockClassName() {
      const {type} = this.block;

      switch (type) {
        case 0:
          return 'block__circle';
        case 1:
          return 'block__triangle';
        case 2:
          return 'block__rectangle'
      }
    },
    blockInlineStyle() {
      const {offset, type, height} = this.block;
      const {side, roundUp, top} = this;

      const topOffset = top || 0;
      const leftOffset = side ? 50 + offset * 10 : 50 - offset * 10;
      const blockHeight = type !== 1 ?
          {
            height:roundUp(height) <= 16 ? '24px' : `${roundUp(height)}px`,
            width: roundUp(height) <= 16 ? '24px' : `${roundUp(height)}px`,
            lineHeight: roundUp(height) <= 16 ? '24px' : `${roundUp(height)}px`,
          }
          :
          {
            borderWidth: roundUp(height) <= 16 ? '0 28px 28px 14px' : `0 ${roundUp(height)}px ${roundUp(height)}px ${roundUp(height / 2)}px`,
            lineHeight: roundUp(height) <= 16 ? '30px' : `${roundUp(height * 1.2)}px`
          };

      return {
        top: `${topOffset}px`,
        left: `${leftOffset}%`,
        ...blockHeight
      }
    }
  },
}
</script>

<style lang="scss" scoped>

.block {
  &__circle,
  &__rectangle,
  &__triangle {
    color: #ffffff;
    position: absolute;
    transform: translate(-50%, -100%);
    text-align: center;
    font-weight: 600;
  }

  &__circle {
    border-radius: 50%;
    background-color: #616161;
  }

  &__triangle {
    width: 0;
    height: 0;
    line-height: 4rem;
    border-style: solid;
    border-color: transparent transparent #9e9e9e transparent
  }

  &__rectangle {
    border-radius: 6px;
    background-color: #757575;
  }
}
</style>
