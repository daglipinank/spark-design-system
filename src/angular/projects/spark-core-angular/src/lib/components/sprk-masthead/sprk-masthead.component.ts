import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'sprk-masthead',
  template: `
    <header [ngClass]="getClasses()"
    role="banner"
    [attr.data-id]="idString">
      <div class="sprk-c-Masthead__content">
        <div class="sprk-c-Masthead__top-row">
          <div class="sprk-c-Masthead__hamburger">
            <button class="sprk-c-Hamburger" type="button" [attr.aria-expanded]="isNarrowNavOpen ? true : false"
            (click)="toggleNarrowNav()"
            >
              <span class="sprk-u-ScreenReaderText">Toggle Navigation</span>
              <svg
                [ngClass]="
                    { 'sprk-c-Icon': true,
                      'sprk-c-Icon--l': true,
                      'sprk-c-Hamburger__icon': true,
                      'sprk-c-Hamburger__icon--open': isNarrowNavOpen
                    }"
                    aria-hidden="true" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path class="sprk-c-Hamburger__line sprk-c-Hamburger__line--two" d="m8 32h48"/>
                  <path class="sprk-c-Hamburger__line sprk-c-Hamburger__line--one" d="m8 18.68h48"/>
                  <path class="sprk-c-Hamburger__line sprk-c-Hamburger__line--three" d="m8 45.32h48"/>
                </g>
              </svg>
            </button>
          </div>
          <div class="sprk-c-Masthead__logo">
            <a [routerLink]="logoHref">
              <ng-content select="[logo-slot]"></ng-content>
              <span class="sprk-u-ScreenReaderText">{{ logoLinkScreenReaderText }}</span>
            </a>
          </div>
          <div class="sprk-c-Masthead__secondary-nav">
            <sprk-secondary-navigation>
             <sprk-secondary-navigation-item
                *ngFor="let link of secondaryNavLinks"
                [href]="link.href"
                [spacing]="secondaryNavSpacing"
                [text]="link.text">
              </sprk-secondary-navigation-item>
            </sprk-secondary-navigation>
          </div>
          <div class="sprk-c-Masthead__search">
            <ng-content select="[upper-slot]"></ng-content>
          </div>
        </div>
        <div class="sprk-c-Masthead__secondary">
          <ng-content select="[lower-slot]"></ng-content>
        </div>
      </div>
      <div class="sprk-c-Masthead__navigation">
        <div class="sprk-c-Masthead__wide-navigation-container">
          <sprk-wide-navigation [links]="wideNavLinks"></sprk-wide-navigation>
        </div>
        <div *ngIf="isNarrowNavOpen" class="sprk-c-Masthead__narrow-navigation-container">
          <sprk-narrow-navigation>
            <sprk-narrow-navigation-item
              *ngFor="let link of narrowNavLinks"
              [subNav]="link.subNav"
              [href]="link.href"
              [text]="link.text">
            </sprk-narrow-navigation-item>
          </sprk-narrow-navigation>
        </div>
      </div>
    </header>`
})
export class SparkMastheadComponent {
  @Input()
  logoHref = '/'; // Type inferred
  @Input()
  logoLinkScreenReaderText = 'Go to the homepage';
  @Input()
  additionalClasses: string;
  @Input()
  wideNavLinks: object[];
  @Input()
  narrowNavLinks: object[];
  @Input()
  secondaryNavLinks: object[];
  @Input()
  secondaryNavSpacing = 'medium';
  @Input()
  isNarrowNavOpen = false;
  @Input()
  idString: string;

  @HostListener('window:resize')
  handleResizeEvent() {
    this.closeNarrowNav();
  }

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Masthead'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  toggleNarrowNav(): void {
    this.isNarrowNavOpen = !this.isNarrowNavOpen;
  }

  closeNarrowNav(): void {
    this.isNarrowNavOpen = false;
  }
}
