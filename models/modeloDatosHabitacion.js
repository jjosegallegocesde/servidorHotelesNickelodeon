//IMPORTAR A MONGOOSE
import mongoose from "mongoose"

//Esquema de dfatos de mongoose
//El esquema es una regla de que DATOS voy a manipular
const Schema = mongoose.Schema;

const Habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    valorNoche:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagenes:{
        type:[String],
        required:false
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion=mongoose.model('habitacion',Habitacion)

