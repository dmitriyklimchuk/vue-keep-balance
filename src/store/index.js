import { createStore } from 'vuex'
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";

export default createStore({
  state: {
    playerName: '',
    currentStep: "the-start",
    gameStatus: false,
    isPaused: true,
    leftSideBlocks: [],
    rightSideBlocks: [],
    fallingBlocks: [],
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
})
