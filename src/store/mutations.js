import {
    ADD_FALLING_BLOCK,
    ADD_LEFT_SIDE_BLOCK,
    ADD_RIGHT_SIDE_BLOCK,
    FALLING_BLOCKS_COUNT,
    INITIALIZE_FALLING_BLOCKS, MOVE_LEFT, MOVE_RIGHT, RESET_STATE,
    TOGGLE_PAUSE
} from "@/constants";
import {generateRandomBlock} from "@/helpers";

export default {
    changeStep(state,step) {
        state.currentStep = step;
    },
    getPlayerName(state, playerName) {
        state.playerName = playerName;
    },
    setGameStatusOver(state) {
        state.gameStatus = true
    },
    refreshGameStatusOver(state) {
        state.gameStatus = false
    },
    [TOGGLE_PAUSE](state) {
        state.isPaused = !state.isPaused
    },
    [ADD_RIGHT_SIDE_BLOCK](state) {
        const randomBlock = generateRandomBlock();
        state.rightSideBlocks.push(randomBlock)
    },
    [ADD_LEFT_SIDE_BLOCK](state) {
        const block = state.fallingBlocks.shift();
        state.leftSideBlocks.push(block);
    },
    [INITIALIZE_FALLING_BLOCKS](state){
        state.fallingBlocks = [];
        for(let i = 0; i < FALLING_BLOCKS_COUNT; i++){
            const randomBlock = generateRandomBlock();
            state.fallingBlocks.push(randomBlock)
        }
    },
    [ADD_FALLING_BLOCK](state){
        const randomBlock = generateRandomBlock();
        state.fallingBlocks.push(randomBlock)
    },
    [MOVE_RIGHT](state){
        if (state.isPaused || state.fallingBlocks[0].offset - 1 <= 0) return;
        state.fallingBlocks[0].offset -= 1;
    },
    [MOVE_LEFT](state){
        if (state.isPaused || state.fallingBlocks[0].offset + 1 > 5) return;
        state.fallingBlocks[0].offset += 1;
    },
    [RESET_STATE](state) {
        state.isPaused = true;
        state.leftSideBlocks = [];
        state.rightSideBlocks = [];
        state.fallingBlocks = []
    },
}
