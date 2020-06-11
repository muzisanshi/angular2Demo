import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import Api from '../api/index'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import {RouterModule} from '@angular/router'
import routes from '../router/app.router'
import AppStore from '../store/app.store'
import BComp from '../components/BComp'
import AComp from '../components/AComp'

@NgModule({
  declarations: [
    AppComponent,
    BComp,
    AComp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
		RouterModule.forRoot(
			routes,
      {
        useHash: true
      }
		)
  ],
  providers: [
    AppStore,
    Api,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
