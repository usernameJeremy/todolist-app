import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ListEvent } from './card-detail.interface';



@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})


export class CardDetailComponent {
 
@Input() cardData: any;
@Output() deleteCardEvent = new EventEmitter<ListEvent>();
isEditing = false;

enableEditing() {
  this.isEditing = true;
}

deleteCard() {
  this.deleteCardEvent.emit(this.cardData);
}
}
