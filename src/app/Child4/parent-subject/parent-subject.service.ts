import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface State {
  countdown: number,
  timelogs: { start: boolean,  countdown: number, time: Date}[],
}

@Injectable({
  providedIn: 'root'
})
export class ParentSubjectService {

  constructor() { }

  dataSubject:BehaviorSubject<State>=new BehaviorSubject<State>({
    countdown: 0,
    timelogs: [],
  });

  dataSubject$ = this.dataSubject.asObservable()

  senddata(data:State){
this.dataSubject.next(data)
  }

}
