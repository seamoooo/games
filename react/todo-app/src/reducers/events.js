import { READ_EVENTS } from '../actions';

// アプリケーションの状態の変更を担う
export default (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return state;
    default:
      return state;
  }
};
