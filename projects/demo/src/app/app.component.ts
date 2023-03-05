import { Component } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {TimelineData} from "../../../gerandon/calendar/src/lib/interfaces/calendar-common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public timelineDate = new BehaviorSubject<Date>(new Date());
  public timelineData: Observable<TimelineData[]>;

  constructor() {
    this.timelineData = of([
      {
        date: new Date(),
        dayData: [
          {
            separator: '-',
            props: [
              {
                index: 1,
                value: 'Test'
              }
            ]
          }
        ]
      }
    ]);
  }
}
