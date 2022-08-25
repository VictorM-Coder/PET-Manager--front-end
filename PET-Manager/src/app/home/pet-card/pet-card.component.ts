import { Pet } from './../../model/pet';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { petDefault } from 'src/app/model/pet-default';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @ViewChild('cardBody', {static: false}) cardBody!: ElementRef

  @Input() pet: Pet
  constructor(private router: Router, private route: ActivatedRoute) {
    this.pet = petDefault
  }

  ngOnInit(): void {

  }

  navigateToCard(){
    this.router.navigate(['/pet'], {queryParams: {'id': this.pet.id}, relativeTo: this.route})
  }

}
