import { Component } from '@angular/core';

@Component({
  selector: 'sprk-icon-set-docs',
  template: `
    <div
      class="drizzle-o-ContentGrouping"
      *ngFor="let icon of icons; index as i"
    >
      <h2 class="drizzle-b-h2">{{ icon }}</h2>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses=""
        idString="icon-{{ i }}-1"
      ></sprk-icon>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses="sprk-c-Icon--l"
        idString="icon-{{ i }}-2"
      ></sprk-icon>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses="sprk-c-Icon--xl"
        idString="icon-{{ i }}-3"
      ></sprk-icon>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses="sprk-c-Icon--xxl"
        idString="icon-{{ i }}-4"
      ></sprk-icon>
    </div>
  `,
  styles: ['']
})
export class IconSetDocsComponent {
  constructor() {}

  icons = [
    'access',
    'amount-money',
    'application',
    'auto-loans',
    'baths',
    'beds',
    'bell',
    'blog',
    'calculator',
    'calendar',
    'call-team-member',
    'cash-back',
    'chat-online',
    'check-mark',
    'chevron-down',
    'chevron-down-circle',
    'chevron-down-circle-filled',
    'chevron-left',
    'chevron-left-circle',
    'chevron-right',
    'chevron-right-circle',
    'chevron-up',
    'chevron-up-circle',
    'clock',
    'close-circle',
    'cloud',
    'communication',
    'condo',
    'cooling',
    'credit',
    'credit-card-payoff',
    'dedicated-team',
    'desktop-computer',
    'document-review',
    'documents',
    'download',
    'editable',
    'educational-resources',
    'email',
    'exclamation',
    'exclamation-filled',
    'facebook',
    'feedback',
    'find-agent',
    'free',
    'heat',
    'home',
    'home-improvement',
    'home-shopping',
    'home-size',
    'information',
    'instagram',
    'land',
    'landline',
    'laptop',
    'large-purchase',
    'lock',
    'medical-expenses',
    'menu',
    'mls',
    'mobile',
    'mortgage',
    'multi-family',
    'one-time-update',
    'organize',
    'our-family',
    'parking',
    'payment',
    'payment-center',
    'pinterest',
    'play',
    'plus',
    'prequalified',
    'price-per-sq-ft',
    'print',
    'question',
    'rate-shield',
    'rates',
    'recurring-update',
    'refinance',
    'reviews',
    'rocket',
    'same-day',
    'savings',
    'schools',
    'search',
    'secure-process',
    'settings',
    'single',
    'small-business',
    'snapchat',
    'technology',
    'thumbs-up',
    'townhouse',
    'trash',
    'twitter',
    'unlock',
    'update',
    'upload',
    'user',
    'verified-approval',
    'vip',
    'wifi',
    'written-check',
    'year-built',
    'youtube'
  ];
}
