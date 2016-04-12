/**
 * Created by Namita Malik on 4/5/16.
 */

import {Component} from 'angular2/core';
import {TaskListComponent} from "./task-list.component";
import {TaskFormComponent} from "./task-form.component"
import {ToDo} from "./todo"

@Component({
    selector: 'my-app',
    template: `
    <task-form (newToDo)="addToDo($event)"></task-form>
    <task-list [toDoListFromView]="toDoList"></task-list>
    `,
    directives:[TaskListComponent,TaskFormComponent]
})

export class AppComponent {
    toDoList : ToDo[] = [];
    addToDo(toDo:ToDo){
        this.toDoList.push(toDo);
    }
}

//[] -> Component to View -> Data will flow fom component to view
//() -> View to Component -> Data will flow from view to component