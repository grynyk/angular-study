import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard-user-details',
  templateUrl: './dashboard-user-details.component.html',
  styleUrls: ['./dashboard-user-details.component.css']
})
export class DashboardUserDetailsComponent implements OnInit {
  user: User;
  editName:string;
  constructor(private service: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let username;
    //observable way of a grabbing data - changing the data in the component
    this.route.params.forEach(params => {
      username = params['username'];
      this.service.getUser(username).then(user => {
        console.log(user);
        this.user = user;
        this.editName = user.name
      });
    })
  }
//apply changes
  saveButton(){
    this.user.name = this.editName;
    this.router.navigate(['/dashboard/users']);
  }
//navigate to dashboard/users
  cancelButton(){
    this.router.navigate(['/dashboard/users']);
  }

}
