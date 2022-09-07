import express from 'express'

//IMPORTAR EL CONTROLADOR DE HABITACIONES
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../controllers/ControladorReserva.js'

let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()

//variable para personalizar las rutas (ENDPOINTS) de mis servicios
export let rutas=express.Router()


//escribo mis rutas (cada ruta es un servicio)

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS HABITACIONES

rutas.get('/viajescomfama/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.get('/viajescomfama/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)
rutas.post('/viajescomfama/habitacion',controladorHabitacion.agregarHabitacion)
rutas.put('/viajescomfama/habitacion/:id',controladorHabitacion.editarHabitacion)




//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS RESERVAS
rutas.get('/viajescomfama/reservas',controladorReserva.buscarReservas)
rutas.get('/viajescomfama/reserva/:id',controladorReserva.buscarReservasPorId)
rutas.post('/viajescomfama/reserva',controladorReserva.agregarReserva)
rutas.put('/viajescomfama/reserva/:id',controladorReserva.editarReserva)
rutas.delete('/viajescomfama/reserva/:id',controladorReserva.eliminarReserva)