import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { TodolistsService } from '../Services/todolists.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  selectedCard: any;
  user: any;
  items: any;


  constructor(
    private profileService: ProfileService,
    private todolistService: TodolistsService,
    ) { }

deleteCard(){

}

createTodoList(todoList: any){
  
  this.todolistService.createTodoList(todoList);
}

  onCardClick(event: any, item: any): void {
    const card = event.currentTarget as HTMLElement;
    const expandedCard = card.querySelector('.card-expanded') as HTMLElement;
    this.selectedCard = item; // Houd bij welke kaart is geopend
    if (expandedCard !== null) {
      expandedCard.style.display = 'block';
    }
  }
  
  onCloseClick(): void {
    const expandedCard = document.querySelector('.card-expanded') as HTMLElement;
    if (expandedCard !== null) {
      expandedCard.style.display = 'none';
    }
    this.selectedCard = null; 
  }

 
  



  ngOnInit(): void {

    this.profileService.getUserProfile().subscribe({
      next: (data) => {
        console.log(data);
        
        this.user = data;
      
      },
      error: (error) => {
        console.error(error);
      }
  });

    this.profileService.getUserCards().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
  }

   

}
