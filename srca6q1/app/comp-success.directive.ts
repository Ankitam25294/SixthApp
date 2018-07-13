import { Directive, ElementRef, HostListener ,Renderer} from '@angular/core';
@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private ele:ElementRef,private renderer: Renderer) { }

  @HostListener('mouseenter')onmouseenter()
  {
    //let part=this.ele.nativeElement.querySelector('.mytext')
    //this.renderer.setElementStyle(part,'color','green');
    this.ele.nativeElement.style.color='green';
  }
  @HostListener('mouseleave')onmouseleave()
  {
    //let part=this.ele.nativeElement.querySelector('.data');
    //this.renderer.setElementStyle(part,'color','black');
    this.ele.nativeElement.style.color='black';

  }

}
