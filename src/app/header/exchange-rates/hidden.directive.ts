import {Directive, Host, HostBinding, HostListener, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';

@Directive({
  selector: '[courseHidden]',
  exportAs: 'hiddenControl'
})
export class HiddenDirective implements OnInit {

  @HostBinding('style.visibility')
  public visibility: 'visible' | 'hidden' = 'hidden';

  @HostListener('click')
  public clickWithDirective(): void {
    console.log('clickWithDirective');
  }

  public constructor(
    @Host() private matButtonComponent: MatButton
  ) {}

  public ngOnInit(): void {
    this.matButtonComponent.color = 'warn';
  }

  public show(): void {
    this.visibility = 'visible';
  }

  public hide(): void {
    this.visibility = 'hidden';
  }
}
