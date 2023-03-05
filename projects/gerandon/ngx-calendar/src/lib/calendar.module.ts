import {NgModule} from '@angular/core';
import {CalendarComponent} from './calendar/calendar.component';
import {CalendarDayItemComponent} from './calendar-day-item/calendar-day-item.component';
import {RecordValuePipe} from './pipes/record-value.pipe';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TranslateModule} from "@ngx-translate/core";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDayItemComponent,
    RecordValuePipe
  ],
  exports: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    HttpClientModule,
    TranslateModule,
  ]
})
export class CalendarModule {
}
