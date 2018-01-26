import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Ng2Webstorage } from 'ngx-webstorage';
import { InputTextModule, DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing, appRoutingProvider } from 'app/app.routing';

import { AuthenticationService } from 'app/services/authentication.service';
import { ProjectService } from 'app/services/project.service';

import { HeaderComponent } from './header/header.component';
import { AuthenticationGuard } from 'app/guards/authentication.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from 'app/administration/projects/projects.component';
import { UiComponentsModule } from 'app/ui-components/ui-components.module';
import { DataTable } from 'app/ui-components/data-table/data-table.component';
import { MomentPipe } from './pipes/moment.pipe';
import { ProjectResourcesComponent } from './administration/project-resources/project-resources.component';
import { ProjectSpecificationComponent } from './project-specification/project-specification.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProjectsComponent,
    HeaderComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    MomentPipe,
    ProjectResourcesComponent,
    ProjectSpecificationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    Ng2Webstorage,
    InputTextModule, DataTableModule, ButtonModule, DialogModule,

    routing,
    UiComponentsModule
  ],
  providers: [
    AuthenticationService,
    ProjectService,
    appRoutingProvider,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
