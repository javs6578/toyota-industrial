"use client";
import Link from "next/link";
import red_circle from '../src/img/red-circle.svg'
import orange_circle from '../src/img/orange-circle.svg'
import servicios_workers from '../src/img/services_workers.svg'
import polizas from '../src/img/poliza-opciones.png'
import orange_rectangle from '../src/img/orange_rectangle.svg'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Step, StepLabel, Stepper, TextField } from "@mui/material";
import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { red } from "@mui/material/colors";

export default function Servicios() {

    const steps = [
        'Seleccione el tipo de equipo que tiene',
        'Ingrese el modelo del equipo',
        'Seleccione el tipo de póliza',
        'Ingrese datos de contacto',
    ];

    const [activeStep, setActiveStep] = React.useState(0);

    const [alignment, setAlignment] = React.useState('web');

    const handleAlignment = (event: any, newAlignment: React.SetStateAction<string> | null) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    return (
        <>
            {/* BANNER */}
            <section>
                <div className="row services-banner g-0 mb-5">
                    <div className="col-md-6 col-sm-12 p-5 my-auto">
                        <h2 className='branches-header'>
                            Nuestro compromiso es
                            dar soporte a todos los
                            equipos Toyota
                        </h2>
                        <p className='offer-text my-5'>
                            Nuestros técnicos expertos están capacitados <br />
                            para poder proporcionar mantenimiento a los <br />
                            montacargas Toyota.
                        </p>
                        <button className='red-button'>
                            <Link href="#cotizar-poliza" className='text-light' style={{ textDecoration: 'none' }}>Cotizar póliza</Link>
                        </button>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center m-auto">
                    </div>
                </div>
            </section>
            {/* POLIZA STEPS */}
            <section className="px-5 mb-5">
                <div className="row">
                    <div className="col-md-5 col-sm-12 my-auto">
                        <h3 className='filosofia-title' style={{ fontSize: '40px' }}>
                            Contar con una <span className='light-red-text'>póliza de mantenimiento </span>
                            tiene muchas ventajas
                        </h3>
                        <p className='filosofia-subtitle my-4'>
                            Al mantener en perfecto funcionamiento sus equipos
                            le brindamos la tranquilidad de que su operación y
                            productividad diaria no se dentendrá
                        </p>
                    </div>
                    <div className="col-md-1 col-sm-0"></div>
                    <div className="col-md-5 col-sm-12">
                        <div className="row justify-content-center" style={{ position: 'relative' }}>
                            <img className='red-circle' src={red_circle.src} alt="" />
                            <div className="col-md-5 col-sm-12 filosofia-card my-3 py-4 px-4 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>01</span>
                                <p className='filosofia-card-description'>Incremento en la productividad</p>
                            </div>
                            <div className="col-md-1 col-sm-0"></div>
                            <div className="col-md-5 col-sm-12 filosofia-card my-3 py-4 px-4 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>02</span>
                                <p className='filosofia-card-description'>Mayor vida útil de los equipos industriales</p>
                            </div>
                        </div>
                        <div className="row justify-content-center" style={{ position: 'relative' }}>
                            <div className="col-md-5 col-sm-12 filosofia-card my-3 py-4 px-4 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>03</span>
                                <p className='filosofia-card-description'>Menores costos de operación y mantenimiento</p>
                            </div>
                            <div className="col-md-1 col-sm-0"></div>
                            <div className="col-md-5 col-sm-12 filosofia-card my-3 py-4 px-4 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>04</span>
                                <p className='filosofia-card-description'>Reducción del tiempo invertido en  reparaciones</p>
                            </div>
                            <img className='orange-circle' src={orange_circle.src} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* DONT WORRY SECTION */}
            <section className="pt-5 px-5" style={{ position: 'relative' }}>
                <div className="row">
                    <div className="col-md-7 col-sm-12 hide-mobile">
                        <img className="w-100" src={servicios_workers.src} alt="" />
                    </div>
                    <div className="col-md-5 col-sm-12 d-flex flex-column px-4">
                        <h3 className='filosofia-title' style={{ fontSize: '40px' }}>
                            <span className='light-red-text'>Deje de preocuparse </span>
                            por averías inesperadas
                        </h3>
                        <p className='filosofia-subtitle my-3'>
                            <strong>Minimice los riesgos operativos </strong>
                            que su actividad requiera. Las pólizas de servicios le permitirá
                            enfocarse en el núcleo central de sus negocios.
                        </p>
                        <p className='filosofia-subtitle my-3 bg-red p-4 text-light'>
                            Las pólizas han sido diseñadas para
                            mantener sus equipos Toyota en óptimas
                            condiciones, garantizando el mejor
                            desempeño de los mismos.
                        </p>
                    </div>
                </div>
                <img className="orange-services-rectangle w-100" src={orange_rectangle.src} alt="" />
            </section>
            {/* COTIZADOR */}
            <section className="mb-5 pb-5 cotizador-section" id="cotizar-poliza">
                <div className="rounded shadow-lg container bg-light" style={{ position: 'relative' }}>
                    <div className="py-5 px-5">
                        <h3 className='filosofia-title text-center' style={{ fontSize: '40px' }}>
                            Cotice una <span className='light-red-text'>póliza de mantenimiento </span> <br />
                            en tan solo unos minutos
                        </h3>
                        <Box sx={{ width: '100%', margin: '2em 0' }}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                <Step key={steps[0]}>
                                    <StepLabel className="stepper-label">{steps[0]}</StepLabel>
                                </Step>
                                <Step key={steps[1]}>
                                    <StepLabel className="stepper-label">{steps[1]}</StepLabel>
                                </Step>
                                <Step key={steps[2]}>
                                    <StepLabel className="stepper-label">{steps[2]}</StepLabel>
                                </Step>
                                <Step key={steps[3]}>
                                    <StepLabel className="stepper-label">{steps[3]}</StepLabel>
                                </Step>
                            </Stepper>
                            {activeStep == 0 && (
                                <section className="d-flex flex-column align-items-center p-5">
                                    <span className='send-picture-text mb-3'>Seleccione el tipo de equipo</span>
                                    <div style={{ backgroundColor: '#F4F4F4' }} className="px-3 py-2 rounded">
                                        <ToggleButtonGroup
                                            value={alignment}
                                            exclusive
                                            onChange={handleAlignment}
                                            aria-label="Platform"
                                        >
                                            <ToggleButton className="toggle-buttons me-3" value="web">Equipos eléctricos</ToggleButton>
                                            <ToggleButton className="toggle-buttons" value="android">Equipos de combustión</ToggleButton>
                                        </ToggleButtonGroup>
                                    </div>
                                </section>

                            )}
                            <div className="d-flex justify-content-center mt-3">
                                <button className='red-button'>
                                    <Link href="/servicios/cotizar-poliza" className='text-light' style={{ textDecoration: 'none' }}>Continuar</Link>
                                </button>
                            </div>
                        </Box>
                    </div>
                </div>
            </section>
        </>
    )
}