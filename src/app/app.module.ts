import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
// third-party imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AssignaturesListComponent } from './assignatures-list/assignatures-list.component';
import { AssignaturesDetailComponent } from './assignatures-detail/assignatures-detail.component';
import { ProvesDetailComponent } from './proves-detail/proves-detail.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AssignaturesUpdateComponent } from './assignatures-update/assignatures-update.component';
import { AssignaturesUpdateGeneralComponent } from './assignatures-update/assignatures-update-general.component';
import { AlumnesListComponent } from './alumnes-list/alumnes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AssignaturesListComponent,
    AssignaturesDetailComponent,
    ProvesDetailComponent,
    ProfileDetailComponent,
    AssignaturesUpdateComponent,
    AssignaturesUpdateGeneralComponent,
    AlumnesListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpModule,
    
	  // ngx-bootstrap
    NgbModule.forRoot(),
	  BsDropdownModule.forRoot(),
    CollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
