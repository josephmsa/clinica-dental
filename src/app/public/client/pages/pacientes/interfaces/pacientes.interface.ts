export interface Pacientes {
  isSuccess:    boolean;
  errorCode:    string;
  errorMessage: string;
  data:         Paciente[];
}

export interface Paciente {
  paciente_Id:      number;
  nombre:           string;
  apellido:         string;
  tipo_Documento:   string;
  documento:        null;
  fecha_Nacimiento: Date;
  telefono:         string;
  email:            string;
  direccion:        string;
  estado:           string;
  usuario_Id:       number;
}
