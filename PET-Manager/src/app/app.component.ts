import { Pet } from './model/pet';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pet: Pet = {
    id: 0,
    name: '',
    breed: '',
    weight: 0,
    birthday: new Date('1995-10-17T03:24:00'),
    gender: '',
    vaccinated: false,
    animalClass: '',
    image: null,
  };
  title = 'PET-Manager';
}
