import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import components
import { DashboardComponent } from './SubContainers/dashboard.component';
import { TaskComponent } from './SubContainers/task.component';
import { TaskFormComponent } from './SubContainers/task-form.component';
import { ReportsComponent } from './SubContainers/reports.component';
import { SettingsComponent } from './SubContainers/settings.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent}
  , { path: 'task', component: TaskComponent}
  , { path: 'addTask', component: TaskFormComponent}
  , { path: 'addTask/:id', component: TaskFormComponent}
  // , { path: 'modifyTask', component: TaskComponent}
  // , { path: 'deleteTask', component: TaskComponent}
  , { path: 'reports', component: ReportsComponent}
  // , { path: 'externalRedirect', component: NoFoundComponent}
  , { path: 'settings', component: SettingsComponent}
  , { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
  , { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  // providers: [
  //   {
  //       provide: externalUrlProvider,
  //       useValue: (route: ActivatedRouteSnapshot) => {
  //           const externalUrl = route.paramMap.get('externalUrl');
  //           window.open(externalUrl, '_self');
  //       }
  //   }
  // ]

})

export class AppRoutingModule { }
