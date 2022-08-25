import { take } from 'rxjs';
import { Pet } from './../../model/pet';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'create-button-bar',
  templateUrl: './create-button-bar.component.html',
  styleUrls: ['./create-button-bar.component.css']
})
export class CreateButtonBarComponent implements OnInit {
  @Input() pet?: Pet

  constructor(private petService: PetService) {

  }

  ngOnInit(): void {
  }

  soutValues(){
    if(this.pet !== undefined){
      this.petService.post(this.pet).subscribe({
        next: (v) => window.alert("New pet created"),
        error: (e) => {
          window.alert("create pet fail")
        },
        complete: () =>{
          
        }
      })
    }
  }

}
