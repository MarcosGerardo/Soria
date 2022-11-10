import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaroneComponent } from './navbarone/navbarone.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { NavbartwoComponent } from './navbartwo/navbartwo.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonWsComponent } from './button-ws/button-ws.component';
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbaroneComponent,
    CarouselComponent,
    CardComponent,
    NavbartwoComponent,
    FooterComponent,
    ButtonWsComponent,
    IndexComponent,
    ProductosComponent,
    NosotrosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
