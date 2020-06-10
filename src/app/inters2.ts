/// <reference path = "inters.ts" />
namespace Inters2{
  export interface Inter2{
    func2(): void
  }
  export class Inter2Class implements Inters.Inter1{
    func1(): void{
      console.log('Inter2Class func1')
    }
  }
}
