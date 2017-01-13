import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
		// return state.concat([action.payload.data]); // not mutating with push, but creating a new array
		console.log(action.payload.data);
		return [ action.payload.data, ...state ]; // ES6 way of doing it

	}
	return state;
}