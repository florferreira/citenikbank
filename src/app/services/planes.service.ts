import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../model/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
    planesList: Array <any>=[]
    uri: string= 'https://citenik-nodocker.azurewebsites.net/api/planes'

  constructor(public http:HttpClient) { 
    this.planesList=[]

  }
  

  getList():Observable<any>{ 
    return this.http.get(this.uri)
  }

  getOne(id:number):Observable<any>{
    return  this.http.get(`${this.uri}/${id}`)
  }

  newPlan(nuevoPlan: Plan): Observable<any> {
    
    const plan = {
      nombre: nuevoPlan.nombre,
      tna: nuevoPlan.tna,
      duracionMinimaCuotas: nuevoPlan.duracionMinimaCuotas,
      duracionMaximaCuotas: nuevoPlan.duracionMaximaCuotas,
      montoMinimo:nuevoPlan.montoMinimo,
      montoMaximo:nuevoPlan.montoMaximo,
      edadMaxima:nuevoPlan.edadMaxima,
      precancelacion:nuevoPlan.precancelacion,
      precancelacionCuotaMinima:nuevoPlan.precancelacionCuotaMinima,
      precancelacionMulta:nuevoPlan.precancelacionMulta,
      vigencia:nuevoPlan.vigencia,
      costoAdministrativo:nuevoPlan.costoAdministrativo
    
    };
    console.log(plan);

    return this.http.post(this.uri, plan, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.uri}/${id}`);
  }


}
