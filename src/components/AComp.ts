import {Component,ViewChild} from '@angular/core'
import {Router} from '@angular/router'
import BaseComp from '../app/BaseComp'
import AppStore from '../store/app.store'
// import { HttpClient } from '@angular/common/http'
import BComp from './BComp'

@Component({
  selector:'a-comp',
  templateUrl:'./AComp.html',
  styleUrls:['./AComp.scss']
})

export default class AComp extends BaseComp{

  @ViewChild(BComp) bcomps: BComp
  @ViewChild('bcompRef') bcomp: BComp

  state: any
  text: string = 'AComp'
  testValue: string = 'testValue'
  sex: string = 'male'

  constructor(
    public router: Router,
    public store: AppStore){

    super();
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
      // this.store.dispatch('change',{
      //   name:'name',
      //   data:'你大爷'
      // })
      this.testValue = 'testValue2'
      console.log(this.bcomps.shit)
    },5000)

  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
    console.log(document.getElementById('testEle').style)
  }

  toA(event: any): void{
    this.router.navigate(['b'])
  }
  getValue(event: any): void{
    console.log('getValue--------',event)
  }

  ngOnChanges(changes: any): void{
    console.log('change')
  }

  ngOnDestroy(): void{
    console.log('ngOnDestroy')
    this.$off('change')
  }
}
