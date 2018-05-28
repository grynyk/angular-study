import {ModuleWithProviders } from '@angular/core'
import { Routes,RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details/dashboard-user-details.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home/dashboard-users-home.component';
import { DashboardUsersComponent } from './users/dashboard-users/dashboard-users.component';

export const dashboardRoutes: Routes = [
    {
        path:'',
        children:[
            {
                path:'',
                component : DashboardComponent
            },
            {
                path:'users',
                component:DashboardUsersComponent,
                children:[
                    {
                        path:'',
                        component:DashboardUsersHomeComponent
                    },
                    {
                        path:':username',
                        component:DashboardUserDetailsComponent
                    }
                ]
            }
        ]
    }
]

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);