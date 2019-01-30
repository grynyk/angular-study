import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { AUTH_ACTION, Login, LoginSuccess, LoginFailure, Signup, SignupSuccess, SignupFailure } from './auth.actions';
import { User } from '../models/user.model';


@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: AuthService,
        private router: Router,
    ) { }

    @Effect()
    Login: Observable<any> = this.actions
        .ofType(AUTH_ACTION.LOGIN)
        .map((action: Login) => action.payload)
        .switchMap(payload => {
            return this.authService.login(payload.email, payload.password)
                .map((user:any) => {
                    console.log(user);
                    return new LoginSuccess({ token: user.token, email: payload.email });
                })
                .catch((error) => {
                    console.log(error);
                    return Observable.of(new LoginFailure({ error: error }));
                });
        });

    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AUTH_ACTION.LOGIN_SUCCESS),
        tap((user:any) => {
            localStorage.setItem('token', user.payload.token);
            this.router.navigateByUrl('/');
        })
    );

    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AUTH_ACTION.LOGIN_FAILURE)
    );

    @Effect()
    SignUp: Observable<any> = this.actions
        .ofType(AUTH_ACTION.SIGNUP)
        .map((action: Signup) => action.payload)
        .switchMap(payload => {
            return this.authService.signup(payload.email, payload.password)
                .map((user:any) => {
                    console.log(user);
                    return new SignupSuccess({ token: user.token, email: payload.email });
                })
                .catch((error) => {
                    console.log(error.error);
                    return Observable.of(new SignupFailure({ error: error }));
                });
        });

    @Effect({ dispatch: false })
    SignUpSuccess: Observable<any> = this.actions.pipe(
        ofType(AUTH_ACTION.SIGNUP_SUCCESS),
        tap((user:any) => {
            localStorage.setItem('token', user.payload.token);
            this.router.navigateByUrl('/login');
        })
    );

    @Effect({ dispatch: false })
    SignUpFailure: Observable<any> = this.actions.pipe(
        ofType(AUTH_ACTION.SIGNUP_FAILURE)
    );

    @Effect({ dispatch: false })
    public LogOut: Observable<any> = this.actions.pipe(
        ofType(AUTH_ACTION.LOGOUT),
        tap((user:any) => {
            localStorage.removeItem('token');
        })
    );
}