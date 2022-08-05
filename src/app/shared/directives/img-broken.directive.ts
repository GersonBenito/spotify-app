import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() public customImg: string = '';
  @HostListener('error') handleError(): void {
    const theNative = this.theHost.nativeElement;
    theNative.src = this.customImg;
  }

  constructor(private theHost: ElementRef) {}

}
