//IMPORTAR A MONGOOSE
import mongoose from "mongoose"

//Esquema de dfatos de mongoose
//El esquema es una regla de que DATOS voy a manipular
const Schema = mongoose.Schema;

const Reserva =new Schema({

    idHabitacion:{
        type:String,
        required:true
    },
    fechaEntrada:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    numeroNinos:{
        type:Number,
        required:false
    },
    numeroAdultos:{
        type:Number,
        required:true
    },
    valorReserva:{
        type:Number,
        required:true
    }
    
    
})

const modeloReserva=mongoose.model('reserva',Reserva)

