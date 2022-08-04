import { all, call } from 'redux-saga/effects';
import {
  followCreateJob,
  followDeleteJobDetail,
  followGetJobDetailById,
  followGetListTypeJob,
  followGetListWork,
  followGetListWorkByName,
} from '../pages/JobPage/listWorkSaga';

export function* rootSaga() {
  yield all([
    call(followGetListWork),
    call(followGetListWorkByName),
    call(followGetListTypeJob),
    call(followCreateJob),
    call(followDeleteJobDetail),
    call(followGetJobDetailById),
  ]);
}
