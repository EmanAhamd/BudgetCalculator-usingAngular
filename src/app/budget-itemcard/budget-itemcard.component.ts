import { Component , EventEmitter, Input, Output} from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item';

@Component({
  selector: 'app-budget-itemcard',
  templateUrl: './budget-itemcard.component.html',
  styleUrls: ['./budget-itemcard.component.css']
})
export class BudgetItemcardComponent {

  @Input() item:BudgetItem = {description:'', amount:0};
  @Output() xButton:EventEmitter<any> = new EventEmitter<any>;
  @Output() cardClicked:EventEmitter<any> = new EventEmitter<any>;

  onXButton(){
    this.xButton.emit();
  }

  onCardClick(){
    this.cardClicked.emit();
  }
}
