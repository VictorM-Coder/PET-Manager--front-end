import { SearchContent } from './../../model/search-content';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from './../../model/pet';
import { Component, Input, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pets-showcase',
  templateUrl: './pets-showcase.component.html',
  styleUrls: ['./pets-showcase.component.css']
})
export class PetsShowcaseComponent implements OnInit {
  @Input() pets: Pet[] = []
  @Input() searchContent!: SearchContent

  constructor(private petService: PetService, private router: Router, private route: ActivatedRoute) {
    this.pets = []
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.searchContent = queryParams
    })

    let pets: Observable<Pet[]> = new Observable

    if(Object.keys(this.searchContent).length === 0){
      pets = this.petService.findall()
    }else{
      pets = this.getPetList()
    }

    pets.subscribe(pets => this.pets = pets)

  }

  private getPetList(){
    let pets: Observable<Pet[]> = new Observable
    if(this.searchContent.animalClass !== 'NONE'){
      switch (this.searchContent.weightFilter){
        case 'NONE':
          pets = this.petService.findAllByAnimalClass(this.searchContent.name, this.searchContent.animalClass)
        break
        case 'interval':
          pets = this.petService.findByAnimalClassAndWeightInterval(this.searchContent.name, this.searchContent.animalClass, this.searchContent.minWeight, this.searchContent.maxWeight)
          break
        case 'min weight':
          pets = this.petService.findByAnimalClassAndMinWeight(this.searchContent.name, this.searchContent.animalClass, this.searchContent.minWeight)
          break
        case 'max weight':
          pets = this.petService.findByAnimalClassAndMaxWeight(this.searchContent.name, this.searchContent.animalClass, this.searchContent.maxWeight)
          break
      }
    }else{
      switch (this.searchContent.weightFilter){
        case 'NONE':
          pets = this.petService.findByName(this.searchContent.name)
        break
        case 'interval':
          pets = this.petService.findByWeightInterval(this.searchContent.name, this.searchContent.minWeight, this.searchContent.maxWeight)
          break
        case 'min weight':
          pets = this.petService.findByMinWeight(this.searchContent.name, this.searchContent.minWeight)
          break
        case 'max weight':
          pets = this.petService.findByMaxWeight(this.searchContent.name, this.searchContent.maxWeight)
          break
      }
    }
    return pets;
  }
}

