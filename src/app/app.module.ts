import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AuthService } from './providers/auth.service';
import { WebService } from './providers/webservice';

import { AppComponent } from './app.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { AddEventPageComponent } from './add-event-page/add-event-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routing, routingProviders } from './app.routing';
import { ActivationGuard } from './providers/ActivationGuards';
import { EditPageComponent } from './edit-page/edit-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    HomePageComponent,
    EventsPageComponent,
    UsersPageComponent,
    AddEventPageComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [AuthService, WebService, routingProviders, ActivationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
