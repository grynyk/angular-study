import {Injectable} from '@angular/core'
import {Actions, Effect} from '@ngrx/effects'
import {AddCar, CAR_ACTION} from './cars.action'
import { CarsService } from '../services/cars.service';
import { Car } from '../models/car.model';
import { ofType } from '@ngrx/effects';
import { switchMap, mergeMap } from 'rxjs/operators';

@Injectable()
export class CarsEffects {

  constructor(private actions$: Actions, private service: CarsService) {}

  @Effect() loadCars = this.actions$.pipe(ofType(CAR_ACTION.ADD_CAR), switchMap((action: AddCar) => {
    return this.service.preloadCars()
  }), mergeMap((cars: Car[]) => {
    return [
      {
        type: CAR_ACTION.LOAD_CARS,
        payload: cars
      }
    ]
  }))

}
