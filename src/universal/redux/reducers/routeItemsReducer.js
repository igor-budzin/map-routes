import { CHANGE_ROUTE_ITEMS } from '../consts';

export default function routeItemsReducer(state = {}, action) {
	switch(action.type) {
		case CHANGE_ROUTE_ITEMS:
			const route = action.route;
			return Object.assign({}, state, {...route});;
		default:
			return state;
	}
}

