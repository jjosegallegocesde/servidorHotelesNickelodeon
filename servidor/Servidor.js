//LLAMAMOS A EXPRESS
import express from 'express'

//LLamamos a las RUTAS
import {rutas} from '../routes/rutas.js'

//LLamamos al metodo conectar con BD
import {conectar} from '../database/conexion.js'

import cors from "cors";

export class Servidor{

    constructor(){
        this.app = express() //atributo una variable
       
        
        this.app.use(cors())
        this.app.use(express.json())
        this.conectarConBD()
        this.atenderPeticiones() //atiendo las peticiones del usuario
    }

    atenderPeticiones(){ //ENRUTARPETICIONES
        this.app.use('/',rutas)   
    }

    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("servidor encendido "+process.env.PORT)
        })
    }

    conectarConBD(){
        conectar()
    }


}