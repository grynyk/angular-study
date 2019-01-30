import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { MainModule } from './modules/main/main.module';
import { AppRouting } from './app.routing';
import { Reducers } from './store/app.reducers';
import { Effects } from './store/app.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    MainModule,
    AppRouting,
    StoreModule.forRoot(Reducers , {}),
    EffectsModule.forRoot([Effects.auth]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
