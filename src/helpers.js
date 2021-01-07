import {MIN_WEIGHT, MAX_WEIGHT, TEETER_TOTTER_WIDTH, SHAPE_COUNT} from '@/constants'

export function generateRandomBlock() {
    const id = new Date().toISOString();
    const type = Math.floor(Math.random() * SHAPE_COUNT);
    const weight = Math.floor(Math.random() * MAX_WEIGHT) + MIN_WEIGHT;
    const offset = Math.floor(Math.random() * TEETER_TOTTER_WIDTH / 2) + 1;
    const height = weight * 8;

    return {
        id,
        type,
        weight,
        offset,
        height
    }
}
