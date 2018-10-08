import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';

/* agragados */
import { TabModule } from 'angular-tabs-component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TabModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    MenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
