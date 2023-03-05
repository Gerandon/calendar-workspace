import { Component } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {TimelineData} from "../../../gerandon/ngx-calendar/src/lib/interfaces/calendar-common";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public timelineDate = new BehaviorSubject<Date>(new Date());
  public timelineData: Observable<TimelineData[]>;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('hu');
    translate.use('hu');

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
