import { Component } from '@angular/core';

@Component({
  selector: 'app-t41contador',
  standalone: true,
  templateUrl: './t41contador.html'
})
export class t41contador {

  public contador: number = 10
  public x: number = 1

  // Método para incrementar
  incrementar() {
    this.contador = this.contador + this.x;
  }

  // Método para decrementar
  decrementar() {
    this.contador = this.contador - this.x;
  }

  // Método para resetear
  resetear() {
    this.contador = 0;
  }

  // Método para cambiar el valor de X
  cambiarX(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.x = Number(valor);
  }

}
