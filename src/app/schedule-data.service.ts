import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CustomerVisit, VisitEvent } from './schedule-data';
import {HttpClient} from '@angular/common/http';

// replace this with an interface to a real backend
@Injectable()
export class ScheduleDataService {

  // change this to http://localhost:8000 if you are running a local instance of the backend
  private schedule_data_url = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getVisitors(): Observable<CustomerVisit[]> {
    return this.http.get<CustomerVisit[]>(this.schedule_data_url + '/schedule/visitor');
  }

  getVisitorsForRange(start: Date, end: Date): Observable<CustomerVisit[]> {
    const url = this.schedule_data_url + '/schedule/visitor?start_date=' +
      start.toISOString() + '&end_date=' + end.toISOString();
    return this.http.get<CustomerVisit[]>(url);
  }

  getVisitor(id: number): Observable<CustomerVisit> {
    if (id === null) {
      id = -1;
    }
    const url = this.schedule_data_url + '/schedule/visitor/' + id.toString();
    return this.http.get<CustomerVisit>(url);
  }

  getAgenda(id: number): Observable<VisitEvent[]> {
    if (typeof id === 'undefined') {
      id = -1;
    }
    const url = this.schedule_data_url + '/schedule/visitor/' + id.toString() + '/agenda';
    return this.http.get<VisitEvent[]>(url);
  }

  getEvents(): Observable<VisitEvent[]> {
    return this.http.get<VisitEvent[]>(this.schedule_data_url + '/schedule/event');
  }

  getEvent(id: number): Observable<VisitEvent> {
    if (typeof id === 'undefined') {
      id = -1;
    }
    return this.http.get<VisitEvent>(this.schedule_data_url + '/schedule/event/' + id.toString());
  }
}
