import { petDefault } from './../../model/pet-default';
import { PetService } from './../../services/pet.service';
import { Pet } from './../../model/pet';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'edit-button-bar',
  templateUrl: './edit-button-bar.component.html',
  styleUrls: ['./edit-button-bar.component.css']
})
export class EditButtonBarComponent implements OnInit {
  @Input() pet?: Pet
  constructor(private petService: PetService, private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit(): void {

  }

  cancel(){
    this.router.navigate(['/home'], {relativeTo: this.route})
  }

  deletePet(){
    if(this.pet !== undefined){
      if(this.pet.id > 0){
        this.petService.delete(this.pet).pipe(take(1))
      }
    }
  }

  updatePet(){
    if(this.pet !== undefined){
      if(this.pet.id > 0){
        //TO-DO
      }
    }
  }

}
