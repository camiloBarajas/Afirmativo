import {  ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule  } from '@angular/router';

import { LoginComponent } from 'app/login/login.component';
import { HomeComponent } from 'app/home/home.component';
import { AuthenticationGuard } from 'app/guards/authentication.guard';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { ContactComponent } from 'app/contact/contact.component';
import { AboutComponent } from 'app/about/about.component';
import { ProjectsComponent } from 'app/administration/projects/projects.component';
import { ProjectResourcesComponent } from './administration/project-resources/project-resources.component';
import { ProjectSpecificationComponent } from './project-specification/project-specification.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },

  // { path: '', component:HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'project-resources/:id', component: ProjectResourcesComponent },
  { path: 'project-specification/:id', component: ProjectSpecificationComponent },
  { path: '**', component: NotFoundComponent }
];


export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
