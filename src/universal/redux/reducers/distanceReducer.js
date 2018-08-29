import { CHANGE_DISTANCE } from '../consts';

const initialState = {
	distance: 0,
	reloadMap: true
};

export default function distanceReducer(state = {}, action) {
	switch(action.type) {
		case CHANGE_DISTANCE:
			const distance = action.distance;
			return Object.assign({}, state, {distance});
		default:
			return state;
	}
}

