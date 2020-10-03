import * as constants from "../constants";

const initialState = {
  exampleData: {},
  isSomething: false,
  balance: 100,
  bid: 10,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.EXAMPLE_ACTION:
      return {
        ...state,
        isSomething: true,
      };

    case constants.EXAMPLE_ACTION_SECOND:
      return {
        ...state,
        exampleData: action.exampleData,
        isSomething: false,
      };

    default:
      return state;
  }
};
