import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {

  InitialData = [
    {
      id: 1,
      Name: "Deepak",
      Class: "4",
      Section: "C",
      Subject1: 90,
      Subject2: 69,
      Subject3: 89
    },
    {
      id: 2,
      Name: "Abhishek",
      Class: "7",
      Section: "A",
      Subject1: 78,
      Subject2: 97,
      Subject3: 98
    },
    {
      id: 3,
      Name: "Suresh",
      Class: "10",
      Section: "B",
      Subject1: 39,
      Subject2: 81,
      Subject3: 58
    },
    {
      id: 4,
      Name: "Riya",
      Class: "8",
      Section: "A",
      Subject1: 89,
      Subject2: 91,
      Subject3: 78
    },
  ];

  constructor() { }

  shareData(){
    return this.InitialData
  }
}
