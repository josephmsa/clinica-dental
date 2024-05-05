export interface Empleados {
  isSuccess: boolean;
  errorCode: string;
  errorMessage: string;
  data: Empleado[];
}

export interface Empleado {
  empleado_Id: number;
  nombre: string;
  apellido: string;
  fecha_Nacimiento: Date;
  telefono: string;
  email: string;
  tipo_Documento: string;
  documento: string;
  genero: string;
  direccion: string;
  cargo: string;
  salario: number;
  estado: string;
  usuario_Id: number;
  fotos: null;
}
