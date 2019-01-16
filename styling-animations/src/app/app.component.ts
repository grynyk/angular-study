import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courseGoals = [
    {title:'Master Styling',isActiveGoal:true},
    {title:'Understanding',isActiveGoal:false},
    {title:'Master Animation',isActiveGoal:false}
  ];
}
