import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.vcf.createEmbeddedView(this.templateRef);
    }
    else{
      this.vcf.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcf: ViewContainerRef) {}

}
