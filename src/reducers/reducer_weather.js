import { FETCH_WEATHER } from '../actions/index';

export default function ( state = [] , action ){
//console.log ( ' Action Recived ', action)

switch (action.type) {
  case FETCH_WEATHER:
    return [action.payload.data, ...state];
    break;


}

return state;

}
