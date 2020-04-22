import { Component, Input} from '@angular/core';
import {Todo} from '../../assignment.component'

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})


export class Assignment2Component{
 
selected:Todo;
@Input()
todos:Todo[];
select(item) {
  this.selected = item; 
};
isActive(item) {
  return this.selected === item;
};

}
