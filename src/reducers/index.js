import { combineReducers } from 'redux';
import WaetherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WaetherReducer
});

export default rootReducer;
