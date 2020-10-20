import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pag1PageRoutingModule } from './pag1-routing.module';

import { Pag1Page } from './pag1.page';
import { ComponentesModule } from '../../componentes/componentes.module';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pag1PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Pag1Page]
})
export class Pag1PageModule {}
