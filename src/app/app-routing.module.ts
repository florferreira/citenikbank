import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';


const routes:Routes =[
  {path:'app',
    loadChildren:()=>import('./pages/pages-routing/pages-routing.module').then(m=>m.PagesRoutingModule)
  },
  {
    path:'**',
    redirectTo:'app'
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
