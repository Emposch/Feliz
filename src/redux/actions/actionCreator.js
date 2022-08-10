import {REG_REQUESTED} from '../../constantStore/constants'

export const RegData = (payload) =>({
    type: REG_REQUESTED,
    payload,
})