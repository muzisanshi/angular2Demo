import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector:'a-comp',
  templateUrl:'./AComp.html',
  styleUrls:['./AComp.scss']
})

export default class AComp{
  router: Router
  constructor(router: Router){
    this.router = router
  }
  ngOnInit(): void{
    console.log('AComp ? instanceof Component: ')
  }
  toA(event: any): void{
    this.router.navigate(['b'])
  }
}
