import * as _ from 'underscore';

export class CustomerVisit {
  visit_id: number;
  customer_name: string;
  customer_industry: string;
  visit_start: Date;
  visit_end: Date;

  hasContents(): boolean {
    return !_.isEqual(this, new CustomerVisit()) && this.visit_id !== undefined;
  }

  copyInto(dat: object) {
    this.visit_id = dat['visit_id'];
    this.customer_name = dat['customer_name'];
    this.customer_industry = dat['customer_industry'];
    this.visit_start = new Date(Date.parse(dat['visit_start']));
    this.visit_end = new Date(Date.parse(dat['visit_end']));
  }
}

export class VisitEvent {
  visit_id: number;
  event: string;
  show_on_agenda: boolean;
  event_start: Date;
  event_end: Date;

  hasContents(): boolean {
    return !_.isEqual(this, new VisitEvent);
  }

  copyInto(dat: object) {
    this.visit_id = dat['visit_id'];
    this.event = dat['event'];
    this.show_on_agenda = dat['show_on_agenda'];
    this.event_start = new Date(Date.parse(dat['event_start']));
    this.event_end = new Date(Date.parse(dat['event_end']));
  }
}
