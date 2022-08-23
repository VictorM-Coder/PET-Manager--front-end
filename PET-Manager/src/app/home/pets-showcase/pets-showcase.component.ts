import { SearchContent } from './../../model/search-content';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from './../../model/pet';
import { Component, Input, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pets-showcase',
  templateUrl: './pets-showcase.component.html',
  styleUrls: ['./pets-showcase.component.css']
})
export class PetsShowcaseComponent implements OnInit {
  @Input() pets: Pet[] = []
  @Input() searchContent!: SearchContent

  constructor(private petService: PetService, private router: Router, private route: ActivatedRoute) {
    this.petService.findall().subscribe(pets => this.pets = pets)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.searchContent = queryParams
    })

  if(!this.animalClassIsNone()){
    if(!this.maxWeightIsUndefined()){
      if(!this.minWeightIsUndefined()){//todos são válidos

      }else{//animalclass e maxweight são válidos

      }
    }else{//o maxweight não é válido

      if(!this.minWeightIsUndefined()){//animalclass e minweigh são válidos

      }else{//animalclass é válidos

      }
    }
  }else{
    if(!this.maxWeightIsUndefined()){
      if(!this.minWeightIsUndefined()){//maxweight e minweight são válidos

      }else{//maxweight é válidos

      }
    }else{//o maxweight não é válido

      if(!this.minWeightIsUndefined()){//minweigh é válidos

      }else{//todos são inválidos
        this.petService.findall().subscribe(pets => this.pets = pets)
      }
    }
  }

  }

  private animalClassIsNone(){
    return this.searchContent.animalClass === 'NONE'
  }

  private minWeightIsUndefined(){
    return this.searchContent.minWeight === undefined
  }

  private maxWeightIsUndefined(){
    return this.searchContent.maxWeight === undefined
  }
}
