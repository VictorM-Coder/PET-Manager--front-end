import { petDefault } from 'src/app/model/pet-default';
import { Pet } from '../../model/pet';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  @Input() pet: Pet;
  @Input() id: number = 0

  constructor(private router: Router, private route: ActivatedRoute) {
    this.pet = petDefault
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.id = queryParams.id
    })

    if(this.id === 0 || this.id === undefined){
      this.pet = petDefault
    }else{
      this.pet = petDefault
    }
  }

}
