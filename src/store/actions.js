import {
    ADD_FALLING_BLOCK,
    ADD_LEFT_SIDE_BLOCK,
    ADD_RIGHT_SIDE_BLOCK,
    FINISH_FALLING, INITIALIZE_FALLING_BLOCKS,
    RESET_STATE,
    START_NEW_GAME
} from "@/constants";

export default {
    [FINISH_FALLING](context) {

        context.commit(ADD_LEFT_SIDE_BLOCK);
        context.commit(ADD_FALLING_BLOCK);
        if (this.state.leftSideBlocks.length && this.state.leftSideBlocks.length !== this.state.rightSideBlocks.length)
            context.commit(ADD_RIGHT_SIDE_BLOCK);

        if (this.getters.gameOverStatus) setTimeout(() => {
            context.commit('setGameStatusOver');
            context.commit(RESET_STATE);
        }, 0);

    },
    [START_NEW_GAME](context){
        context.commit(RESET_STATE);
        context.commit(ADD_RIGHT_SIDE_BLOCK);
        context.commit(INITIALIZE_FALLING_BLOCKS);
        context.commit('refreshGameStatusOver');
    }
}
