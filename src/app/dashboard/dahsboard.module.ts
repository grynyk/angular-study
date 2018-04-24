import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details/dashboard-user-details.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home/dashboard-users-home.component';
import { DashboardUsersComponent } from './users/dashboard-users/dashboard-users.component';
import { dashboardRouting } from './dashboard.routing';
import { UserService } from '../shared/services/user.service';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports:[
        CommonModule,
        dashboardRouting,
        FormsModule
    ],
    declarations:[
        DashboardComponent, 
        DashboardUserDetailsComponent,
        DashboardUsersHomeComponent,
        DashboardUsersComponent
    ],
    providers:[UserService]
})

export class DashboardModule{}