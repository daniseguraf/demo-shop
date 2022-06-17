import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { addToCartApi } from '../../app/api';
import { addToCartStart, addToCartSuccess } from './cartSlice';

// Workers
function* onAddToCartStart(action) {
  console.log(action);
}

// Watchers
function* watcherAddToCart() {
  yield takeEvery(addToCartStart.type, onAddToCartStart);
}

export const cartSagas = [fork(watcherAddToCart)];
