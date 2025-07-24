import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.scss'],
})
export class BenefitsSectionComponent {
  faCheckCircle = faCheckCircle;
}
