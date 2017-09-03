import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Constants } from "../../app/constants";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CadastroPage } from "../cadastro/cadastro";
import { Login } from "./login.model";
import { LoginService } from "./login.service";

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
	dataLogin: any = []

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				private formBuilder: FormBuilder, 
				public alertCtrl: AlertController,
				public toastCtrl: ToastController, 
				private loginService: LoginService) {

		this.formLogin = this.formBuilder.group({
			email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
			password: this.formBuilder.control('', [Validators.required])
		  })
	}

	ionViewDidLoad() {
		this.nome = this.constants.nome
		this.cidade = this.constants.cidade
	}

	signup() {
		this.navCtrl.push(CadastroPage);
	}

	login(login: Login) {
		this.loginService.login(login).subscribe(data => {
			this.dataLogin = data

			console.log("logado")
		  }, err => {
			let toast = this.toastCtrl.create({
				message: 'Usuário não encontrado!',
				duration: 3000,
				position: 'middle',
				cssClass: 'toast-error'
			});
			toast.present();
		  })
	}

	esqueceuSenha() {
		let prompt = this.alertCtrl.create({
		  title: 'Esqueceu a senha?',
		  message: "Entre com o seu e-mail cadastrado",
		  inputs: [
			{
			  name: 'email',
			  placeholder: 'Seu e-mail'
			},
		  ],
		  buttons: [
			{
			  text: 'Cancelar',
			  handler: data => {
				console.log('Cancel clicked');
			  }
			},
			{
			  text: 'Enviar',
			  handler: data => {
				console.log(data);
			  }
			}
		  ]
		});
		prompt.present();
	}
}
