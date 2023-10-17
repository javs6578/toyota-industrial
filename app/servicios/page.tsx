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
            <section className='mt-7'>
                <div className="row services-banner g-0 mb-5">
                    <div className="col-6 p-5 my-auto mx-5">
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
                            <Link href="/montacargas" className='text-light' style={{ textDecoration: 'none' }}>Cotizar póliza</Link>
                        </button>
                    </div>
                    <div className="col-6 d-flex justify-content-center m-auto">
                    </div>
                </div>
            </section>
            {/* POLIZA STEPS */}
            <section className="p-5 mb-5">
                <div className="row">
                    <div className="col-5 px-5 my-auto">
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
                    <div className="col-1"></div>
                    <div className="col-5">
                        <div className="row" style={{ position: 'relative' }}>
                            <img className='red-circle' src={red_circle.src} alt="" />
                            <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>01</span>
                                <p className='filosofia-card-description'>Incremento en la productividad</p>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>02</span>
                                <p className='filosofia-card-description'>Mayor vida útil de los equipos industriales</p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ position: 'relative' }}>
                            <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>03</span>
                                <p className='filosofia-card-description'>Menores costos de operación y mantenimiento</p>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>04</span>
                                <p className='filosofia-card-description'>Reducción del tiempo invertido en  reparaciones</p>
                            </div>
                            <img className='orange-circle' src={orange_circle.src} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* DONT WORRY SECTION */}
            <section className="pt-5 pe-5" style={{ position: 'relative' }}>
                <div className="row">
                    <div className="col-7">
                        <img className="w-100" src={servicios_workers.src} alt="" />
                    </div>
                    <div className="col-5 d-flex flex-column px-4">
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
            <section style={{ marginTop: '-12em' }} className="mb-5 pb-5">
                <div className="rounded shadow-lg container bg-light" style={{ position: 'relative' }}>
                    <div className="py-5 px-5">
                        <h3 className='filosofia-title text-center' style={{ fontSize: '40px' }}>
                            Cotice una <span className='light-red-text'>póliza de mantenimiento </span> <br />
                            en tan solo unos minutos
                        </h3>
                        <Box sx={{ width: '100%', margin: '2em 0' }}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                <Step key={1}>
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
                            {activeStep == 1 && (
                                <section className="d-flex flex-column align-items-center p-5">
                                    <span className='send-picture-text mb-5'>Ingrese el modelo del equipo</span>
                                    <div className="d-flex flex-column align-items-center" style={{ position: 'relative', width: '80%' }}>
                                        <p className="mb-1 form-field-text" style={{
                                            position: 'absolute', bottom: '40px', left: '190px',
                                        }}>Modelo del equipo<span className="asterisk">*</span></p>
                                        <TextField size="small" variant="outlined" label="Ingresa el modelo del equipo" className="w-50" />
                                    </div>
                                </section>
                            )}
                            {activeStep == 2 && (
                                <section className="p-5">
                                    <p className="footer-link mb-0">Datos del equipo</p>
                                    <span className="me-4 fw-bold">Equipo</span>
                                    <span className="fw-bold">Modelo</span><br />
                                    <span className="me-3">Eléctrico</span>
                                    <span>8FB10</span>
                                    <p className="footer-link mb-0 w-100 mt-5">Selecciona la póliza que tu equipo necesita</p>
                                    <img className="w-100" src={polizas.src} alt="" />
                                    <div className="d-flex justify-content-end">
                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                                row
                                            >
                                                <FormControlLabel value="A" control={<Radio sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 20,
                                                    },
                                                    '&.Mui-checked': {
                                                        color: red[700],
                                                    },
                                                }} />} label="Seleccionar" />
                                                <FormControlLabel value="B" control={<Radio sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 20,
                                                    },
                                                    '&.Mui-checked': {
                                                        color: red[700],
                                                    },
                                                }} />} label="Seleccionar" />
                                                <FormControlLabel value="C" control={<Radio sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 20,
                                                    },
                                                    '&.Mui-checked': {
                                                        color: red[700],
                                                    },
                                                }} />} label="Seleccionar" />
                                                <FormControlLabel value="D" control={<Radio sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 20,
                                                    },
                                                    '&.Mui-checked': {
                                                        color: red[700],
                                                    },
                                                }} />} label="Seleccionar" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </section>
                            )}
                            {activeStep == 3 && (
                                <section className="p-5">
                                    <div className="mx-5">
                                        <div className="d-flex justify-content-evenly mb-5">
                                            <div className="">
                                                <p className="footer-link mb-0">Datos del equipo</p>
                                                <span className="me-4 fw-bold">Equipo</span>
                                                <span className="fw-bold">Modelo</span><br />
                                                <span className="me-3">Eléctrico</span>
                                                <span>8FB10</span></div>
                                            <div className="">
                                                <p className="footer-link mb-0 w-100">Póliza seleccionada</p>
                                                <p className="fw-bold mb-0">Póliza</p>
                                                <span>A</span>
                                            </div>
                                        </div>
                                        <h5 className="text-center mb-5">
                                            Ingresa los siguientes datos para solicitar <br />
                                            la cotización de tu póliza
                                        </h5>
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="mb-1 form-field-text">Nombre completo<span className="asterisk">*</span></p>
                                                <TextField size="small" variant="outlined" label="Ingresa tu nombre" className="w-100"></TextField>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-1 form-field-text">Nombre de la empresa<span className="asterisk">*</span></p>
                                                <TextField size="small" variant="outlined" label="Ingresa el nombre de la empresa" className="w-100"></TextField>
                                            </div>
                                        </div>
                                        <div className="row my-4">
                                            <div className="col-6">
                                                <p className="mb-1 form-field-text">Correo electrónico<span className="asterisk">*</span></p>
                                                <TextField size="small" variant="outlined" label="Ingresa tu correo" className="w-100"></TextField>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-1 form-field-text">Ciudad o Estado<span className="asterisk">*</span></p>
                                                <TextField size="small" variant="outlined" label="Ingresa la Ciudad o el Estado" className="w-100"></TextField>
                                            </div>
                                        </div>
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