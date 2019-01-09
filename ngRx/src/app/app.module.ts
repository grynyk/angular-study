import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';
import { carsReducer } from './redux/cars.reducer';
import { CarsService } from './services/cars.service';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffects } from './redux/cars.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    EffectsModule.forRoot([CarsEffects]),
    StoreModule.forRoot({carPage: carsReducer}),
    RouterModule.forRoot([
      {
        path: '', component:AppComponent
      }
    ]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
