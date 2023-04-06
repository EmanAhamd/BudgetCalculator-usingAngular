import { Component, Inject, Input} from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css']
})
export class EditItemModalComponent {

  // @Input() item:BudgetItem = {description:'', amount:0};

  constructor(
    public dialogRef:MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item:BudgetItem){}

  onFormSubmit(updatedItem:BudgetItem){
    this.dialogRef.close(updatedItem)
  }

}
