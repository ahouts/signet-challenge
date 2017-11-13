import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionService} from '../session.service';


const imageDir = 'assets/images/backgrounds/';
const defaultBackgroundImage = imageDir + 'general.jpg';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BackgroundComponent implements OnInit {
  backgroundImage: string;

  constructor(private http: HttpClient,
              private session: SessionService) { }

  ngOnInit() {
    this.backgroundImage = defaultBackgroundImage;
    this.reloadData();
    this.session.refresh.subscribe(() => this.reloadData());
  }

  reloadData() {
    if (this.session.currentVisitor && this.session.currentVisitor.customer_industry !== undefined) {
      this.backgroundImage = imageDir + this.session.currentVisitor.customer_industry + '.jpg';
    }
  }

  private fileExists(path: string): boolean {
    let found = false;
    this.http.head(path).subscribe(
      () => {}, () => { // error
        found = false;
      }, () => { // completed without error
        found = true;
      });
    return found;
  }
}
