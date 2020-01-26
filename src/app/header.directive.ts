import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {
  // [x: string]: any;
  Height =50;
  @Input() col;
  scrollPos = 0;
  constructor( private el: ElementRef ) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  
    
 }
//  public highlight(color: string) {
//   this.el.nativeElement.style.backgroundColor= color;
// }
//  @HostListener('mouseenter') onMouseEnter() {
//   console.log(this.col,);
//   // this.highlight("red");
// }

@HostListener('document:wheel', ['$event.target'])
 onWheel(targetElement) {
   console.log("HHH");
   this.el.nativeElement.style.height = "50px";
   
 }

 
  

@HostListener('window:scroll', ['$event'])
onWindowScroll($event) { 
  console.log("GGG");
  this.el.nativeElement.style.height = "50px";
}
}
