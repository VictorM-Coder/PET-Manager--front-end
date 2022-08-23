import { SearchContent } from './../../model/search-content';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('selectAnimalClass', {static: false}) selectAnimalClass!: ElementRef
  @ViewChild('selectGender', {static: false}) selectGender!: ElementRef
  @ViewChild('minWeight', {static: false}) minWeight!: ElementRef
  @ViewChild('maxWeight', {static: false}) maxWeight!: ElementRef

  @Input() searchContent: SearchContent = {
    animalClass: 'NONE',
    minWeight: undefined,
    maxWeight: undefined
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let searchInput: SearchContent = {
      animalClass: 'NONE',
      maxWeight: undefined,
      minWeight: undefined
    }

    this.route.queryParams.subscribe(
      (queryParams: any) => {
        searchInput = queryParams
    })

    if(!(JSON.stringify(searchInput) === "{}")){
      this.searchContent.animalClass = searchInput.animalClass;
      this.searchContent.maxWeight = searchInput.maxWeight
      this.searchContent.minWeight = searchInput.minWeight
    }
  }

  ngAfterViewInit(){
    this.selectAnimalClass.nativeElement.value = this.searchContent.animalClass

    if(this.searchContent.maxWeight !== undefined){
      this.maxWeight.nativeElement.value = Number(this.searchContent.maxWeight)
    }
    if(this.searchContent.minWeight !== undefined){
      this.minWeight.nativeElement.value = Number(this.searchContent.minWeight)
    }

  }

  search(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate(['/home'], {queryParams: this.searchContent, relativeTo: this.route})
  }

  changeAnimalClass(){
    this.searchContent.animalClass = this.selectAnimalClass.nativeElement.value
  }

  inputMinWeight(){

    this.searchContent.minWeight = Number(this.minWeight.nativeElement.value)
  }

  inputMaxWeight(){
    this.searchContent.maxWeight = Number(this.maxWeight.nativeElement.value)
  }

}
