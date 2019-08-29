import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; /**/
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap'; // import everything from bootstrap
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // import everything from bootstrap
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';  // import only what I need from bootstrap

/* Angular Material */
// import { AngularMaterialModule } from './angular-material.module'; // Material --- TO DELETE??
// import { AngularMaterialModule, MatButtonModule, MatFormFieldModule, MatInputModule } from './angular-material.module';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // --- TO DELETE?
import { MaterialModule } from './material.module'; // Custome module to include all the references from Material

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { MenuComponent } from './Menu/menu.component';
import { MainContainerComponent } from './MainContainer/mainContainer.component'; /*TO DELETE*/

import { DashboardComponent } from './SubContainers/dashboard.component';
import { TaskComponent } from './SubContainers/task.component';
import { ReportsComponent } from './SubContainers/reports.component';
import { SettingsComponent } from './SubContainers/settings.component';
import { TaskFormComponent } from './SubContainers/task-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Material Theme


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainContainerComponent, /*TO DELETE*/
    DashboardComponent,
    TaskComponent,
    ReportsComponent,
    SettingsComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule, // Material Theme
    // AngularMaterialModule, // Material --- TO DELETE??
    MaterialModule // Custome module to include all the references from Material
    // AngularMaterialModule, MatButtonModule, MatFormFieldModule, MatInputModule // For Material
    // NgbModal
    // NgbModule, NgbModal
    // NgbModule // import everything from bootstrap
    // NgbActiveModal, NgbModal  // import only what I need from bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA] // Material
})
export class AppModule { }
