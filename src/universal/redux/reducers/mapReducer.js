import { CHANGE_DISTANCE } from '../actions/mapActions';

const initialState = {
	distance: 0,
	reloadMap: true
};

export default function distance(state = initialState, action) {
	switch(action.type) {
		case CHANGE_DISTANCE:
			// console.log(action.distance)
			return Object.assign({}, state, [action.distance]);
		default:
			return state;
	}
}

