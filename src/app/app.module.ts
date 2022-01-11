import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HighlightPipe } from './pipes/highlight.pipe';
import { BreakPipe } from './pipes/break.pipe';
import { LinksComponent } from './pages/links/links.component';

const TRANSLATE_FACTORY = (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TopNavigationComponent,
    ExperiencesComponent,
    ExperienceComponent,
    HighlightPipe,
    BreakPipe,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TRANSLATE_FACTORY,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private translater: TranslateService) {
    this.translater.setDefaultLang('en');
  }

}
