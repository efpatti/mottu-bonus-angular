import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  steps: any[] = [];
  currentLevel = 0;
  mobileMenuOpen = false;

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.steps = this.navigationService.getSteps();
    this.currentLevel = this.navigationService.getCurrentLevel();
  }

  get currentStepNumber(): number {
    return this.currentLevel + 1;
  }

  get currentStepLabel(): string {
    return this.steps[this.currentLevel]?.label || '';
  }

  navigateTo(level: number): void {
    this.navigationService.navigateTo(level);
    this.currentLevel = this.navigationService.getCurrentLevel();
    this.updateRoute();
  }

  navigateToStep(level: number): void {
    this.navigateTo(level);
    this.toggleMobileMenu();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private updateRoute(): void {
    const routes = [
      'intro',
      'benefits',
      'eligibility',
      'eligibility',
      'rules',
      'calculator',
      'calculator',
      'penalties',
    ];
    this.router.navigate([routes[this.currentLevel]]);
  }
}
