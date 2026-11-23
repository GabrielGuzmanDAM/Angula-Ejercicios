import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { NgModule } from '@angular/core';


import { HeroeComponent } from './Ejercicio/heroes.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html'
})

@NgModule({
  declarations:[HeroeComponent],
  imports:[
    CommonModule
  ],
  exports:[HeroeComponent]
})

export class App {
}

