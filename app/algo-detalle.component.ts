import {Component, Input} from '@angular/core';
import {Algo} from './algo';

@Component({
    selector: 'mi-algo-detalle',
    template: `
        <div *ngIf="algo">
            <div>{{algo.texto}}</div>
            <div><input [(ngModel)]="algo.texto" placeholder="texto"/></div>
        </div>
    `
})

export class AlgoDetalle
{
    @Input()
    algo : Algo;
}