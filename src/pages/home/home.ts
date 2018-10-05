import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CienciasPage } from '../ciencias/ciencias';
import { ProbabilidadPage } from '../probabilidad/probabilidad';
import { ComPage } from '../com/com';
import { DibPage } from '../dib/dib';
import { PappsPage } from '../papps/papps';
import { RobPage } from '../rob/rob';
import { MiPage } from '../mi/mi';
import { CalPage } from '../cal/cal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia =HistoriaPage;
  Ciencias = CienciasPage;
  probabilidad = ProbabilidadPage
  comunicacion = ComPage;
  dibujo = DibPage;
  aplicacion = PappsPage;
  robotica = RobPage;
  meto= MiPage;
  cals = CalPage;

  constructor(public navCtrl: NavController) {

  }

   clickHistoria() {
  
    this.navCtrl.push(this.historia);

   }

   clickCiencias(){

    this.navCtrl.push(this.Ciencias);


   }

   clickProbabilidad(){

    this.navCtrl.push(this.probabilidad);

   }

   clickCOM(){
     
    this.navCtrl.push(this.comunicacion);

   }

   clickDIB(){

    this.navCtrl.push(this.dibujo);

   }

   clickPAAPS(){

   this.navCtrl.push(this.aplicacion);

   }

   clickROB(){

   this.navCtrl.push(this.robotica);

   }

   clickMI(){
    
    this.navCtrl.push(this.meto);

   }

   clickCAL(){

    this.navCtrl.push(this.cals);

   }
}
