import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from '../model/persona';
import { PersonasService } from '../services/personas.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort'
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css'],
})
export class ListaPersonasComponent implements OnInit, OnDestroy {
  todas: any;
  personaEncontrada: any;
  private subs: Subscription;

  public page!:number

  filterPost:any=''
 
  

  constructor(public personaServe: PersonasService, public router:Router) {
    this.subs = new Subscription();
  }

  ngOnInit(): void {
    this.subs.add(
      this.personaServe.obtenerTodas().subscribe({
        next: (result) => {
          this.personaServe.plantel = result;
        },
        error: () => {
          alert('Error al obtener el listado de personas');
        },
      })

    );
  }
  
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  borrarPersona(persona: Persona) {
    if (confirm('esta seguro de borrar la persona')) {
      this.subs.add(
        this.personaServe.borrar(persona.id).subscribe({
          next: (result) => {
            console.log(result);
          },
          error: (err) => {
            console.log(err.status);
          },
        })
      );
    }
  }

  editar(id:string){
    this.router.navigate([`editarClientes/${id}`]);
  }


 
}
