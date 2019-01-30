import { createFeatureSelector } from '@ngrx/store';
import { AppState } from "./app.states";

export const SelectAuthState = createFeatureSelector<AppState>('auth');