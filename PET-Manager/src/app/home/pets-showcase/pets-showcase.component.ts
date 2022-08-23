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

    if(this.searchContent.animalClass === 'NONE' && this.searchContent.gender === 'NONE' && this.searchContent.maxWeight === undefined && this.searchContent.minWeight === undefined){
      this.petService.findall().subscribe(pets => this.pets = pets)
      console.log(this.pets)
    }


  }
}
