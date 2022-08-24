import { SearchContent } from './../../model/search-content';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('inputName', {static: false}) inputName!: ElementRef
  @ViewChild('selectAnimalClass', {static: false}) selectAnimalClass!: ElementRef
  @ViewChild('selectWeight', {static: false}) selectWeight!: ElementRef
  @ViewChild('minWeight', {static: false}) minWeight!: ElementRef
  @ViewChild('maxWeight', {static: false}) maxWeight!: ElementRef

  @Input() searchContent: SearchContent = {
    name: '',
    animalClass: 'NONE',
    weightFilter: 'NONE',
    minWeight: 0,
    maxWeight: 0
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let searchInput: SearchContent = {
      name: '',
      animalClass: 'NONE',
      weightFilter: 'NONE',
      maxWeight: 0,
      minWeight: 0
    }

    this.route.queryParams.subscribe(
      (queryParams: any) => {
        searchInput = queryParams
    })

    if(!(JSON.stringify(searchInput) === "{}")){
      this.searchContent.name = searchInput.name
      this.searchContent.animalClass = searchInput.animalClass;
      this.searchContent.maxWeight = searchInput.maxWeight
      this.searchContent.minWeight = searchInput.minWeight
      this.searchContent.weightFilter = searchInput.weightFilter
    }
  }

  ngAfterViewInit(){
    this.selectAnimalClass.nativeElement.value = this.searchContent.animalClass
    this.selectWeight.nativeElement.value = this.searchContent.weightFilter
    this.inputName.nativeElement.value = this.searchContent.name

    if(this.searchContent.maxWeight !== undefined){
      this.maxWeight.nativeElement.value = Number(this.searchContent.maxWeight)
    }
    if(this.searchContent.minWeight !== undefined){
      this.minWeight.nativeElement.value = Number(this.searchContent.minWeight)
    }

    this.setWeightInputs()

  }

  search(){
    console.log(this.searchContent)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate(['/home'], {queryParams: this.searchContent, relativeTo: this.route})
  }

  changeAnimalClass(){
    this.searchContent.animalClass = this.selectAnimalClass.nativeElement.value
  }

  changeWeightFilter(){
    this.searchContent.weightFilter = this.selectWeight.nativeElement.value
    this.setWeightInputs()
  }

  inputMinWeight(){
    this.searchContent.minWeight = Number(this.minWeight.nativeElement.value)
  }

  inputMaxWeight(){
    this.searchContent.maxWeight = Number(this.maxWeight.nativeElement.value)
  }

  inputNameEvent(){
    this.searchContent.name = this.inputName.nativeElement.value
  }

  private setWeightInputs(){
    switch(this.searchContent.weightFilter){
      case 'NONE':
        this.minWeight.nativeElement.disabled = true
        this.maxWeight.nativeElement.disabled =true
        break
      case 'interval':
        this.minWeight.nativeElement.disabled = false
        this.maxWeight.nativeElement.disabled = false
        break
      case 'min weight':
        this.minWeight.nativeElement.disabled = false
        this.maxWeight.nativeElement.disabled = true
        break
      case 'max weight':
        this.minWeight.nativeElement.disabled = true
        this.maxWeight.nativeElement.disabled = false
        break
    }
  }
}
