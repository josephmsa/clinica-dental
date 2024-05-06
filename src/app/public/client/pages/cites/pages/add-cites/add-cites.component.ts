import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CitesService } from '../../services/cites.service';
import { AddCites } from '../../interfaces/cites.interface';
import { EmpleadoService } from '../../../empleado/services/empleado.service';
import { Empleado } from '../../../empleado/interfaces/empleados.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cites',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-cites.component.html',
  styleUrl: './add-cites.component.css',
})
export class AddCitesComponent implements OnInit {
  empleados!: Empleado[];

  public formCites: FormGroup = this.fb.group({
    idCite: [0, [Validators.required, Validators.min(1)]],
    PatientId: [0, [Validators.required, Validators.min(1)]],
    EmployeeId: [0, [Validators.required, Validators.min(1)]],
    date: ['', Validators.required],
    time: ['', Validators.required],
    reason: ['', Validators.required],
    status: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private citesService: CitesService,
    private empleadoService: EmpleadoService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getEmpleado();
  }

  getEmpleado() {
    this.empleadoService.getEmpleado().subscribe((res) => {
      this.empleados = res.data;
    });
  }

  addCite() {
    if (this.formCites.invalid) {
      return;
    }
    const newCite: AddCites = {
      cita_Id: this.formCites.value['idCite'],
      paciente_Id: this.formCites.value['PatientId'],
      empleado_Id: this.formCites.value['EmployeeId'],
      fecha_Cita: this.formCites.value['date'],
      hora_Cita: this.formCites.value['time'] + ':00',
      motivo: this.formCites.value['reason'],
      estado: this.formCites.value['status'],
    };
    this.citesService.addCites(newCite).subscribe(() => {
      this.router.navigate(['/', 'cites']);
    });
  }
}
