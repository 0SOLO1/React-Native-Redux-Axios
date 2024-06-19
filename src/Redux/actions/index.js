import { useDispatch } from "react-redux";
import types from "../types";
import store from "../store";

const {dispatch} = store;
export const setDummyData = data => {
  dispatch({
    type: types.DUMMY_DATA,
    payload: data,
  });
};
