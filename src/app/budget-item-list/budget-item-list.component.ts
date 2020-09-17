import { BudgetItem } from './../shares/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';


@Component({
  selector: 'budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})



export class BudgetItemListComponent implements OnInit {



  @Input() budgetItem: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  onDelete(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    // show edit modal
    let dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '450px',
      data: item
  })
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.update.emit({
        old: item,
        new: result
      });
    }
  });
 }
}

export interface UpdateEvent {
  old: BudgetItem,
  new: BudgetItem
}