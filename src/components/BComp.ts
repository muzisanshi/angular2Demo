import {Component} from '@angular/core'

@Component({
  selector:'b-comp',
  templateUrl:'./BComp.html',
  styleUrls:['./BComp.scss']
})

export default class BComp{
  ngOnInit(){
    console.log('BComp')
  }
}
