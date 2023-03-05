import {NgModule} from '@angular/core';
import {CalendarComponent} from './calendar/calendar.component';
import {CalendarDayItemComponent} from './calendar-day-item/calendar-day-item.component';
import {RecordValuePipe} from './pipes/record-value.pipe';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TranslateModule, TranslateLoader, MissingTranslationHandler} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MissingTranslationService} from "./services/missing-translations.service";

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingTranslationService,
      },
    }),
  ]
})
export class CalendarModule {
}
