import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AltaPersonaComponent } from './alta-persona/alta-persona.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from 'src/pipes/filter.pipe'; 
import { SortPipe } from 'src/pipes/sort.pipe'; 


import { AppRoutingModule } from './app-routing.module';
import { PlanesComponent } from './planes/planes.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaPersonaComponent,
    ListaPersonasComponent,
    PlanesComponent,
    LoginComponent,
    FilterPipe,
    EditarClientesComponent,
    SortPipe
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
