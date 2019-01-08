import { Action } from "@ngrx/store";
import { Car } from "../models/car.model";
import { CAR_ACTION, AddCar } from "./cars.action";

const initialState = {
    cars:[
        new Car('Ford','12.12.12','Focus',false,1),
        new Car('Opel','12.10.10','Corsa',false,2),
        new Car('Audi','12.10.11','A4',false,3),
    ]
}

export function carsReducer(state = initialState, action: AddCar){
    switch(action.type){
        case CAR_ACTION.ADD_CAR:
        return {
            ...state,
            cars:[...state.cars, action.payload]
        }
        default:
            return state

    }
}