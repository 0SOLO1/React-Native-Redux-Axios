import types from "../types";

const data = {
  dummyData: ''
}
export const getDummyData = (state = data, action) => {
    switch (action.type) {
      case types.DUMMY_DATA:
        return action;
      default:
        return {...state};
    }
  };