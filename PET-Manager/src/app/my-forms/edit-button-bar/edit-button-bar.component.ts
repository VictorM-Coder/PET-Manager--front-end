import { Pet } from './../../model/pet';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'edit-button-bar',
  templateUrl: './edit-button-bar.component.html',
  styleUrls: ['./edit-button-bar.component.css']
})
export class EditButtonBarComponent implements OnInit {
  @Input() pet?: Pet
  constructor() { }

  ngOnInit(): void {
  }

}
