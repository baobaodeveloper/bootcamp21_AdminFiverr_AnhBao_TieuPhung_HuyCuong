import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import loadingReducer from '../components/loading/loadingSlice';
import listWorkPageReducer from '../pages/JobPage/listWorkPageSlice';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { listWorkPageReducer, loadingReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
