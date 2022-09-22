import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abmPersonas';
  agregando=false;
  nuevaPersona(){
    this.agregando=true;
  }
  formularioCerrado(event: any) {
    this.agregando=false;
  }

}
