import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from "../../app/constants";

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
	message: string
	nome: string
	cpf: string
	nome_cartorio: string
	cidade: string
	endereco: string
	constants: any = Constants

	constructor(public navCtrl: NavController, 
				public navParams: NavParams) {

		this.cidade = this.constants.cidade;
		this.endereco = this.constants.endereco;
		this.nome_cartorio = this.constants.nome;

	}

	ionViewDidLoad() {
	}

	goBack() {
		this.pesquisaFirma = false;
		this.nome = null;
		this.cpf = null;
	}

}
