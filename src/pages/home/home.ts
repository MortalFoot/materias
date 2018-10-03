import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CienciasPage } from '../ciencias/ciencias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia =HistoriaPage;
  Ciencias = CienciasPage;
  constructor(public navCtrl: NavController) {

  }

   clickHistoria() {
  
    this.navCtrl.push(this.historia);

   }

   clickCiencias(){


   }
}
