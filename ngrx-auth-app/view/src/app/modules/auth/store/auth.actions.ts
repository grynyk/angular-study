import { Action } from '@ngrx/store';
import { User } from "../models/user.model";

export namespace AUTH_ACTION {
    export const LOGIN = '[Auth] Login';
    export const LOGIN_SUCCESS = '[Auth] Login Success';
    export const LOGIN_FAILURE = '[Auth] Login Failure';
    export const SIGNUP = '[Auth] Signup';
    export const SIGNUP_SUCCESS = '[Auth] Signup Success';
    export const SIGNUP_FAILURE = '[Auth] Signup Failure';
    export const LOGOUT = '[Auth] Logout';
}

export class Login implements Action {
    readonly type = AUTH_ACTION.LOGIN;
    constructor(public payload: User) { }
}

export class LoginSuccess implements Action {
    readonly type = AUTH_ACTION.LOGIN_SUCCESS;
    constructor(public payload: any) { }
}

export class LoginFailure implements Action {
    readonly type = AUTH_ACTION.LOGIN_FAILURE;
    constructor(public payload: any) { }
}

export class Signup implements Action {
    readonly type = AUTH_ACTION.SIGNUP;
    constructor(public payload: User) { }
}

export class SignupSuccess implements Action {
    readonly type = AUTH_ACTION.SIGNUP_SUCCESS;
    constructor(public payload: any) { }
}

export class SignupFailure implements Action {
    readonly type = AUTH_ACTION.SIGNUP_FAILURE;
    constructor(public payload: any) { }
}

export class Logout implements Action {
    readonly type = AUTH_ACTION.LOGOUT;
}

export type AuthActions = Login | LoginSuccess | LoginFailure | Signup | SignupSuccess | SignupFailure | Logout;