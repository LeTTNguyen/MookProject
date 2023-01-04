import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Contants/ActionType";



let initialState = {
    showForm: false,
  };
let FormReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_INPUT_FORM:
        return {
          ...state,
          showForm: true,
        };
      case CLOSE_INPUT_FORM:
        return {
          ...state,
          showForm: false,
        };
      
      default:
        return { ...state };
    }
  };
  export default FormReducer;
  