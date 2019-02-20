import {Component} from '@angular/core';

import { Todo } from './share/todo';
import {todos} from './share/data';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title: string = 'Angular 2Do';
}