import axios from "axios";
import url from "src/constant/url";
import { CART_RESET } from "../constants/cartConstant";
import * as actionTypes from "../constants/orderConstants";

export const createOrder =
  (response, cartItems, shippingAddress) => async (dispatch, getState) => {
    dispatch({
      type: actionTypes.ORDER_CREATE_REQUEST,
      payload: { response, cartItems, shippingAddress },
    });
    try {
      const {
        userSignIn: { userInfo },
      } = getState();
      const { data } = await axios.post(
        `${url}/orders`,
        { response, cartItems, shippingAddress },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      dispatch({ type: actionTypes.ORDER_CREATE_SUCCESS, payload: data });
      dispatch({ type: CART_RESET });
      localStorage.removeItem("cart");
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: actionTypes.ORDER_CREATE_FAIL,
        payload: error.message,
      });
    }
  };

export const membershipPayment =
  (response, cartItems, shippingAddress) => async (dispatch, getState) => {
    dispatch({
      type: actionTypes.ORDER_CREATE_REQUEST,
      payload: { response, cartItems, shippingAddress },
    });
    try {
      const { data } = await axios.post(
        `${url}/membershipfee`,
        { response, cartItems, shippingAddress }
      );

      dispatch({ type: actionTypes.ORDER_CREATE_SUCCESS, payload: data });
      dispatch({ type: CART_RESET });
      localStorage.removeItem("cart");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      dispatch({
        type: actionTypes.ORDER_CREATE_FAIL,
        payload: error.message,
      });
    }
  };
