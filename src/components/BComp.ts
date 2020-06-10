import {Component} from '@angular/core'
import Bus from '../app/Bus'

@Component({
  selector:'b-comp',
  templateUrl:'./BComp.html',
  styleUrls:['./BComp.scss']
})

export default class BComp{
  bus: Bus
  constructor(bus: Bus){
    this.bus = bus
  }
  ngOnInit(){
    console.log('BComp')
    setTimeout(() => {
      this.bus.emit('change','hello,body')
    },5000)
  }
}
