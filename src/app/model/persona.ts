export class Persona {
  public id: number;
  public nombre: string;
  public cuit: string;
  public fechaNacimiento: Date;
  public activo:boolean

  constructor() {
    this.id = 0;
    this.nombre = "";
    this.cuit = "";
    this.fechaNacimiento = new Date();
    this.activo = true
  }

  toString() {
    return `${this.id} ${this.nombre} ${this.cuit}`;
  }
}
