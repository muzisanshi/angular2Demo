import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import {RouterModule} from '@angular/router'
import routes from '../router/app.router'

import Bus from './Bus'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		RouterModule.forRoot(
			routes,
      {
        useHash: true
      }
		)
  ],
  providers: [Bus],
  bootstrap: [AppComponent]
})
export class AppModule { }
