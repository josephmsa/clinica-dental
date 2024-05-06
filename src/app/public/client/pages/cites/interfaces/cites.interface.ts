export interface Cites {
  isSuccess: boolean;
  errorCode: string;
  errorMessage: string;
  data: Cite[];
}

export interface Cite {
  cita_Id: number;
  paciente_Id: number;
  empleado_Id: number;
  fecha_Cita: Date;
  hora_Cita: string;
  motivo: string;
  estado: string;
}

export interface DetailCite {
  isSuccess: boolean;
  errorCode: string;
  errorMessage: string;
  data: Detail;
}

export interface Detail {
  cita_Id: number;
  paciente_Id: number;
  empleado_Id: number;
  fecha_Cita: string;
  hora_Cita: string;
  motivo: string;
  estado: string;
}

export interface AddCites {
  cita_Id: number;
  paciente_Id: number;
  empleado_Id: number;
  fecha_Cita: Date;
  hora_Cita: string;
  motivo: string;
  estado: string;
}
