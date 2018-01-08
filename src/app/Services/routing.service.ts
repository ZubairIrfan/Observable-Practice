import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RoutingService {
  private routingSubject = new BehaviorSubject('');
  routingObservable$ =  this.routingSubject.asObservable();
  constructor() { }

  setUrl(activatedRoute) {
    this.routingSubject.next(activatedRoute)
  }
}
