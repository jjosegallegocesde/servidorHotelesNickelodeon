import {modeloReserva} from '../models/modeloDatosReserva.js'

export class ServicioReserva{

    constructor(){}

    async buscarTodas(){
        let reservas=await modeloReserva.find()
        return (reservas)
    }

    async buscarPorId(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }

    async agregar(datos){

        let reservaAGuardar=new modeloReserva(datos)
        return await reservaAGuardar.save()

    }

    async actualizar(id,datos){

        return modeloReserva.findByIdAndUpdate(id,datos)

    }

    async eliminar(id){

        return modeloReserva.findByIdAndDelete(id)

    }



}