import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MobileNavBoxComponent } from './mobile-nav-box/mobile-nav-box.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { BiographyComponent } from './biography/biography.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ProyectDetailsComponent } from './proyect-details/proyect-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'proyectos', component: ProyectDetailsComponent },
  { path: '', component: ProyectsComponent },
  { path: '**', component: ProyectsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MobileNavBoxComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    BiographyComponent,
    ProyectsComponent,
    ProyectDetailsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }