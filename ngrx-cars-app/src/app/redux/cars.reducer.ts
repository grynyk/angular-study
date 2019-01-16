import { Car } from "../models/car.model";
import { CAR_ACTION, CarsActions } from "./cars.action";

const initialState = {
    cars:[]
}

export function carsReducer(state = initialState, action: CarsActions){
    switch(action.type){
        case CAR_ACTION.ADD_CAR:
        return {
            ...state,
            cars:[...state.cars, action.payload]
        }
        case CAR_ACTION.DELETE_CAR:
        return {
            ...state,
            cars:[...state.cars.filter(res => res.id !== action.payload.id)]
        }
        case CAR_ACTION.UPDATE_CAR:
        return {
            ...state,
            cars:[...state.cars.map(res => {
                if(res.id === action.payload.id){
                    res.isSold=true;
                    return res;
                }else{
                    return res;
                }
            })]
        }
        case CAR_ACTION.LOAD_CARS:
        return {
            ...state,
            cars:[...action.payload]
        }
        default:
            return state

    }
}