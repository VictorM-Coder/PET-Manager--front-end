import { Pet } from './../model/pet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const URL:string = 'http://localhost:8080/api/pet'
@Injectable({
  providedIn: 'root'
})

export class PetService {

  constructor(private httpClient: HttpClient) { }

  findall(){
    return this.httpClient.get<Pet[]>(URL + '/animals')
  }

  findById(id: number){
    return this.httpClient.get<Pet>(URL + `/${id}`)
  }

  findAllByAnimalClass(animalClass: string){
    return this.httpClient.get<Pet[]>(URL + `/animalClass/${animalClass}`)
  }

  findAllByGenre(genre: string){
    return this.httpClient.get<Pet[]>(URL + `/genre/${genre}`)
  }

  findByWeightInterval(start: number, end: number){
    return this.httpClient.get<Pet[]>(URL + '/weightInterval', {'start': start, 'end': end})
  }

  post(pet:Pet){
    return this.httpClient.post<Pet>(URL, pet)
  }

  delete(pet: Pet){
    return this.httpClient.put<Pet>(URL + `/delete/${pet.id}`, pet)
  }
}
