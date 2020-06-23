import {Directive,ElementRef,Input} from '@angular/core'

@Directive({
  selector:'[redBackground]'
})
export default class BeautifulBackgroundDirective{

  @Input('redBackground')
  backgroundColor: string

  nativeElement: any

  constructor(el: ElementRef){
    this.nativeElement = el.nativeElement
  }

  ngOnInit(): void{
    this.nativeElement.style.backgroundColor = this.backgroundColor || 'white'
  }

}
