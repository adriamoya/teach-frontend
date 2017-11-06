import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { AlumnesListComponent } from './alumnes-list/alumnes-list.component';
import { AssignaturesListComponent } from './assignatures-list/assignatures-list.component';
import { AssignaturesDetailComponent } from './assignatures-detail/assignatures-detail.component';
import { AssignaturesUpdateComponent } from './assignatures-update/assignatures-update.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProvesDetailComponent } from './proves-detail/proves-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'assignatures',
    component: AssignaturesListComponent
  },
  {
    path: 'alumnes',
    component: AlumnesListComponent
  },
  {
    path: 'assignatures/:id',
    component: AssignaturesDetailComponent
  },
  {
    path: 'assignatures/:id/edit',
    component: AssignaturesUpdateComponent
  },
  {
    path: 'assignatures/:id/:id',
    component: ProvesDetailComponent
  },
  {
    path: 'perfil/:id',
    component: ProfileDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}