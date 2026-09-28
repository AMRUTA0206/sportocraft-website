import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../core/constants/site-config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  companyName = siteConfig.companyName;
  email = siteConfig.email;
  phone = siteConfig.phone;
  address = siteConfig.officeAddress;
  workingHours = siteConfig.workingHours;
}
