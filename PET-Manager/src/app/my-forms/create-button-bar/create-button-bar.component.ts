import { Pet } from './../../model/pet';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'create-button-bar',
  templateUrl: './create-button-bar.component.html',
  styleUrls: ['./create-button-bar.component.css']
})
export class CreateButtonBarComponent implements OnInit {
  @Input() pet?: Pet

  constructor() {
   }

  ngOnInit(): void {
  }

  soutValues(){
    console.log(this.pet)
  }

}
