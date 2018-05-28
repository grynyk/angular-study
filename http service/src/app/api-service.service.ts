import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private url= '../assets/test.json';
  constructor(private http: Http) {}
  //Http get
  getData () {
    return this.http.get(this.url)
      .map((res: Response) => res.json());
  }

  postData(data) {
    return this.http.post(this.url, data)
                     .map((res:Response) => res.json()) 
                     .catch((error:any) => Observable.throw('Server error')); 
  }   
  updateRequest(data) {
    return this.http.put(this.url, data)
                     .map((res:Response) => res.json()) 
                     .catch((error:any) => Observable.throw('Server error')); 
  }  

}