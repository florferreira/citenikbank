import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { Persona } from '../model/persona';
import { PersonasService } from '../services/personas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alta-persona',
  templateUrl: './alta-persona.component.html',
  styleUrls: ['./alta-persona.component.css'],
})
export class AltaPersonaComponent implements OnInit, OnDestroy {
  persona: Persona;
  private subs: Subscription;

  @Output() onAgregar = new EventEmitter<Persona>();
  constructor(public personaServe: PersonasService) {
    this.persona = new Persona();
    this.subs = new Subscription();
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  agregarPersona(persona: Persona) {
    
    this.subs.add(this.personaServe.agregar(persona).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
    }));

    

    this.onAgregar.emit(persona);
    this.persona = new Persona();
  }
}
