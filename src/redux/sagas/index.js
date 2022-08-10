import register from "../../api";
import { REG_FAIL,REG_SUCCED,REG_REQUESTED } from "../../constantStore/constants";
import {put, call, takeEvery, all} from 'redux-saga/effects'


function* fetchReg(action){
    try{
        const CallResult = call(register,action.payload.data)
        const RegData = yield CallResult
        const putResult = put({
            type:REG_SUCCED,
            payload:{
                data:RegData
            },
        })
        console.log(putResult)
        yield putResult
    }catch(e){
        yield put ({
            type:REG_FAIL,
            payload:'Извините что-то пошло не так'
        })
        console.log(e); 
    }
}

export function* RegWatcherSaga(){
    yield takeEvery(REG_REQUESTED,fetchReg)
}

export default function* rootSaga(){
    yield all([
        RegWatcherSaga()
    ])
}