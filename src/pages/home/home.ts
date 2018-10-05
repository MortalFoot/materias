import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CienciasPage } from '../ciencias/ciencias';
import { ProbabilidadPage } from '../probabilidad/probabilidad';
import { ComPage } from '../com/com';
import { DibPage } from '../dib/dib';
import { PappsPage } from '../papps/papps';

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
}
