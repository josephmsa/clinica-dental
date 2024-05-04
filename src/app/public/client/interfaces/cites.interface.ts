export interface Cites {
  isSuccess:    boolean;
  errorCode:    string;
  errorMessage: string;
  data:         Cite[];
}

export interface Cite {
  cita_Id:     number;
  paciente_Id: number;
  empleado_Id: number;
  fecha_Cita:  Date;
  hora_Cita:   string;
  motivo:      string;
  estado:      string;
}
