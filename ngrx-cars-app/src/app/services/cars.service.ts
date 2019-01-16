import { Injectable } from "@angular/core";
import { AppState } from "../redux/app.state";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Car, Cars } from "../models/car.model";
import { LoadCars, AddCar, DeleteCar, UpdateCar } from "../redux/cars.action";
import { Observable } from "rxjs";

@Injectable()
export class CarsService {

    static BASE_URL = 'http://localhost:3004';

    constructor(private httpClient: HttpClient, private store: Store<AppState>) {

    }

    preloadCars(): Observable<Car[]>{
        return this.httpClient.get(`${CarsService.BASE_URL}/cars`).pipe(map((cars:any) => cars));
    }

    loadCars(): void{
        this. preloadCars().subscribe(res => {
            console.log(res);
            this.store.dispatch(new LoadCars(res));
        });
    }

    addCar(car:Car){
        this.httpClient.post(`${CarsService.BASE_URL}/cars`,car).pipe(map((cars:Car) => cars)).subscribe(res => {
            console.log(res);
            this.store.dispatch(new AddCar(car));
        });
    }

    deleteCar(car:Car){
        this.httpClient.delete(`${CarsService.BASE_URL}/cars/${car.id}`).pipe(map((cars:Car) => cars)).subscribe(res => {
            console.log(res);
            this.store.dispatch(new DeleteCar(car));
        });
    }

    updateCar(car:Car){
        this.httpClient.put(`${CarsService.BASE_URL}/cars/${car.id}`, car).pipe(map((cars:Car) => cars)).subscribe(res => {

            this.store.dispatch(new UpdateCar(res));
        });
    }

}