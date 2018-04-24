import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { User } from '../shared/models/user';


@Component({
  selector: 'about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: User[];
  //private service: UserService - to load service
  constructor(private route:ActivatedRoute) { 


  }

  ngOnInit() {
    //when you want to move all logic away to service when the data is pretty large
    // this.service.getUsers().then(users => this.users = users);

    //Type safety : {users:User[]} - data has to be an Object of users and its going to be Array of users
    this.route.data.forEach((data:{users:User[]})=>{
      console.log(data);
      this.users = data.users;
    })
  }

  
}
