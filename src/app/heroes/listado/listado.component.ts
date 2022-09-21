import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Superman'];
  heroeBorrado: string = '';

  borrarHeroe() : void {
    this.heroeBorrado = this.heroes.splice(length-1, 1)[0];
  }
}
