import { Component } from '@angular/core';
import { ApiService } from './api-service.service';
@Component({
  selector: 'app-root',
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arr = [];

  constructor(private apiService: ApiService){}
  ngOnInit() {
    this.apiService.getData()
      .subscribe(result => {
        this.arr = result;
        console.log(this.arr);
      });

  }
}