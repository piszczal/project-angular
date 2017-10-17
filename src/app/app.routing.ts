import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { AddEventPageComponent } from './add-event-page/add-event-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ActivationGuard } from './providers/ActivationGuards';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent, canActivate: [ActivationGuard]},
    {path: 'login', component: LoginPageComponent},
    {path: 'events', component: EventsPageComponent, canActivate: [ActivationGuard]},
    {path: 'event', component: AddEventPageComponent, canActivate: [ActivationGuard]},
    {path: 'users', component: UsersPageComponent, canActivate: [ActivationGuard]},
    {path: 'event/edit', component: EditPageComponent, canActivate: [ActivationGuard]}
];

export const routingProviders = [
    {provide: "homeGuard", useValue: eventGuard}
];

export function eventGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
}

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);