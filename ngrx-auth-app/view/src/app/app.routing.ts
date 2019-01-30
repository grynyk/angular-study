import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomeComponent } from './modules/main/home/home.component';
import { SignUpComponent } from './modules/auth/components/sign-up/sign-up.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: HomeComponent},
  { path: '**', redirectTo: '/' }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});