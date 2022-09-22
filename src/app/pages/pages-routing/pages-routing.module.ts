import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { ListaPersonasComponent } from '../../lista-personas/lista-personas.component';
import { AltaPersonaComponent } from '../../alta-persona/alta-persona.component';
import { PlanesComponent } from '../../planes/planes.component';
import { LoginComponent } from '../../login/login.component';


const routes:Routes=[
  {path:'',
   children:[
    {path:'listadoclientes',component:ListaPersonasComponent},
    {path:'altapersonas',component:AltaPersonaComponent},
    {path:'planes',component:PlanesComponent},
    {path:'login',component:LoginComponent},
    {path:'**',redirectTo:'listadoclientes'}
    

  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
