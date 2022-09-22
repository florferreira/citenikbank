import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  plantel: Persona[];
  uri: string = 'https://citenik-nodocker.azurewebsites.net/api/clientes';
  
  constructor(public http: HttpClient) {
    this.plantel = [];
  }

  agregar(nuevaPersona: Persona): Observable<any> {
    //this.plantel.push(nuevaPersona);
    const persona = {
      nombre: nuevaPersona.nombre,
      cuit: nuevaPersona.cuit,
      FechaNacimiento: nuevaPersona.fechaNacimiento,
    };
    //let parsedPersona = JSON.stringify(persona);
    console.log(persona);
    return this.http.post(this.uri, persona, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  borrar(id: number): Observable<any> {
    //let indice = this.plantel.indexOf(persona);
    //let posicion:number = this.plantel.findIndex(x=> x == persona);
    //this.plantel.splice(indice, 1);
    return this.http.delete(`${this.uri}/${id}`);
  }

  cantidad() {
    return this.plantel.length;
  }

  obtenerTodas(): Observable<any> {
    //return this.plantel;
    return this.http.get(this.uri);
  }

  obtenerUna(id: number): Observable<any> {
    return this.http.get(`${this.uri}/${id}`);
  }
}
