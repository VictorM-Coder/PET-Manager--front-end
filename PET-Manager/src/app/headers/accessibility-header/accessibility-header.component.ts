import { Component, OnInit } from '@angular/core';
import { updateFontSize } from 'src/app/app.component';

@Component({
  selector: 'accessibility-header',
  templateUrl: './accessibility-header.component.html',
  styleUrls: ['./accessibility-header.component.css']
})
export class AccessibilityHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  incrementFont(){
    let fontSize:number = Number(localStorage.getItem('fontSize'))

    if(fontSize < 22){
        localStorage.setItem('fontSize', `${fontSize + 2}`)
        updateFontSize()
    }
  }

  resetFont(){
      localStorage.setItem('fontSize', `${16}`)
      updateFontSize()
  }

  decrementFont(){
      let fontSize:number = Number(localStorage.getItem('fontSize'))

      if(fontSize > 10){
          localStorage.setItem('fontSize', `${fontSize - 2}`)
          updateFontSize()
      }
  }

}
