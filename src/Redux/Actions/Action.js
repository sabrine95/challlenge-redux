import {INCRIMENT , DECRIMENT , SHOW } from './Type'

export const incriment = () => {
    return {
        type : INCRIMENT
    }
}

export const decriment = () => {
    return {
        type : DECRIMENT
    }
}

export const showCount = () => {
    return {
        type : SHOW
    }
}

