import { CHANGE_YEAR } from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case CHANGE_YEAR:
			state = action.payload;
			return state;
			break;
		default: 
			return 3
			break;
	}
}
