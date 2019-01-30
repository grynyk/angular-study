import { Action } from "@ngrx/store";
import { AUTH_ACTION, AuthActions } from "./auth.actions";
import * as authState from './auth.state';

export function AuthReducers(state = authState.initialState, action:AuthActions) {
    switch(action.type){
        case AUTH_ACTION.LOGIN_SUCCESS: {
            return {
              ...state,
              isAuthenticated: true,
              user: {
                token: action.payload.token,
                email: action.payload.email
              },
              errorMessage: null
            };
          }
          case AUTH_ACTION.LOGIN_FAILURE: {
            return {
              ...state,
              errorMessage: 'Incorrect email'
            };
          }
          case AUTH_ACTION.SIGNUP_SUCCESS: {
            return {
              ...state,
              isAuthenticated: true,
              user: {
                token: action.payload.token,
                email: action.payload.email
              },
              errorMessage: null
            };
          }
          case AUTH_ACTION.SIGNUP_FAILURE: {
            return {
              ...state,
              errorMessage: 'Incorrect email'
            };
          }
          case AUTH_ACTION.LOGOUT: {
            return authState.initialState;
          }
        default:
            return state;
    }

}