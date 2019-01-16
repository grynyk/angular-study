import { Component, OnInit } from '@angular/core';
import { Car, Cars } from '../models/car.model';
import * as moment from 'moment';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { AddCar } from '../redux/cars.action';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
  private id:number = 3;
  carName = "";
  carModel = "";

  constructor(private store: Store<AppState>,private carsService:CarsService) { }

  ngOnInit() {
  }

  onAdd(){
    if(this.carModel==='' || this.carName===''){
      return
    }

    const car = new Car(this.carName, moment().format('DD.MM.YY'), this.carModel, false);

    this.carsService.addCar(car);

    // this.store.dispatch(new AddCar(car));
    
    this.carModel = '';
    this.carName = '';
  }

  onLoad(){
    console.log('onLoad');
    this.carsService.loadCars();
  }

}
