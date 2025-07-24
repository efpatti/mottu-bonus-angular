import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUsers,
  faClock,
  faSearch,
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

interface FiliaisProps {
  unit: string;
  providers: number;
}

@Component({
  selector: 'app-eligibility-steps-1',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './eligibility-steps-1.component.html',
  styleUrls: ['./eligibility-steps-1.component.scss'],
})
export class EligibilityStepsComponent {
  // Font Awesome icons
  faUsers = faUsers;
  faClock = faClock;
  faSearch = faSearch;
  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;

  steps = ['Elegibilidade', 'Metas'];
  searchTerm = '';
  selectedUnit: FiliaisProps | null = null;
  filteredFiliais: FiliaisProps[] = [];

  // Mock data - replace with your actual data or service call
  filiais: FiliaisProps[] = [
    { unit: 'Filial São Paulo', providers: 5 },
    { unit: 'Filial Rio de Janeiro', providers: 3 },
    { unit: 'Filial Belo Horizonte', providers: 4 },
    { unit: 'Filial Curitiba', providers: 6 },
    { unit: 'Filial Porto Alegre', providers: 2 },
  ];

  normalizar(str: string): string {
    return str
      .normalize('NFD') // separa letras de acentos
      .replace(/[\u0300-\u036f]/g, '') // remove os acentos
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  onSearchInput(): void {
    if (!this.searchTerm) {
      this.filteredFiliais = [];
      return;
    }

    const termo = this.normalizar(this.searchTerm);
    this.filteredFiliais = this.filiais.filter((filial) =>
      this.normalizar(filial.unit).includes(termo)
    );
  }

  handleSelectUnit(filial: FiliaisProps): void {
    this.selectedUnit = filial;
    this.searchTerm = filial.unit;
    this.filteredFiliais = [];
  }
}
