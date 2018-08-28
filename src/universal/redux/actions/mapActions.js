export const CHANGE_DISTANCE = 'CHANGE_DISTANCE';

export function changeDistanceAction(distance) {
	return {
		type: CHANGE_DISTANCE,
		distance
	};
}