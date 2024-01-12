import { put, takeEvery } from "redux-saga/effects"
import { SET_USER_DATA, USER_LIST } from "./reduxOperations/Constant"

// always use * to handle the itrative function
function* userList(){
    // console.warn('Saga function called')
    const url = 'https:dummyjson.com/users/1'
    // yield to handle await ans async 
    let data = yield fetch(url);
    data = yield data.json();
    // console.warn('data in saga',data)

    yield put({type:SET_USER_DATA,data})
}
function* SagaData(){
    yield takeEvery(USER_LIST,userList)
}

export default SagaData