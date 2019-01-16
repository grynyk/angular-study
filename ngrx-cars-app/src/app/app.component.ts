import { Component, OnInit } from '@angular/core';
import { Cars, Car } from './models/car.model';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
//  public cars: Car[] = [];

 constructor(private store: Store<AppState>){

 }
 public carState: Observable<Cars>
 ngOnInit(){
  //  this.store.select('carPage').subscribe(({cars}) =>{
  //    this.cars = cars;
  //  });

  this.carState = this.store.select('carPage');
 }

//  onAdd(car: Car){
//    this.cars.push(car);
//  }

//  onDelete(car: Car){
//   this.cars = this.cars.filter(c=> c.id !== car.id);
// }

}
