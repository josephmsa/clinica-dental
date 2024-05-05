import { Component, OnInit } from '@angular/core';
import { HorarioService } from './services/horario.service';
import { Horario } from './interfaces/horario.interface';

@Component({
  selector: 'app-horario-empleado',
  standalone: true,
  imports: [],
  templateUrl: './horario-empleado.component.html',
  styleUrl: './horario-empleado.component.css',
})
export class HorarioEmpleadoComponent implements OnInit {
  horarios!: Horario[]
  constructor(private horarioService: HorarioService) {}

  ngOnInit(): void {
    this.getHorario();
  }

  getHorario() {
    this.horarioService.getHorario().subscribe((data) => {
      this.horarios = data.data;
    });
  }
}
