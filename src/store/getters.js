import {MAX_BENDING, MAX_SIDES_DIFFERENCE, MIN_BENDING} from "@/constants";
import {getBlockPower} from "@/helpers";


export default {
    leftSum(state) {
        return getBlockPower(state.leftSideBlocks)
    },
    rightSum(state) {
        return getBlockPower(state.rightSideBlocks)
    },
    swingBending(state, getters) {
        const {leftSum, rightSum} = getters;

        if (!leftSum) return MAX_BENDING;
        if (leftSum === rightSum) return 0;
        return leftSum > rightSum ? (leftSum - rightSum) / leftSum * -100 :
            (rightSum - leftSum) / rightSum * 100
    },
    gameOverStatus(state, getters) {
        const {leftSum, rightSum, swingBending} = getters;

        return swingBending > MAX_BENDING ||
            swingBending < MIN_BENDING ||
            Math.abs(leftSum - rightSum) > MAX_SIDES_DIFFERENCE
    }
}
