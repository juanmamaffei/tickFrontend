import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { MensajesComponent } from './mensajes/mensajes.component';
import { EnvioComponent } from './envio/envio.component';
import { ContactosComponent } from './contactos/contactos.component';
import { OpcionesComponent } from './opciones/opciones.component';

const routes: Routes = [
  { path: 'mensajes', component: MensajesComponent},
  { path: 'contactos', component: ContactosComponent},
  { path: 'enviar', component: EnvioComponent},
  { path: '', redirectTo: '/contactos', pathMatch: 'full'}
];
// { path: '**', redirectTo: MensajesComponent, pathMatch: 'full'}
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})

export class AppRoutingModule {}
