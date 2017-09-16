import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Constants } from "../../app/constants";
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the FirmaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firma',
  templateUrl: 'firma.html',
})
export class FirmaPage {

	pesquisaFirma: boolean = false
	hasFirma: boolean = false
	message: string
	nome: string
	cpf: string
	nome_cartorio: string
	cidade: string
	endereco: string
	constants: any = Constants

	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public toastCtrl: ToastController,
				public loadingCtrl: LoadingController,
				private dataProvider: DataProvider) {

		this.cidade = this.constants.cidade;
		this.endereco = this.constants.endereco;
		this.nome_cartorio = this.constants.nome;

	}

	ionViewDidLoad() {
	}

	submit() {
		if(!this.cpf && !this.nome) {
			let toast = this.toastCtrl.create({
				message: 'Informe o CPF e/ou Nome!',
				duration: 3000,
				position: 'middle',
				cssClass: 'toast-error'
			});
			toast.present();
			return;
		}

		let loader = this.loadingCtrl.create({content: "Aguarde..."});

		this.dataProvider.getFirma(this.cpf, this.nome).subscribe(res => {
			loader.dismiss();
			this.pesquisaFirma = true;
			this.message = res['message'];
			this.hasFirma = res['hasFirma'];
		}, err => {
			loader.dismiss();
			let toast = this.toastCtrl.create({
				message: 'Erro ao pesquisar a firma!',
				duration: 3000,
				position: 'middle',
				cssClass: 'toast-error'
			});
			toast.present();
			console.log('error: '+ err)
		})
	}

	goBack() {
		this.pesquisaFirma = false;
		this.nome = null;
		this.cpf = null;
	}

}
