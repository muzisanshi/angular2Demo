import { Injectable } from '@angular/core'

@Injectable({
  providedIn:'root'
})

export default class Bus{

  static eventMap = {}

  on(event: string , cb: (data: any) => void): void{
    if(!event) return
    Bus.eventMap[event] = Bus.eventMap[event] || []
    if(cb && typeof cb === 'function')
      Bus.eventMap[event].push(cb)
  }

  emit(event: string , data?: any): void{
    if(!event) return
    if(Bus.eventMap[event]){
      Bus.eventMap[event].map(it => {
        it && typeof it === 'function' ? (
          it(data)
        ) : ''
      })
    }
  }

  off(event: string,cb?: (data: any) => void): void{
    if(!event) return
    if(Bus.eventMap[event]){
      if(!cb) {
        delete Bus.eventMap[event]
        return
      }
      Bus.eventMap[event].map((it,id) => {
        it === cb ? Bus.eventMap[event].splice(id,1) : ''
      })
    }
  }

}
