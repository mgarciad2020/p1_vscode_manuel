import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],


})
export class Pag2Page implements OnInit {

  abrirYoutube(){
    window.open('https://www.youtube.com/');
  }


  constructor(public toastControler: ToastController) { }

  async presentToast() {
    const toast = await this.toastControler.create({
      message: 'Your settings have been saved.',
      duration: 900
    });
    toast.present();
  }

  ngOnInit() {
  }

}
