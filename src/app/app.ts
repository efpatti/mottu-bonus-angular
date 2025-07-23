import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MobileMenuComponent } from './mobile-menu.component';
import { ErrorSectionComponent } from './error-section.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { BenefitsSectionComponent } from './components/benefits-section/benefits-section.component';
import { EligibilityStepsComponent } from './components/eligibility-steps/eligibility-steps.component';
import { BonusRulesComponent } from './components/bonus-rules/bonus-rules.component';
import { BonusCalculatorComponent } from './components/bonus-calculator/bonus-calculator.component';
import { PenaltyFactorsComponent } from './components/penalty-factors/penalty-factors.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ErrorSectionComponent,
    IntroSectionComponent,
    BenefitsSectionComponent,
    EligibilityStepsComponent,
    BonusRulesComponent,
    BonusCalculatorComponent,
    PenaltyFactorsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(public navigation: NavigationService) {}

  get steps() {
    return this.navigation.getSteps();
  }

  get currentLevel() {
    return this.navigation.getCurrentLevel();
  }

  navigateTo(level: number) {
    this.navigation.navigateTo(level);
  }
}
