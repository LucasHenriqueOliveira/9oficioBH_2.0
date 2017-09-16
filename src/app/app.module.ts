import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPageModule } from "../pages/intro/intro.module";
import { LoginPageModule } from "../pages/login/login.module";
import { CadastroPageModule } from "../pages/cadastro/cadastro.module";
import { HomePageModule } from "../pages/home/home.module";
import { PrivacidadePageModule } from "../pages/privacidade/privacidade.module";
import { LoginService } from "../pages/login/login.service";
import { CadastroService } from "../pages/cadastro/cadastro.service";
import { UserProvider } from '../providers/user/user';
import { DataProvider } from '../providers/data/data';
import { CalculoPageModule } from "../pages/calculo/calculo.module";
import { ContaPageModule } from '../pages/conta/conta.module';
import { ContatoPageModule } from '../pages/contato/contato.module';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CertidaoPageModule } from '../pages/certidao/certidao.module';
import { FirmaPageModule } from '../pages/firma/firma.module';


@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'arrow-round-back',
      iconMode: 'md'
    }),
    HttpModule,
    IntroPageModule,
    LoginPageModule,
    CadastroPageModule,
    HomePageModule,
    PrivacidadePageModule,
    CalculoPageModule,
    ContaPageModule,
    ContatoPageModule,
    CertidaoPageModule,
    FirmaPageModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    CadastroService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    DataProvider,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    EmailComposer,
    SocialSharing
  ]
})
export class AppModule {}
