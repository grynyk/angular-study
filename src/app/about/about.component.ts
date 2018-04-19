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
  constructor(private route:ActivatedRoute) { 


  }

  ngOnInit() {
    //when you want to move all logic away to service
    // this.service.getUsers().then(users => this.users = users);

    //
    this.route.data.forEach((data:{users:User[]})=>{
      console.log(data);
      this.users = data.users;
    })
  }

  
}
