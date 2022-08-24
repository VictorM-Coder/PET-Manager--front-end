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

  findAllByAnimalClass(animalClass: string){
    return this.httpClient.get<Pet[]>(URL + `/animalClass/${animalClass}`)
  }

  findByWeightInterval(start: number, end: number){
    return this.httpClient.get<Pet[]>(URL + '/weightInterval', {params: {'start': start, 'end': end}})
  }

  post(pet:Pet){
    console.log(pet)
    let petTest = {
      name:pet.name,
      breed:pet.breed,
      weight:pet.weight,
      image:pet.image,
      birthday:pet.birthday,
      vaccinated:pet.vaccinated,
      gender:pet.gender,
      animalClass:pet.animalClass
    }

    return this.httpClient.post<Pet>('http://localhost:8080/api/animal', petTest)
  }

  delete(pet: Pet){
    return this.httpClient.put<Pet>(URL + `/delete/${pet.id}`, pet)
  }
}
