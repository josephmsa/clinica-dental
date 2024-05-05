import { Component, OnInit } from '@angular/core';
import { PacientesService } from './services/pacientes.service';
import { Paciente } from './interfaces/pacientes.interface';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css',
})
export class PacientesComponent implements OnInit {
  pacientes!: Paciente[]
  constructor(private pacientesService: PacientesService) {}

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes() {
    this.pacientesService.getPacientes().subscribe((response) => {
      this.pacientes = response.data;
    });
  }
}
