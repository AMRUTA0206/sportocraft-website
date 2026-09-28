import { Component } from '@angular/core';
import { siteConfig } from '../../../core/constants/site-config';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsappButtonComponent {
  whatsappNumber = siteConfig.whatsappNumber;
  message = encodeURIComponent(siteConfig.whatsappMessage);
}
