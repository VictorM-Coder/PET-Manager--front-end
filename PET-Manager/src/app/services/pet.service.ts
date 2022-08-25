import { take } from 'rxjs';
import { Pet } from './../model/pet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const URL:string = 'http://localhost:8080/api/animal'
@Injectable({
  providedIn: 'root'
})

export class PetService {

  constructor(private httpClient: HttpClient) { }

  findall(){
    console.log('requisição')
    return this.httpClient.get<Pet[]>(URL + '/animals')
  }

  findById(id: number){
    return this.httpClient.get<Pet>(URL + `/${id}`)
  }

  findAllByAnimalClass(name: string, animalClass: string){
    return this.httpClient.get<Pet[]>(URL + `/animalClass`, {params: {'name': name, 'animalClass': animalClass}})
  }

  findByName(name: string){
    return this.httpClient.get<Pet[]>(URL + `/search`, {params: {'name': name}})
  }

  findByWeightInterval(name: string , start: number, end: number){
    return this.httpClient.get<Pet[]>(URL + '/weightInterval', {params: {'name': name,'start': start, 'end': end}})
  }

  findByMinWeight(name: string, start: number){
    return this.httpClient.get<Pet[]>(URL + '/minWeight', {params: {'name': name, 'start': start}})
  }

  findByMaxWeight(name:string, end: number){
    return this.httpClient.get<Pet[]>(URL + '/maxWeight', {params: {'name': name, 'end': end}})
  }

  findByAnimalClassAndWeightInterval(name: string, animalClass: string, start: number, end: number){
    return this.httpClient.get<Pet[]>(URL + '/animalClass/weightInterval', {params: {'name': name, 'animalClass': animalClass,'start': start, 'end': end}})
  }

  findByAnimalClassAndMaxWeight(name: string, animalClass: string, end: number){
    return this.httpClient.get<Pet[]>(URL + '/animalClass/maxWeight', {params: {'name': name, 'animalClass': animalClass, 'end': end}})
  }

  findByAnimalClassAndMinWeight(name:string, animalClass: string, start: number){
    return this.httpClient.get<Pet[]>(URL + '/animalClass/minWeight', {params: {'name': name, 'animalClass': animalClass,'start': start}})
  }

  post(pet:Pet){
    return this.httpClient.post<Pet>('http://localhost:8080/api/animal', this.getPetParam(pet))
  }

  delete(pet: Pet){
    return this.httpClient.put<Pet>(URL + `/delete/${pet.id}`, this.getPetParam(pet)).subscribe({
      next: (v) => window.alert("Pet deleted"),
      error: (e) => window.alert("Error when deleting"),
      complete: () =>{

      }
    })
  }

  update(pet: Pet){
    console.log(pet)
    return this.httpClient.put<Pet>(URL + '/update', this.getPetParam(pet)).subscribe({
      next: (v) => window.alert("Pet updated"),
      error: (e) => console.log("Update fail"),
      complete: () =>{
        
      }
    })
  }

  private getPetParam(pet: Pet){
    let petParam = {
      id: pet.id,
      name:pet.name,
      breed:pet.breed,
      weight:pet.weight,
      image:pet.image,
      birthday:pet.birthday,
      vaccinated:pet.vaccinated,
      gender:pet.gender,
      animalClass:pet.animalClass
    }
    return petParam
  }
}
