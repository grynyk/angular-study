import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { Logout } from '../../auth/store/auth.actions';
import { Observable } from 'rxjs';
import { SelectAuthState } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(SelectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  logout(): void {
    this.store.dispatch(new Logout);
  }
}
