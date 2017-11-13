import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SessionService} from '../session.service';
import {VisitEvent} from '../schedule-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgendaComponent implements OnInit {
  agendaItems: Array<VisitEvent>;

  constructor(private session: SessionService,
              private router: Router) { }

  ngOnInit() {
    this.agendaItems = [];
    this.session.refresh.subscribe(() => this.loadEvents());
  }

  loadEvents() {
    const res: Array<VisitEvent> = [];
    this.session.getCurrentVisitorEvents().subscribe(
      (events) => {
        events.forEach( event => {
          // javascript is kind of quirky, even though I have type casted the json data
          // to a VisitEvent, it is still a string even though that shouldn't be possible...
          const eventEnd = new Date(event.event_end);
          const now = new Date(Date.now());
          // don't get events that have already ended
          if (now < eventEnd) {
            const e = new VisitEvent();
            e.copyInto(event);
            res.push(e);
          }
        });
      }
    );
    this.agendaItems = res;
  }
}
