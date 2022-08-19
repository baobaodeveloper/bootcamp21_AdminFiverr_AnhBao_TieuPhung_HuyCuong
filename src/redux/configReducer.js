import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import loadingReducer from '../components/loading/loadingSlice';
import listWorkPageReducer from '../pages/JobPage/listWorkPageSlice';
import listUserReducer from '../pages/userPage/listUserSlice';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { listWorkPageReducer, listUserReducer, loadingReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
