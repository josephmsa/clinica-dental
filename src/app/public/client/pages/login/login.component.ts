import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsuariosService } from '../usuarios/services/usuarios.service';
import { Usuario } from '../usuarios/interfaces/usuarios.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  users!: Usuario[];

  public formLogin: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private usuariosService: UsuariosService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usuariosService.getUsuarios().subscribe((res) => {
      this.users = res.data;
    });
  }

  login() {
    const user = this.users.find(
      (user) =>
        user.correo === this.formLogin.value['email'] &&
        user.contrasena === this.formLogin.value['password']
    );

    if (user) {
      this.router.navigate(['/', 'client']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
