import { Component } from '@angular/core';

@Component({
  selector: 'sprk-navigation-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">
          Wide Navigation
        </h2>
        <sprk-wide-navigation [links]="links" idString="navigation-wide-1"></sprk-wide-navigation>
    </div>
    <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">
          Narrow Navigation
        </h2>
        <sprk-narrow-navigation idString="navigation-narrow-1">
          <sprk-narrow-navigation-item
            *ngFor="let link of links"
            [subNav]="link.subNav"
            [analyticsString]="link.analyticsString"
            [href]="link.href"
            [text]="link.text"
            idString="navigation-item-1">
          </sprk-narrow-navigation-item>
        </sprk-narrow-navigation>
    </div>
    <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">
          Secondary Navigation
        </h2>
        <sprk-secondary-navigation idString="navigation-secondary-1">
          <sprk-secondary-navigation-item
            *ngFor="let link of links"
            [analyticsString]="link.analyticsString"
            [href]="link.href"
            [text]="link.text"
            idString="navigation-item-2">
          </sprk-secondary-navigation-item>
        </sprk-secondary-navigation>
    </div>
  `,
  styles: ['']
})
export class NavigationDocsComponent {
  links = [
    {
      text: 'Item 1',
      href: '/navigation',
      analyticsString: 'Link to Item 1'
    },
    {
      text: 'Item 2',
      href: '/icons',
      subNav: [
        {
          text: 'Item 1',
          href: '/alerts',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'Item 2',
          href: '/alerts'
        },
        {
          text: 'Item 3',
          href: '/alerts'
        }
      ]
    },
    {
      text: 'Item 3',
      href: '/links'
    },
    {
      text: 'Item 4',
      href: '/buttons'
    },
    {
      text: 'Item 5',
      href: '#nogo',
      subNav: [
        {
          text: 'Item 1',
          href: '#nogo'
        },
        {
          text: 'Item 2',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        },
        {
          text: 'Item 4',
          href: '#nogo'
        }
      ]
    }
  ];

  constructor() {}
}
