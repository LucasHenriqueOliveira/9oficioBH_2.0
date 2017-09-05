import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 20,
  centeredSlides: false,
  keyboardControl: true
};

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SwiperModule.forRoot(SWIPER_CONFIG)
  ],
})
export class HomePageModule {}
