import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';


/*
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent 
  },
 ]
}];*/

const routes: Routes = [
 

  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: '', component: DashboardComponent },

    ],
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
