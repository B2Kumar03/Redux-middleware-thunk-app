import { loading } from "../Loading/actionCreator";
import { ADD_DATA } from "./actionItem";
import axios from "axios";
import { error } from "../Error/actionCreator";

export const addData = (data) => {
  return { type: ADD_DATA, payload: data };
};

export const fetchData = async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios({
      url: `http://localhost:8080/todo`,
      method: "GET",
    });
    dispatch(addData(data));
    dispatch(loading());
  } catch (error1) {
    dispatch(error());
    dispatch(loading());
    console.log(error1);
  }
};

export const toggleStatus = (data, id) => {
  return async function (dispatch) {
    try {
      const { data1 } = await axios.patch(`http://localhost:8080/todo/${id}`, {
        status: data,
      });
      dispatch(fetchData);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteData = (id) => {
  return async (dispatch) => {
    try {
      console.log("Dele");
      const { data1 } = await axios.delete(`http://localhost:8080/todo/${id}`);
      dispatch(fetchData);
    } catch (error) {
      console.log(error);
    }
  };
};

export const postData = (data) => {
  console.log(data);
  return async (dispatch) =>{
    try {
      console.log(data);
      const { data1 } = await axios.post(`http://localhost:8080/todo`,data);
      console.log("data Posted");
      dispatch(fetchData);
    } catch (error) {
      console.log(error);
    }
  };
};
