import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ContaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {

	nome: string
	email: string
	cpf: string
	telefone: string

	constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
		this.userProvider.getUserData().subscribe(res => {
			this.nome = res['nome']
			this.email = res['email']
			this.cpf = res['cpf']
			this.telefone = res['telefone']
		}, err => {
			console.log('error: '+ err)
		})
	}

	ionViewDidLoad() {
	}

}
