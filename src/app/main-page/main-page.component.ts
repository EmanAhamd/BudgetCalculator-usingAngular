import { Component } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item';
import { updatItem } from '../shared/models/updateEvent';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
itemList:BudgetItem[] = [];
totalBudget:number = 0;

addItem(newItem:BudgetItem){
  this.itemList.push(newItem);
  this.totalBudget += newItem.amount;
}

deleteBudgetItem(item:BudgetItem){
  let index = this.itemList.indexOf(item);
  this.itemList.splice(index, 1);
  this.totalBudget -= item.amount;
}

updateItem(updateItem:updatItem){
  this.itemList[this.itemList.indexOf(updateItem.old)] = updateItem.new;

  this.totalBudget -= updateItem.old.amount;
  this.totalBudget += updateItem.new.amount;

}
}
