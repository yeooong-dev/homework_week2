import { createStore, combineReducers } from "redux";
import todos from '../modules/todos';

//store
//todos가 갖고 있는게 reducer와 전역 관리 state가 있다.
const rootReducer = combineReducers({todos});
const store = createStore(rootReducer);

export default store


//Dispatch, UI는 사실 하나로 보면 됨

// ex) Dispatch 투수(공 던지는 사람)
// ex) store 포수(공 받는 사람)
// ex) 공 = action(매개체)