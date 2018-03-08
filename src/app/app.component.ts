import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html',
	styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(public translate: TranslateService) {

	}

	ngOnInit() {
		this.translate.addLangs(['en', 'nl']);
		this.translate.setDefaultLang('en');
		this.translate.use('en');
	}
}
