
interface BaseCompInter{
  $on(event: string , cb: (data: any) => void): void
  $emit(event: string , data?: any): void
  $off(event: string,cb?: (data: any) => void): void
}
export default BaseCompInter;
