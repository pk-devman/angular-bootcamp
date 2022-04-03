import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'yellow';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseover') onMouseOver(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow', RendererStyleFlags2.DashCase);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', RendererStyleFlags2.DashCase);
    this.backgroundColor = this.defaultColor;
  }
  
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow', RendererStyleFlags2.DashCase);

  }

}
