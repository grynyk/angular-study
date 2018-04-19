import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

//it checks in order if there's path to route to , so if we'll place path '**' at the beginning of the Routes[] ,every single page will returns 404(the order matteres!)
//Handle Redirects: { path: '', redirectTo:'about',pathMatch:'full' },

/** pathMatch: 'full' means, that the whole URL path needs to match and is consumed by the route matching algorithm.
    pathMatch: 'prefix' means, the first route where the path matches the start of the URL is choosen, but then the route matching algorithm is continuing 
                searching for matching child routes where the rest of the URL matches.**/
const appRoutes: Routes = [
    { path: '', component:HomeComponent },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    { path: 'contact', component:ContactComponent },
    { path: '**',component:NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);