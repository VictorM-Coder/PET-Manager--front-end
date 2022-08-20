import { Pet } from '../../model/pet';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  @Input() pet: Pet = {
    id: 0,
    name: '',
    breed: '',
    weight: 0,
    birthday: new Date('1995-12-17T03:24:00'),
    gender: '',
    vaccinated: true,
    animalClass: '',
    image: null,
  };;

  constructor() { }

  ngOnInit(): void {
  }

}
