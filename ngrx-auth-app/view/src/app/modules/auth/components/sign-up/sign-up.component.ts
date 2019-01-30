import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Signup } from '../../store/auth.actions';
import { Observable } from 'rxjs';
import { SelectAuthState } from 'src/app/store/app.selectors';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(SelectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new Signup(payload));
  }

}