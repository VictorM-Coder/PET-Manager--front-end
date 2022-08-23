import { PetService } from './../../services/pet.service';
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
  @ViewChild('imgInput',{static: false}) imgInput!: ElementRef
  @ViewChild('imgOutput', {static: false}) imgOutput!: ElementRef

  constructor(private router: Router, private route: ActivatedRoute, private petService: PetService) {
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
      this.petService.findById(this.id).subscribe(pet => this.pet = pet)
    }
  }
  
	msg = "";

	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}

		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.pet.image = reader.result

      this.imgOutput.nativeElement.setAttribute('style', 'background: url(' + reader.result + ") no-repeat; background-size: 300px 300px;")
		}
	}
}
