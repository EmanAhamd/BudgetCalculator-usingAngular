import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { updatItem } from '../shared/models/updateEvent';


@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})



export class BudgetItemListComponent {
  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update:EventEmitter<updatItem> = new EventEmitter<updatItem>();

  constructor(public dialog:MatDialog){}

  onDeleteCard(cardItem:BudgetItem){
    this.delete.emit(cardItem);
  }

  onCardClick(item:BudgetItem){
    const dialogRef = this.dialog.open(EditItemModalComponent,{
      width: '500px',
      data: item
    })

    dialogRef.afterClosed().subscribe(res =>{
      if(res){
        this.update.emit({
          old:item,
          new:res
        })
      }
    })
  }
}
