import { Injectable } from '@angular/core';
import {ScheduleDataService} from './schedule-data.service';
import {timer} from 'rxjs/observable/timer';
import {CustomerVisit, VisitEvent} from './schedule-data';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SessionService {
  currentVisitor: CustomerVisit;
  refresh: Observable<number>;

  constructor(private scheduleService: ScheduleDataService) {
    this.reloadData();
    this.currentVisitor = new CustomerVisit();
    this.refresh = timer(100, 20000);
    this.refresh.subscribe(() => this.reloadData());
  }

  reloadData() {
    this.setCurrentVisitor();
  }

  setCurrentVisitor() {
    const currentVisitors = this.scheduleService.getVisitorsForRange(new Date(Date.now()), new Date(Date.now()));
    this.currentVisitor = new CustomerVisit();
    // assume there is only one visitor at a time
    currentVisitors.subscribe(visitors => {
      visitors.forEach(v => {
        this.currentVisitor.copyInto(v);
      });
    });
    return this.currentVisitor;
  }

  getCurrentVisitorEvents(): Observable<VisitEvent[]> {
    return this.scheduleService.getAgenda(this.currentVisitor.visit_id);
  }
}
