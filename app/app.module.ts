﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { EqualValidator } from './equal-validator.directive'; //custom equal validator
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import {SidebarComponent} from './widgets/sidebar/index';
import {TopNavComponent} from './widgets/topnav/index';
import {HeaderNavComponent} from './widgets/headernav/index';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HomeComponent } from './home/index';
import { ManageUsersComponent } from './manage-users/index';
import { AllContentComponent } from './manage-content/index';
import { AllPagesComponent } from './manage-pages/index';
import { AllMediaComponent } from './manage-media/index';
import { AllFormsComponent } from './manage-forms/index';
import { AllPostsComponent } from './manage-blog/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        EqualValidator,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ManageUsersComponent,
        AllContentComponent,
        AllPagesComponent,
        AllMediaComponent,
        AllFormsComponent,
        AllPostsComponent,
        SidebarComponent,
        TopNavComponent,
        HeaderNavComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
