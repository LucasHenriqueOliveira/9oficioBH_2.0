import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { PrivacidadePage } from "../privacidade/privacidade";

/**
 * Generated class for the CadastroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  private formSignUp: FormGroup
	
	emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
		this.formSignUp = this.formBuilder.group({
			nome: this.formBuilder.control('', [Validators.required]),
			email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
			telefone: this.formBuilder.control('', [Validators.required]),
			cpf: this.formBuilder.control('', [Validators.required]),
			password: this.formBuilder.control('', [Validators.required]),
			confirm_password: this.formBuilder.control('', [Validators.required])
		  })
	}

	ionViewDidLoad() {
	}

	termos() {
		this.navCtrl.push(PrivacidadePage);
	}

}
