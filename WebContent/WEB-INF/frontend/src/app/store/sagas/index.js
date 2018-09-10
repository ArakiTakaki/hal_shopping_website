import { put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  yield put({ type: 'INCREMENT' })
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}