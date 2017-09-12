import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IntroPage } from "../pages/intro/intro";
import { PrivacidadePage } from "../pages/privacidade/privacidade";

import { Constants } from "../app/constants";
import { ContaPage } from '../pages/conta/conta';
import { ContatoPage } from '../pages/contato/contato';
import { LoginPage } from '../pages/login/login';
import { UserProvider } from '../providers/user/user';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = IntroPage;
	nome: string = ''
	cidade: string = ''
	site: string = ''
	constants: any = Constants

	pages: Array<{title: string, component: any}>;

	constructor(public platform: Platform, 
				public statusBar: StatusBar, 
				public splashScreen: SplashScreen,
				private userProvider: UserProvider,
				private socialSharing: SocialSharing,
				public toastCtrl: ToastController) {
		this.initializeApp();
		this.nome = this.constants.nome
		this.cidade = this.constants.cidade
		this.site = this.constants.site
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
			case 'conta':
				this.nav.push(ContaPage);
				break;
			case 'contato':
				this.nav.push(ContatoPage);
				break;
		}
	}

	logout() {
		this.userProvider.clearStorage();
		this.nav.push(LoginPage);
	}

	openShare() {
		if (this.platform.is('cordova')) {
			let message = "Conheça o " + this.nome + " - Cartório App. O aplicativo que facilita o acesso aos serviços no " + this.nome + " em " + this.cidade + ".";
			this.socialSharing.share(message, null, null, this.site).then(() => {
				// Success!
			}).catch(() => {
				let toast = this.toastCtrl.create({
					message: 'Não foi possível abrir o gerenciador de compartilhamento!',
					duration: 3000,
					position: 'middle',
					cssClass: 'toast-error'
				});
				toast.present();
			});
		} else {
			let toast = this.toastCtrl.create({
				message: 'Não foi possível abrir o gerenciador de compartilhamento!',
				duration: 3000,
				position: 'middle',
				cssClass: 'toast-error'
			});
			toast.present();
		}
	}
}
