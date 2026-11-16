import { Routes } from '@angular/router';

import { t41contador } from './Ejercicios/t41contador/t41contador';
import { T42DatosDelIESPlayamarJacaranda } from './Ejercicios/T42DatosDelIESPlayamarJacaranda/T42DatosDelIESPlayamarJacaranda';

export const routes: Routes = [
  {
    path: 't41contador',
    component: t41contador
  },
  {
    path: 'T42DatosDelIESPlayamarJacaranda',
    component: T42DatosDelIESPlayamarJacaranda
  }
];
