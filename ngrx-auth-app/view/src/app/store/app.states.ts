import * as auth from '../modules/auth/store/auth.state';

export interface AppState {
  authState: auth.State;
}