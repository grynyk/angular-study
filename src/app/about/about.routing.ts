import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { AboutSectionComponent } from './about-section.component';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';
/*Child routes 'children' , wherever we define children , we always need to have path with blank in it
(and this is goind to route 'aboute' in this case,to display the data of about page)
It makes easy to switch router-outlets and keep nesting things , so we can have child routes and child outlets
*/ 
const aboutRoutes: Routes = [
    {
        // path: 'about',
        path: '',
        component:AboutSectionComponent,
        children:[
            {
                path:'',
                component:AboutComponent,
                //'data' when we want to use info that we already have: strings etc.
                // data:{ message:'this is my data message'}
                // resolve: Http requests , grab info from somwhere ,etc.
                resolve:{
                    users:AboutUsersResolve
                }
            },
            {
                path:':username',
                component:AboutUserComponent,
                resolve:{
                    user:AboutUserResolve
                }
            }
        ]
    },

    // { path: 'about', component:AboutComponent },
    // { path: 'about/:username', component:AboutUserComponent },
];
export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);