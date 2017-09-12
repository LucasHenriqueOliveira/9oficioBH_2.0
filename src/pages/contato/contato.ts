import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { Constants } from "../../app/constants";
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContatoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {

  	constants: any = Constants
  	nome: string
	endereco: string
  	cidade: string
  	estado: string
  	telefone: string
  

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				private emailComposer: EmailComposer,
				public toastCtrl: ToastController,
				public platform: Platform) {
		this.nome = this.constants.nome;
		this.endereco = this.constants.endereco;
		this.cidade = this.constants.cidade;
		this.estado = this.constants.estado;
		this.telefone = this.constants.telefone;
	}

	ionViewDidLoad() {
	}

	openEmail() {
		let email = {
			to: 'contato@cartorioapp.com',
			subject: 'Cartório App',
			body: '',
			isHtml: true
		};

		if (this.platform.is('cordova')) {
			this.emailComposer.isAvailable().then((available: boolean) =>{
				if(available) {
					this.emailComposer.open(email);
				} else {
					let toast = this.toastCtrl.create({
						message: 'Não foi detectado nenhum gerenciador de email configurado no dispositivo!',
						duration: 3000,
						position: 'middle',
						cssClass: 'toast-error'
					});
					toast.present();
				}
			});
		} else {
			let toast = this.toastCtrl.create({
				message: 'Não foi detectado nenhum gerenciador de email configurado no dispositivo!',
				duration: 3000,
				position: 'middle',
				cssClass: 'toast-error'
			});
			toast.present();
		}
	}

}
