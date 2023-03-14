import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'ngx-translate-demo';
  url: string = 'https://www.codeandweb.com/babeledit';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('nl');
    translate.use('nl')
  }

  useLanguage(language: string): void {
    this.translate.use(language)
  }
}
