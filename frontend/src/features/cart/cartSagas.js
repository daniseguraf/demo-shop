import { takeEvery, put, fork, call, select } from 'redux-saga/effects';
import { addToCartApi } from '../../app/api';
import {
  addToCartStart,
  addToCartSuccess,
  addToCartFailed,
  removeFromCartStart,
  removeFromCartSuccess,
} from './cartSlice';

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
      const { cartItems } = yield select((state) => state.cart);
      yield localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  } catch (error) {
    yield put(addToCartFailed(error.response.data.message));
  }
}

function* onRemoveFromCartStart(action) {
  yield put(removeFromCartSuccess(action.payload));

  const { cartItems } = yield select((state) => state.cart);
  yield localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Watchers
function* watcherAddToCart() {
  yield takeEvery(addToCartStart.type, onAddToCartStart);
}

function* watcherRemoveFromCart() {
  yield takeEvery(removeFromCartStart.type, onRemoveFromCartStart);
}

export const cartSagas = [fork(watcherAddToCart), fork(watcherRemoveFromCart)];
