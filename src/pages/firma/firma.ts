import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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

	private formFirma: FormGroup
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
				private formBuilder: FormBuilder) {

		this.cidade = this.constants.cidade;
		this.endereco = this.constants.endereco;
		this.nome_cartorio = this.constants.nome;

		this.formFirma = this.formBuilder.group({
			cpf: this.formBuilder.control('', []),
			nome: this.formBuilder.control('', [])
			})
	}

	ionViewDidLoad() {
	}

	goBack() {
		this.hasFirma = false;
		this.nome = null;
		this.cpf = null;
	}

}
