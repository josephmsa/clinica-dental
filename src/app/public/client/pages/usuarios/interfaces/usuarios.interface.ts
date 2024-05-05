export interface Usuarios {
  isSuccess:    boolean;
  errorCode:    string;
  errorMessage: string;
  data:         Usuario[];
}

export interface Usuario {
  usuario_Id:  number;
  nom_Usuario: string;
  correo:      string;
  contrasena:  string;
  estado:      string;
}
