import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDemo';
	ngOnInit(){
    console.log('--------angular2--------')
    let arr : number[] = [1,2,3];
    console.log(arr.join())
    console.log(typeof arr)
    let num : any = 1;
    let str : number = 1;
    console.log(num === str);
    let day : any = 0;
    enum et {Mon,Tue,Thur,Fri};
    let eto : et = et.Mon;
    if(eto === et.Mon){
      console.log('equal')
    }

    function func(name : string) : string{
      console.log(name)
      return name;
    }
    func('lilei');

    class MyClass{
      name : string = 'heihei';
      constructor(name : string){
        this.name = name;
      }
      getName() : void{
        console.log(this.name)
      }
    }
    new MyClass('hehe').getName();

    interface MyInter {
      name: string,
    }

    let inter : MyInter = {
      name: 'lilei',
    }

    console.log(JSON.stringify(inter))

    // namespace mySpace {
    //   export interface MyInter1{
    //     name: string,
    //   }
    //   export interface MyInter2{
    //     age: number,
    //   }
    // }

    test();
    function test(): void{
      console.log('test')
    }
    let test2 = function(name: string,age?: number): void{
      console.log(name)
      // return 'test22222222';
    }

    let func2 : (name: string) => string;

    test2('lilei');

    let test3 = function(name: string,age: number = 31){
      console.log(age);
    }

    test3('lilei');

    function test4(name: string): void{

    }

    // test4(31)

    interface FuncInter{
      name: string;
      func1(param: string): void;
      func1(param: number): void;
      func1(param: boolean): void;
    }

    interface Obj{
      prop1: string,
      prop2: string,
    }
    class FuncClass implements FuncInter,Obj {
      name: string = 'lilei';
      prop1: string = 'prop1';
      public prop2: string = 'prop2';
      func1(param: (string|number|boolean)): void{
        console.log(param)
        if(param){
          var inner = 'inner';
          // let inner2 = 'inner2'
        }
        console.log(inner)
      }
    }
    let fo = new FuncClass()
    console.log(fo.prop2)

    let obj = {
      name:'lilei'
    }
    let array = [
      'lilei'
    ]

    // function ff(){}
    
	}
}
