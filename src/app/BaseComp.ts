import BaseCompInter from './BaseCompInter'
import Bus from './Bus'
class BaseComp implements BaseCompInter{
  $on(event: string , cb: (data: any) => void): void{
    Bus.on(event,cb)
  }
  $emit(event: string , data?: any): void{
    Bus.emit(event,data)
  }
  $off(event: string,cb?: (data: any) => void): void{
    Bus.off(event,cb)
  }
}
export default BaseComp;
