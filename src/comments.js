import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

const comments = function(state = [], action) {
	switch (action.type) {
		case ADD_COMMENT:
			return  [{
					id: action.id,
					text: action.text,
					votes: 0
				}, ...state]; // does this add only "comments" from "state" or whole "state"?
            
		case REMOVE_COMMENT:
			return  state.filter(comment => comment.id !== action.id);

        case EDIT_COMMENT:
                return state.map(comment => comment.id === action.id ?
                    { ...comment, text: action.text} : comment);

        case THUMB_UP_COMMENT:
            console.log(state, action)
                return state.map(comment => comment.id === action.id ?
                    { ...comment, votes: comment.votes + 1} : comment);

        case THUMB_DOWN_COMMENT:
                return state.map(comment => comment.id === action.id ?
                    { ...comment, votes: comment.votes - 1} : comment);

            default:
                return state;
    }
}

export default comments;