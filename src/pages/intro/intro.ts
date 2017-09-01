import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from "../../app/constants";
import { LoginPage } from "../login/login";

/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  	selector: 'page-intro',
  	templateUrl: 'intro.html',
})
export class IntroPage {

	nome: string = ''
	cidade: string = ''
	constants: any = Constants

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
    	this.navCtrl.push(LoginPage);
  	}

  	ionViewDidLoad() {
    	this.nome = this.constants.nome
    	this.cidade = this.constants.cidade
  	}

}
