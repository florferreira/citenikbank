import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../model/persona';
import { PersonasService } from '../services/personas.service';


@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {
  cliente:Persona;
  
  constructor(public activatedRoute:ActivatedRoute, public personaService:PersonasService,public router:Router) {
    this.cliente={} as Persona;
    
   }

  ngOnInit(): void {
    this.obtenerUna();
  }



  obtenerUna(){
    this.activatedRoute.params.subscribe({
      next: params =>{
        const id = params["id"];
        this.personaService.obtenerUna(id).subscribe({
          next: result => {
            this.cliente = result;
          },
          error : error =>{
            alert("error al editar")
          }
        })
      }
    })
  }


  editarcliente(cliente:Persona){
    
    console.log(cliente);
    this.personaService.modificarCliente(cliente).subscribe({
  next: result => {
    alert("edicion exitosa");
    this.router.navigate(["/listaClientes"])
  },
  error:error =>{
    alert("error")
  }
    })
  }



}
