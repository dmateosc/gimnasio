import {Clases} from '../clase/clases'

export class Users {
  

  constructor(
   public nickname: String,
   public _password: String,
   public _photo: String,
   public _nombre: String,
   public _apellidos: String,
   public _dni: String,
   public _edad: Number,
   public _email: String,
   public _categoria: [String],
   public _estado: [
      {
        //Objeto Estado
        fecha: Date,
        peso: Number,
        masa_corporal: String,
        musculo: String,
        grasa: String,
        grasa_visceral: String,
      },
    ],
   public _objetivo: String,
   public _entrenador: {
      id_entrenador: String,
      nombre_entrenador: String,
    },
   public _clases: [
      Clases
    ],
   public _pagos: [
      {
        fechaInicio: String,
        fechaVigor: String,
        pagado: boolean
      },
    ],
   public _active: Boolean,
   public _entrenamientos: [String]


  ){}



}
