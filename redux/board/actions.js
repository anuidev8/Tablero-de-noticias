export const boardActionTypes = {
  SHOW_MODAL: "SHOW_MODAL",
};

export const showModal = (state) => (dispatch) => {
  return dispatch({
    type: boardActionTypes.SHOW_MODAL,
    data: { isActive: state.isActive, type: state.type },
  });
};
