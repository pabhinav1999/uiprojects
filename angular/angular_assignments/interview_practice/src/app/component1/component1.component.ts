import { Component, Output, EventEmitter} from "@angular/core";

//if we want to make it as component , then add component decorator
@Component({
    selector:'app-component1',
    templateUrl:'./component1.component.html',
    styleUrls:['./component1.component.css']
})
export class Component1 {

    @Output() emitAString = new EventEmitter<string>();

    title = 'Component1'

    addNewString(){
      this.emitAString.emit("hello");
    }
}