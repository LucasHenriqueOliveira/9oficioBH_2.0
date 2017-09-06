import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IntroPage } from "../pages/intro/intro";
import { PrivacidadePage } from "../pages/privacidade/privacidade";

import { Constants } from "../app/constants";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = IntroPage;
	nome: string = ''
	cidade: string = ''
	constants: any = Constants

	pages: Array<{title: string, component: any}>;

	constructor(public platform: Platform, 
				public statusBar: StatusBar, 
				public splashScreen: SplashScreen) {
		this.initializeApp();
		this.nome = this.constants.nome
		this.cidade = this.constants.cidade

	}

	initializeApp() {
		this.platform.ready().then(() => {
		// Okay, so the platform is ready and our plugins are available.
		// Here you can do any higher level native things you might need.
		this.statusBar.styleDefault();
		this.splashScreen.hide();
		});
	}

  	openPage(page) {
		switch (page) {
			case 'privacidade':
				this.nav.push(PrivacidadePage);
				break;
		}
	}
}
