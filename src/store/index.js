import { createStore } from 'redux';

const reducerFn = (state = { counter: 10 }, action) => {
  //Synchronus function
  //We should not mutate original state
  if(action.type === 'INC'){
    return {counter: state.counter+1}
  }
  if(action.type === 'DEC'){
    return {counter : state.counter-1}
  }
  if(action.type === 'ADD'){
    return {counter : state.counter+action.payload}
  }
  return state;
};
const store = createStore(reducerFn);
export default store;
