import { Pet } from './../../model/pet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pets-showcase',
  templateUrl: './pets-showcase.component.html',
  styleUrls: ['./pets-showcase.component.css']
})
export class PetsShowcaseComponent implements OnInit {
  pets: Pet[]

  constructor() { 
    this.pets = [
      {
        id: 0,
        name: 'JOJO',
        breed: '',
        weight: 0,
        birthday: new Date('1995-12-17T03:24:00'),
        gender: '',
        vaccinated: false ,
        animalClass: '',
        image: null,
      },
      {
        id: 0,
        name: 'JOJO',
        breed: '',
        weight: 0,
        birthday: new Date('1995-12-17T03:24:00'),
        gender: '',
        vaccinated: false ,
        animalClass: '',
        image: null,
      },
      {
        id: 0,
        name: 'JOJO',
        breed: '',
        weight: 0,
        birthday: new Date('1995-12-17T03:24:00'),
        gender: '',
        vaccinated: false ,
        animalClass: '',
        image: null,
      },
      {
        id: 0,
        name: 'JOJO',
        breed: '',
        weight: 0,
        birthday: new Date('1995-12-17T03:24:00'),
        gender: '',
        vaccinated: false ,
        animalClass: '',
        image: null,
      },
      {
        id: 0,
        name: 'JOJO',
        breed: '',
        weight: 0,
        birthday: new Date('1995-12-17T03:24:00'),
        gender: '',
        vaccinated: false ,
        animalClass: '',
        image: null,
      },
      {
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
    ]
  }

  ngOnInit(): void {
  }
}
