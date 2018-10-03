import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CienciasPage } from '../ciencias/ciencias';
import { ProbabilidadPage } from '../probabilidad/probabilidad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia =HistoriaPage;
  Ciencias = CienciasPage;
  probabilidad = ProbabilidadPage
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
}
