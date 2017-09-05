import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Constants } from "../../app/constants";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	nome: string
	cidade: string
	estado: string
	constants: any = Constants
	public show: boolean = true;

	public type: string = 'component';

	public config: SwiperConfigInterface = {
		scrollbar: null,
		direction: 'horizontal',
		slidesPerView: 1.5,
		scrollbarHide: false,
		keyboardControl: true,
		mousewheelControl: true,
		scrollbarDraggable: true,
		scrollbarSnapOnRelease: true,
		pagination: '.swiper-pagination',
		paginationClickable: false
	};

	@ViewChild(SwiperComponent) componentRef: SwiperComponent;
	@ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  	constructor(public navCtrl: NavController) {
		this.nome = 'Lucas';
		this.cidade = this.constants.cidade;
		this.estado = this.constants.estado;
	}
	  
	toggleType() {
		this.type = this.type == 'component' ? 'directive' : 'component';
	}

	toggleDirection() {
		this.config.direction = (this.config.direction == 'horizontal') ? 'vertical' : 'horizontal';
	}

	toggleSlidesPerView() {
		if (this.config.slidesPerView != 1) {
			this.config.slidesPerView = 1;
		} else {
			this.config.slidesPerView = +this.config.slidesPerView + 1;
		}
	}

	toggleOverlayControls() {
		if (this.config.pagination) {
			this.config.scrollbar = '.swiper-scrollbar';
			this.config.pagination = null;
			this.config.nextButton = null;
			this.config.prevButton = null;
		} else if (this.config.scrollbar) {
			this.config.scrollbar = null;
		} else {
			this.config.pagination = '.swiper-pagination';
			this.config.nextButton = '.swiper-button-next';
			this.config.prevButton = '.swiper-button-prev';
		}
	}

	toggleKeyboardControl() {
		this.config.keyboardControl = !this.config.keyboardControl;
	}

	toggleMouseWheelControl() {
		this.config.mousewheelControl = !this.config.mousewheelControl;
	}

	onIndexChange(index: number) {
		console.log('Swiper index: ' + index);
	}

}
