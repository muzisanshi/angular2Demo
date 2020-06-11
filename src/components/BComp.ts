import {Component} from '@angular/core'
import BaseComp from '../app/BaseComp'
import AppStore from '../store/app.store'

@Component({
  selector:'b-comp',
  templateUrl:'./BComp.html',
  styleUrls:['./BComp.scss']
})

export default class BComp extends BaseComp{
  state: any
  constructor(store: AppStore){
    super()
    this.state = store.getState()
  }
  ngOnInit(){
    console.log('BComp')
    setTimeout(() => {
      this.$emit('change','hello,body')
    },10000)
  }
}
