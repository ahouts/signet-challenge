import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SessionService} from '../session.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {
  welcomeMessage: string;

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.welcomeMessage = '';
    this.session.refresh.subscribe(() => this.setWelcomeMessage());
  }

  setWelcomeMessage() {
    if (this.session.currentVisitor && this.session.currentVisitor.hasContents()) {
      this.welcomeMessage = 'Welcome ' + this.session.currentVisitor.customer_name;
    } else {
      this.welcomeMessage = 'Welcome to the Executive Briefing Center';
    }
  }
}
