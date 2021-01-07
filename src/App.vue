<template>
  <div class="app">
    <TheHeader v-if="isStart === 'the-start'"></TheHeader>
    <TheCurrentStep></TheCurrentStep>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheCurrentStep from "@/components/TheCurrentStep";
export default {
  name: 'App',
  components: {
    TheHeader,
    TheCurrentStep,
  },
  computed: {
    isStart() {
      return this.$store.state.currentStep
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: #eeeeee;
    padding: 0;
    margin: 0;
  }

  .app {
    padding: 25px 15px;
  }

</style>
