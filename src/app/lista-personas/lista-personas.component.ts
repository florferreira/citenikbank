import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from '../model/persona';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css'],
})
export class ListaPersonasComponent implements OnInit, OnDestroy {
  todas: any;
  personaEncontrada: any;
  private subs: Subscription;

  constructor(public personaServe: PersonasService) {
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
}
