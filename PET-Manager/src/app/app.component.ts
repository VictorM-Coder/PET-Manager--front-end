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
    name: "",
    breed: "",
    weight: 0.0,
    birthday: new Date('1900-10-10T03:24:00'),
    gender: 'MALE',
    vaccinated: false,
    animalClass: 'MAMMAL',
    image: null,
  };
  title = 'PET-Manager';

  constructor(){
    if(localStorage.getItem('fontSize') !== null){
      updateFontSize()
    }else{
      localStorage.setItem('fontSize', '16')
    }
  }
}

export function updateFontSize():void{
  let size:number =  Number(localStorage.getItem('fontSize'))
  document.getElementsByTagName('html')[0].style.fontSize = `${size}px`
}
