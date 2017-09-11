import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from "../../app/constants";
import { UpperCasePipe } from '@angular/common';

/**
 * Generated class for the CalculoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculo',
  templateUrl: 'calculo.html',
})
export class CalculoPage {

	valor: number
	constants: any = Constants
	estado: string = ''
	cidade: string = ''
	index: string
	titulo: string
	valor_calculado: number
	hasCalculo: boolean = false

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		this.index = navParams.get("index");
		if(this.index == 'itbi') {
			this.titulo = 'Cálculo de ITBI'
		} else {
			this.titulo = 'Cálculo de ITCD'
		}
	}

	ionViewDidLoad() {
		this.estado = this.constants.estado
		this.cidade = this.constants.cidade
	}

	calcular() {
		this.hasCalculo = true;

		if(this.index == 'itbi') {
            this.valor_calculado = this.valor * 3/100;
		} else {
			this.valor_calculado = this.valor * 5/100;
		}
	}

	goBack() {
		this.hasCalculo = false;
		this.valor = null;
	}

}
