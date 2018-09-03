import { 
	REQUEST_SAVE_ROUTE,
	REQUEST_SAVE_ROUTE_SUCCESS,
	REQUEST_SAVE_ROUTE_ERROR
} from '../consts';

const initialState = {
	saveModalLoading: false
};

export default function saveRouteReducer(state = initialState, action) {
	const status = action.loading;
	switch(action.type) {
		case REQUEST_SAVE_ROUTE:
			return {
				saveModalLoading: status
			};
		case REQUEST_SAVE_ROUTE_SUCCESS:
			return {
				saveModalLoading: status
			};
		case REQUEST_SAVE_ROUTE_ERROR:
			return {
				saveModalLoading: status
			};
		default:
			return state;
	}
}

