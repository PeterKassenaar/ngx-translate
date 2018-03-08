// Basic angular stuff
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Http} from '@angular/http';

// Translation Stuff
import {TranslateModule} from 'ng2-translate/ng2-translate';
import {TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

import {AppComponent} from './app.component';

export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}


@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		TranslateModule.forRoot({
			provide   : TranslateLoader,
			useFactory: (createTranslateLoader),
			deps      : [Http]
		})
	],
	providers   : [],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
