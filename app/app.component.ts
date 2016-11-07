import { Component } from '@angular/core';
import { Algo } from './algo';

const COSAS : Algo[] = [
    { texto : 'texto1' },
    { texto : 'texto2' },
    { texto : 'texto3' },
    { texto : 'texto4' },
    { texto : 'texto5' }
];

@Component({
    selector: 'my-app',
    template: `
        <ul class="heroes">
            <li *ngFor="let algo of cosas"
                [class.selected]="algo === algoSeleccionado"
                (click) = "onSelect(algo)">
                {{algo.texto}}
            </li>
        </ul>
        <mi-algo-detalle [algo]="algoSeleccionado"></mi-algo-detalle>
    `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
    algo : Algo = { texto : 'aqui va un texto muy bonito'};
    cosas = COSAS;
    algoSeleccionado: Algo;

    onSelect(algo: Algo): void {
      this.algoSeleccionado = algo;
    }
 }
