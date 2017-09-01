import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from "../../app/constants";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	private formLogin: FormGroup
	
	emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  	nome: string = ''
  	cidade: string = ''
	constants: any = Constants

	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
		this.formLogin = this.formBuilder.group({
			email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
			password: this.formBuilder.control('', [Validators.required])
		  })
	}

	ionViewDidLoad() {
		this.nome = this.constants.nome
		this.cidade = this.constants.cidade
	}
}
