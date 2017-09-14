import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Certidao } from './certidao.model';
import { DataProvider } from '../../providers/data/data';
import { Constants } from "../../app/constants";
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the CertidaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-certidao',
  templateUrl: 'certidao.html',
})
export class CertidaoPage {

	private formCertidao: FormGroup
	hasCertidao: boolean = false
	telefone: string
	constants: any = Constants

	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				private formBuilder: FormBuilder,
				public loadingCtrl: LoadingController,
				private dataProvider: DataProvider,
				private userProvider: UserProvider,
				public toastCtrl: ToastController) {

		this.telefone = this.constants.telefone;

		this.formCertidao = this.formBuilder.group({
			ato: this.formBuilder.control('', [Validators.required]),
			livro: this.formBuilder.control('', [Validators.required]),
			folha: this.formBuilder.control('', [Validators.required]),
			outorgante: this.formBuilder.control('', [Validators.required]),
			outorgado: this.formBuilder.control('', [Validators.required])
			})
	}

	ionViewDidLoad() {
	}

	submit(certidao: Certidao) {
		let loader = this.loadingCtrl.create({content: "Aguarde..."});
		loader.present();

		this.userProvider.getUserData().subscribe(res => {
			certidao['user_id'] = res['id'];
			
			this.dataProvider.setCertidao(certidao).subscribe(res => {
				this.hasCertidao = true;
				loader.dismiss();
			}, err => {
				loader.dismiss();
				let toast = this.toastCtrl.create({
					message: 'Erro ao solicitar a certidão!',
					duration: 3000,
					position: 'middle',
					cssClass: 'toast-error'
				});
				toast.present();
				console.log('error: '+ err)
			})
		}, err => {
			loader.dismiss();
			let toast = this.toastCtrl.create({
				message: 'Erro ao solicitar a certidão!',
				duration: 3000,
				position: 'middle',
				cssClass: 'toast-error'
			});
			toast.present();
			console.log('error: '+ err)
		})
		
		
	}

	goBack() {
		this.hasCertidao = false;
		this.formCertidao.reset();
	}

}
