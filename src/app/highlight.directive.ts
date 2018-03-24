import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngModel]',
  providers: [NgModel],
})
export class HighlightDirective {
    
    constructor(private model:NgModel) { }

    @Input('appHighlight') highlightColor: string;
    
    @HostListener('blur', ['$event.target']) focusOutFunction() {
        
        this.model.valueAccessor.writeValue('bbbbbbbbbbbb');
        this.model.viewToModelUpdate('cccc');
    }
}
