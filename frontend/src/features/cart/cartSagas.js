import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { addToCartApi } from '../../app/api';
import { addToCartStart, addToCartSuccess, addToCartFailed } from './cartSlice';

// Workers
function* onAddToCartStart(action) {
  const { productId, qty } = action.payload;
  try {
    const response = yield call(addToCartApi, productId);
    if (response.status === 200) {
      yield put(
        addToCartSuccess({
          id: response.data._id,
          name: response.data.name,
          image: response.data.image,
          price: response.data.price,
          countInStock: response.data.countInStock,
          qty,
        })
      );
    }
  } catch (error) {
    yield put(addToCartFailed(error.response.data.message));
  }
}

// Watchers
function* watcherAddToCart() {
  yield takeEvery(addToCartStart.type, onAddToCartStart);
}

export const cartSagas = [fork(watcherAddToCart)];
