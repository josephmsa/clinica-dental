import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpleadoService } from './services/empleado.service';
import { Empleado } from './interfaces/empleados.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
})
export class EmpleadoComponent implements OnInit {
  empleados!: Empleado[];
  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.getEmpleado();
  }

  getEmpleado() {
    this.empleadoService.getEmpleado().subscribe((data) => {
      this.empleados = data.data;
    });
  }
}
