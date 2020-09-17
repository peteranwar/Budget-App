import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from './../../shares/budget-item.model';

@Component({
  selector: 'budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem ;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClicked: EventEmitter<any> = new EventEmitter<any>();
 
  constructor() {}

  ngOnInit(): void {}

  onXButtonClick() {
   this.xButtonClick.emit();
  }

  onCardClicked() {
    this.cardClicked.emit();

  }
}
