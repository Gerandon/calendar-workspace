import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CalendarModule} from "../../../gerandon/ngx-calendar/src/lib/calendar.module";
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MissingTranslationService} from "./services/missing-translations.service";

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
