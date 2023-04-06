import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {

  @Input()
  item!: BudgetItem;
  @Output() formSubmit:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  
  isNewItem!: boolean;

  ngOnInit(){
    if(this.item){
      this.isNewItem= false;
    }else{
      this.isNewItem =  true;
      this.item =new BudgetItem('', 0)
    }
  }
  onSubmit(formData:any){
    this.formSubmit.emit(formData.value);
    formData.reset();
  }

}
