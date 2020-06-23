import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import Api from '../api/index'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'

import {RouterModule} from '@angular/router'
import routes from '../router/app.router'
import AppStore from '../store/app.store'
import BComp from '../components/BComp'
import AComp from '../components/AComp'

import GenderPipe from '../util/GenderPipe'
import BackgroundDirective from '../util/BackgroundDirective'

@NgModule({
  declarations: [
    AppComponent,
    BComp,
    AComp,
    GenderPipe,
    BackgroundDirective,
  ],
  imports: [
    FormsModule,
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
