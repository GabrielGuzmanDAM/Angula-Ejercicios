import { Component } from '@angular/core';

@Component({
  selector: 'app-T42DatosDelIESPlayamarJacaranda',
  standalone: true,
  templateUrl: './T42DatosDelIESPlayamarJacaranda.html'
})
export class T42DatosDelIESPlayamarJacaranda {

  public centroEdicativo: String = "IES Playamar"
  public Localidad: String = "Torremolinos"
  public familiaProfecional: String[] = ["Informática y Comunicaciones", "Transporte" ,"Mantenimiento de Vehículos"]
  public logo = './imagenes-T42DatosDelIESPlayamarJacaranda/logo-ies-playamar-250x300.png'

  public get centro(): string {
    return this.centroEdicativo.toUpperCase();
  }

  public  cambiarCentro() {
    this.centroEdicativo = "IES Jacaranda";
    this.Localidad = "Churriana";
    this.familiaProfecional = ["Hostelería" , "Turismo"];
    this.logo = './imagenes-T42DatosDelIESPlayamarJacaranda/logo-ies-jacaranda.png';
  }

}
