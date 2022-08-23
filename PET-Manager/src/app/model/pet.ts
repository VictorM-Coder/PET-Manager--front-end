export interface Pet{
  id: number,
  name: string,
  breed: string,
  weight: number,
  birthday: Date,
  gender: string,
  vaccinated: boolean,
  animalClass: string,
  image: string | ArrayBuffer| null,
}