import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeroeComponent} from './Heroes/heroe.Component';
import {ListaComponent} from './Lista/lista.Component';

@NgModule({
  declarations:[
    HeroeComponent, ListaComponent
  ],
  imports:[
    CommonModule
  ],
  exports: [
    HeroeComponent,
    ListaComponent
  ]
})


export class HeroesModule {}
