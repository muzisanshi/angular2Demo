import {Component} from '@angular/core'
import {Router} from '@angular/router'
import BaseComp from '../app/BaseComp'
import AppStore from '../store/app.store'
import { HttpClient } from '@angular/common/http'

@Component({
  selector:'a-comp',
  templateUrl:'./AComp.html',
  styleUrls:['./AComp.scss']
})

export default class AComp extends BaseComp{
  router: Router
  state: any
  store: AppStore
  http: HttpClient
  text: string = 'AComp'
  constructor(router: Router,store: AppStore,http: HttpClient){
    super();
    this.router = router
    this.http = http
    this.store = store
    this.state = store.getState()
    console.log('AComp----constructor')
  }
  ngOnInit(): void{
    console.log('AComp----ngOnInit')
    function cb1(d: any): void{
      console.log(d)
    }
    function cb2(d: any): void{
      console.log(d)
    }
    this.$on('change',cb1)
    this.$on('change',cb2)

    this.$off('change',cb2)

    setTimeout(() => {
      this.store.dispatch('change',{
        name:'name',
        data:'你大爷'
      })
    },5000)

  }
  toA(event: any): void{
    this.router.navigate(['b'])
  }

  ngOnDestroy(): void{
    console.log('ngOnDestroy')
    this.$off('change')
  }
}
