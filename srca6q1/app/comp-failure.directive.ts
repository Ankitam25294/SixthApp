import { Directive, ElementRef, HostListener ,Renderer} from '@angular/core';
@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele:ElementRef,private renderer: Renderer) { }

  @HostListener('mouseenter')onmouseenter()
  {
    //let part=this.ele.nativeElement.querySelector('.data');
    //this.renderer.setElementStyle(part,'color','red');
    this.ele.nativeElement.style.color='red';

  }
  @HostListener('mouseleave')onmouseleave()
  {
    //let part=this.ele.nativeElement.querySelector('.data');
    //this.renderer.setElementStyle(part,'color','black');
    this.ele.nativeElement.style.color='black';

  }

}
