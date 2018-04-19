import { Component,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service'

@Component({
    template:`
    <a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>
    <div class="jumbotron" *ngIf="user">
    <h1>{{ user.name }} ({{user.username}})</h1>
    <img [src]="user.avatar" class="img-responsive img-circle">
    </div>`
  })

  export class AboutUserComponent implements OnInit {
      user:User;
    constructor(private route: ActivatedRoute,
        private service: UserService,
        private router : Router
    ){
    }
    ngOnInit(){
       let username =  this.route.snapshot.params['username']; //usage of the snapshot way of ActivatedRoute to grab the username route parameter

        this.service.getUser(username).then(user=>{
        this.user=user;
    });
    }

    goBack(){
        this.router.navigate(['/about']); //to route/navigate from the class
        // window.history.back(); //AngularRouter push date history(default browser history) , and we can immediatly go back to the previous page.
    }
  }