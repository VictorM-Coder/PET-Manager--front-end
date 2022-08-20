import { Pet } from './../../model/pet';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet: Pet
  constructor() { 
    this.pet = {
      id: 0,
      name: 'JOJO',
      breed: '',
      weight: 0,
      birthday: new Date('1995-12-17T03:24:00'),
      gender: '',
      vaccinated: false ,
      animalClass: '',
      image: null,
    }
  }
    
  ngOnInit(): void {
  }

}
