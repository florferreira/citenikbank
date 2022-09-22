import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Plan } from '../model/plan';
import { PlanesService } from '../services/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit, OnDestroy {
  todosplanes:any;
  planElegido:any;
  private subs:Subscription;

  constructor(public planesService: PlanesService) {
    this.subs=new Subscription()
  }

  ngOnInit(): void {
    this.subs.add(
      this.planesService.getList().subscribe({
        next:(result)=>{
          this.planesService.planesList=result
        },
        error:()=>{
          console.log(`Error al obtener el listado de planes`)
        }
      })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  borrarPlan(plan: Plan) {
    if (confirm('esta seguro de borrar el plan')) {
      this.subs.add(
        this.planesService.delete(plan.id).subscribe({
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

