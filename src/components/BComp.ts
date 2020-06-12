import {Component,Input,Output,EventEmitter} from '@angular/core'
import BaseComp from '../app/BaseComp'
import AppStore from '../store/app.store'

@Component({
  selector:'b-comp',
  templateUrl:'./BComp.html',
  styleUrls:['./BComp.scss']
})

export default class BComp extends BaseComp{
  @Input() testValue: any = ''
  @Output() outValue = new EventEmitter()

  state: any
  shit: string = 'shit'
  constructor(store: AppStore){
    super()
    this.state = store.getState()
  }
  ngOnInit(){
    console.log('BComp')
    setTimeout(() => {
      this.$emit('change','hello,body')
      this.outValue.emit({
        name:'lilei',
        age:31
      })
    },10000)
  }

  ngOnChanges(changes: any){
    console.log(changes)
  }

  getFuck(): string{
    return 'fuck'
  }
}
