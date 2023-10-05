"use client";
import refacciones_banner from '../src/img/refacciones-banner.svg'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import check_circle from '../src/img/check-circle.svg'
import { Link, StepContent, TextField } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import upload_icon from '../src/img/upload_icon.svg'
import { Stepper, Step, StepLabel, Button } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export default function Refacciones() {

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

    const steps = [
        'Datos de la refacción',
        'Datos de la empresa',
        'Enviar cotización',
    ];

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <section className='mt-7'>
            <img src={refacciones_banner.src} className='w-100' alt="" />
            <Box sx={{ width: '100%', margin: '2em 0' }}>
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
                    </Stepper>
                    {activeStep == 0 && (
                        <Box sx={{ width: '100%' }}>
                            <div className="d-flex flex-column align-items-center mt-5">
                                <span className='send-picture-text'>Envíenos imágenes como referencia</span>
                                <span className='branches-description mb-4'>Pueden ser imágenes de la refacción o del equipo</span>
                                <div className="file-container d-flex flex-column bg-grey align-items-center">
                                    <img src={upload_icon.src} alt="" />
                                    <span className='drag-file-text'>Arrastra el o los archivos </span>
                                    <span className='my-2'>----- o -----</span>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        className='red-button rounded-0 '
                                        style={{ fontSize: '14px', height: '41px', width: '180px' }}
                                    >
                                        Adjunta tus archivos
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    )}
                    {activeStep == 1 && (
                        <div className=''>
                            <p className="text-center h5 fw-bold mt-5 mb-4">
                                Ingresa los datos de contacto
                            </p>
                            <div className="row g-0">
                                <div className="col-2"></div>
                                <div className="col-4">
                                    <p className="mb-1 form-field-text">Nombre completo<span className="asterisk">*</span></p>
                                    <TextField size="small" variant="outlined" label="Ingresa tu nombre" style={{ width: '90%' }}></TextField>
                                </div>
                                <div className="col-4">
                                    <p className="mb-1 form-field-text">Nombre de la empresa<span className="asterisk">*</span></p>
                                    <TextField size="small" variant="outlined" label="Ingresa el nombre de la empresa" style={{ width: '90%' }}></TextField>
                                </div>
                            </div>
                            <div className="col-2"></div>
                            <div className="row my-4 g-0">
                                <div className="col-2"></div>
                                <div className="col-4">
                                    <p className="mb-1 form-field-text">Correo electrónico<span className="asterisk">*</span></p>
                                    <TextField size="small" variant="outlined" label="Ingresa tu correo" style={{ width: '90%' }}></TextField>
                                </div>
                                <div className="col-4">
                                    <p className="mb-1 form-field-text">Ciudad o Estado<span className="asterisk">*</span></p>
                                    <TextField size="small" variant="outlined" label="Ingresa la Ciudad o el Estado" style={{ width: '90%' }}></TextField>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2"></div>
                                <div className="col-4 mt-4">
                                    <p className="mb-1 form-field-text">¿Cuántos equipos Toyota tienen? </p>
                                    <div className="d-flex mt-2">
                                        <button className='rounded bg-white border-counter' onClick={decrement}><RemoveIcon /></button>
                                        <p className='h2 mx-4 mb-0'>{count}</p>
                                        <button className='rounded bg-white border-counter' onClick={increment}><AddIcon /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeStep == 2 && (
                        <div className="d-flex flex-column align-items-center my-5">
                            <img width={90} src={check_circle.src} alt="" />
                            <p className='data-send-title my-1'>Los datos han sido enviados <br /> correctamente</p>
                            <span className='data-send-description mt-3'>En breve un asesor se pondrá en contacto contigo</span>
                        </div>
                    )}
                </Box>
                {activeStep < 2 && (
                    <div className="d-flex justify-content-center mt-3">
                        <Button
                            className="white-button me-3 rounded-0"
                            style={{ border: "1px solid" }}
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}>
                            Regresar
                        </Button>
                        <Button onClick={handleNext} className="red-button rounded-0" sx={{ fontSize: '18px' }}>
                            {activeStep === steps.length - 2 ? 'Solicitar cotización' : 'Continuar'}
                        </Button>
                    </div>
                )}

                {activeStep === 2 && (
                    <div className="d-flex justify-content-center mt-3">
                        <Button
                            className="white-button me-3 rounded-0"
                            style={{ border: "1px solid" }}
                            sx={{ mr: 1 }}>
                            <Link className='light-red-text' href="/refacciones" sx={{ textDecoration: 'none' }}>Cotizar otra refacción</Link>
                        </Button>
                        <Button onClick={handleNext} className="red-button rounded-0" sx={{ fontSize: '18px' }}>
                            Ver más productos
                        </Button>
                    </div>
                )}
            </Box>
        </section>
    )
}
