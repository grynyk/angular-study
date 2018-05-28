import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user'
import { UserService } from '../../../shared/services/user.service'
@Component({
  selector: 'dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {
  users: User[];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().then(users=>{
      this.users=users;
    });
  }

}
