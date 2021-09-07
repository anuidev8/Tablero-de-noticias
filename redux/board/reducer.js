import { boardActionTypes } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case boardActionTypes.SHOW_MODAL:
      console.log(action);
      return Object.assign({}, state, {
        modalIsActive: action.data.isActive,
        type: action.data.type,
      });

    default:
      return state;
  }
}
