import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { CienciasPage } from '../pages/ciencias/ciencias';
import { ProbabilidadPage } from '../pages/probabilidad/probabilidad';
import { ComPage } from '../pages/com/com';
import { DibPage } from '../pages/dib/dib';
import { PappsPage } from '../pages/papps/papps';
import { RobPage } from '../pages/rob/rob';
import { MiPage } from '../pages/mi/mi';
import { CalPage } from '../pages/cal/cal';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    HistoriaPage,
    CienciasPage,
    ProbabilidadPage,
    ComPage,
    DibPage,
    PappsPage,
    RobPage,
    MiPage,
    CalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    CienciasPage,
    ProbabilidadPage,
    ComPage,
    DibPage,
    PappsPage,
    RobPage,
    MiPage,
    CalPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
