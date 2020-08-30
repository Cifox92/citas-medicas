import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Formulario = () => {

    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    //State de error en caso de enviar el formulario con un campo sin rellenar
    const [error, actualizarError] = useState(false)

    //Object destructuring
    const { mascota, propietario, fecha, hora, sintomas } = cita

    //actualiza los campos del state al escribir en los inputs del form
    const actualizarState = e => {
        const { name, value } = e.target
        actualizarCita({...cita, [name]: value})
    }

    //envío del form
    const crearCita = e => {
        e.preventDefault()

        //Validación de formulario
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true)
            return
        }
        
        //Reiniciar error a valor original (false)
        actualizarError(false)

        //asignamos un id aleatorio a cada cita con el paquete de npm 'uuid'
        cita.id = uuidv4()
        console.log(cita)
    }

    return (
        <>
            <h2>Crear cita</h2>

            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

            <form onSubmit={crearCita}>
                <label>Nombre mascota</label>
                <input type='text' value={mascota} onChange={actualizarState} name='mascota' className='u-full-width' placeholder='Nombre mascota' />

                <label>Nombre propietario</label>
                <input type='text' value={propietario} onChange={actualizarState} name='propietario' className='u-full-width' placeholder='Nombre propietario' />

                <label>Fecha</label>
                <input type='date' value={fecha} onChange={actualizarState} name='fecha' className='u-full-width' />

                <label>Hora</label>
                <input type='time' value={hora} onChange={actualizarState} name='hora' className='u-full-width' />

                <label>Síntomas</label>
                <textarea value={sintomas} onChange={actualizarState} className='u-full-width' name='sintomas' />

                <button type='submit' className='u-fill-width button-primary'>Agregar cita</button>
            </form>
        </>
    )
}
 
export default Formulario