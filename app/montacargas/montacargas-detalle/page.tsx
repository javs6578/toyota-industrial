"use client";
import '../../globals.css'
import * as React from 'react';
import montacargas from '../../src/img/montacargas_banner.svg'
import montacargas_vehicle from '../../src/img/montacargas.png'
import { FormControl, FormControlLabel, FormLabel, Link, Radio, RadioGroup, TextField } from '@mui/material'
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import red_arrow from '../../src/img/red-arrow.svg'

export default function MontacargasDetail() {

    const [count, setCount] = useState(0);

    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount: any) {
            return (prevCount += 1);
        });
    }

    function decrement() {
        setCount(function (prevCount: any) {
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    }

    return (
        <>
            <img className='w-100' src={montacargas.src} alt="" />
            <div className="row g-0 p-5">
                <div className="col-3 p-3">
                    <div className='montacargas-card'>
                        <span className='h5 red-text'>Características del equipo</span>
                        <img src={montacargas_vehicle.src} className='w-100' alt="" />
                        <strong>Equipo</strong>
                        <p>Combustión Cushion</p>
                        <strong>Modelo</strong>
                        <p>8FGCU20</p>
                        <strong>Capacidad de carga lb/kg</strong>
                        <p>4,000/2,000</p>
                        <strong>Altura máxima/contraído (milímetros)</strong>
                        <p>7,055/2,420</p>
                    </div>
                </div>
                <div className="col-9 p-5 my-auto">
                    <img src={red_arrow.src} style={{ rotate: '180deg' }} alt="" className='me-2' />
                    <Link href="/" className='footer-link' style={{ textDecoration: 'none' }}>
                        Regresar
                    </Link>
                    <p className="h5 text-center">
                        Ingresa los siguientes datos para solicitar la cotización <br />
                        de tu producto
                    </p>
                    <div className="row g-0 my-3">
                        <div className="col-6">
                            <p className="mb-1 form-field-text">Nombre completo<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa tu nombre" className="w-100 pe-3"></TextField>
                        </div>
                        <div className="col-6">
                            <p className="mb-1 form-field-text">Nombre de la empresa<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa el nombre de la empresa" className="w-100 pe-3"></TextField>
                        </div>
                    </div>
                    <div className="row g-0 my-4">
                        <div className="col-6">
                            <p className="mb-1 form-field-text">Correo electrónico<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa tu correo" className="w-100 pe-3"></TextField>
                        </div>
                        <div className="col-6">
                            <p className="mb-1 form-field-text">Ciudad o Estado<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa la Ciudad o el Estado" className="w-100 pe-3"></TextField>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6"><FormControl className='mb-3'>
                            <FormLabel className='black-text' id="demo-radio-buttons-group-label"><span className='form-field-text'>Condición y tipo</span></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Nuevo" control={<Radio />} label="Nuevo" />
                                <FormControlLabel value="Seminuevo" control={<Radio />} label="Seminuevo" />
                            </RadioGroup>
                        </FormControl></div>
                        <div className="col-6">
                            <FormControl className='mb-3'>
                                <FormLabel className='black-text' id="demo-radio-buttons-group-label"><span className='form-field-text'>Tipo</span></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Nuevo" control={<Radio />} label="Venta" />
                                    <FormControlLabel value="Seminuevo" control={<Radio />} label="Arrendamiento" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <p className="mb-1 form-field-text">¿Cuántos equipos Toyota tienen? </p>
                        <div className="d-flex mt-2">
                            <button className='rounded bg-white border-counter' onClick={decrement}><RemoveIcon /></button>
                            <p className='h2 mx-4 mb-0'>{count}</p>
                            <button className='rounded bg-white border-counter' onClick={increment}><AddIcon /></button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Link href="contacto/datos-enviados" className='me-3'>
                            <button className="white-button" style={{ border: "1px solid" }}>Regresar</button>
                        </Link>
                        <Link href="contacto/datos-enviados">
                            <button className="red-button">Solicitar cotización</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}