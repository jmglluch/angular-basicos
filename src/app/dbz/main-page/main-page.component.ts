import { Component, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.inteface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {}

  nuevo: Personaje = {
    nombre: 'Josemi',
    poder: 1500
  }
}
