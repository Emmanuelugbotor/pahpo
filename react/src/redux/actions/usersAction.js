import axios from "axios";
import * as actionTypes from "../constants/usersConstant";
import URL from "../../constant/url";

export const signin = (email, password) => async (dispatch) => {

  try {
    

    const { data } = await axios.post(`${URL}/memberslogin`, {
      email,
      password,
    });
    console.log("DATASSSSSSS", data);
    dispatch({
      type: actionTypes.USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
    // localStorage.setItem("userErr", JSON.stringify(data));
  } catch (error) {

    dispatch({
      type: actionTypes.USER_SIGNIN_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch({ type: actionTypes.USER_SIGNOUT });
};

export const register = (body) => async (dispatch) => {
  dispatch({
    type: actionTypes.USER_REGISTER_REQUEST,
    payload: {
      body,
    },
  });
  
  try {
    const { data } = await axios.post(`${URL}/register`, { body });
    console.log("data", data);

    // dispatch({type: actionTypes.USER_REGISTER_SUCCESS, payload: data  })
    // dispatch({type: actionTypes.USER_SIGNIN_SUCCESS, payload: data  })
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log("error.response", error);

    // dispatch({
    //     type: actionTypes.USER_REGISTER_FAIL,
    //     payload: error.response.data.error ? error.response.data.error : error.message
    // })
  }
};
