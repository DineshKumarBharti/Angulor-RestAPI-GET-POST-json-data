import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cnc1Component } from './cnc1/cnc1.component';
import { Cnc2Component } from './cnc2/cnc2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'showdata',component:Cnc1Component},
  {path:'storedata',component:Cnc2Component},
  {path:'',redirectTo:'/showdata',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
