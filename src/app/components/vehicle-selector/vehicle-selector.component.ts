import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleInfoComponent } from '../vehicle-info/vehicle-info.component';

@Component({
  selector: 'app-vehicle-selector',
  standalone: true,
  imports: [CommonModule, VehicleInfoComponent],
  templateUrl: './vehicle-selector.component.html',
  styleUrls: ['./vehicle-selector.component.scss'],
})
export class VehicleSelectorComponent {
  @Input() selectedVehicle: 'motorcycle' | 'car' = 'motorcycle';
  @Output() selectedVehicleChange = new EventEmitter<'motorcycle' | 'car'>();

  onSelectVehicle(vehicle: 'motorcycle' | 'car') {
    this.selectedVehicle = vehicle;
    this.selectedVehicleChange.emit(vehicle);
  }
}
