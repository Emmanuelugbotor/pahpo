import * as actionTypes from "../constants/usersConstant";

export const userSignInReducer = (state = {  }, action) => {

  switch (action.type) {
    case actionTypes.USER_SIGNIN_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        // state: action.payload,
        userInfo: action.payload
      };

    case actionTypes.USER_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case actionTypes.USER_SIGNOUT:
      return { }
      
    default:
      return state;
  }
};


export const userRegisterReducer = (state = {  }, action) => {

  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return {
        regloading: true,
        regsuccess: false,
        
      };

    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        regloading: false,
        regsuccess: true,
        reguserInfo: action.payload
      };

    case actionTypes.USER_REGISTER_FAIL:
      return {
        regloading: false,
        regsuccess: false,
        regerror: action.payload,
      }
       
    default:
      return state;
  }
};

