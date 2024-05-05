export interface Horarios {
  isSuccess:    boolean;
  errorCode:    string;
  errorMessage: string;
  data:         Horario[];
}

export interface Horario {
  horario_Id:  number;
  empleado_Id: number;
  dia_Semana:  string;
  hora_Inicio: string;
  hora_Fin:    string;
}
