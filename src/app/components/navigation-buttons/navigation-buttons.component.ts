import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  handleNextLevelGlobal,
  handlePreviousLevelGlobal,
} from '../../utils/handle-next-level';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss'],
})
export class NavigationButtonsComponent {
  @Input() showOnlyPrevious: boolean = false;
  @Input() showBoth: boolean = true;

  constructor(private navigationService: NavigationService) {}

  handleNextLevel(): void {
    handleNextLevelGlobal(this.navigationService);
  }
  handlePreviousLevel(): void {
    handlePreviousLevelGlobal(this.navigationService);
  }
}
