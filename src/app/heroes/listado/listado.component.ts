import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'spiderman',
    'hiroman',
    'hulk',
    'thor',
    'capitan america',
  ];
  deletedHeroes: string[] = [];

  borrarUno(): void {
    const deleted = this.heroes.shift();
    this.deletedHeroes.push(deleted!);
  }
}
