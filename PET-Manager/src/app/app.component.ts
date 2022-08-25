import { Pet } from './model/pet';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
