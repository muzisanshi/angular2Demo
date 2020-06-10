import {Component} from '@angular/core'
import {Router} from '@angular/router'
import Bus from '../app/Bus'

@Component({
  selector:'a-comp',
  templateUrl:'./AComp.html',
  styleUrls:['./AComp.scss']
})

export default class AComp{
  router: Router
  bus: Bus
  constructor(router: Router,bus: Bus){
    this.router = router
    this.bus = bus
  }
  ngOnInit(): void{
    console.log(this.bus)
    function cb1(d: any): void{
      console.log('cb1')
    }
    function cb2(d: any): void{
      console.log('cb2')
    }
    this.bus.on('change',cb1)
    this.bus.on('change',cb2)

    this.bus.off('change',cb1)
  }
  toA(event: any): void{
    this.router.navigate(['b'])
  }
}
