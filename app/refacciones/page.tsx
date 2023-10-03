"use client";
import refacciones_banner from '../src/img/refacciones-banner.svg'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Refacciones() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                <Stepper activeStep={activeStep} alternativeLabel>
                    <Step key={1}>
                        <StepLabel>{steps[0]}</StepLabel>
                        <StepContent transitionDuration={0} sx={{ width: '100%' }}>
                            <Box sx={{ width: '100%' }}>
                                <div className="d-flex flex-column align-items-center">
                                    <span className="h3">Envíenos una o varias imágenes como referencia</span>
                                    <div className="file-container d-flex flex-column bg-grey my-5 align-items-center">
                                        <img src={upload_icon.src} alt="" />
                                        <span>Arrastra el o los archivos </span>
                                        <span className='my-3'>----- o -----</span>
                                        <button className="red-button">Adjunta tus archivos</button>
                                    </div>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                    <Step key={steps[1]}>
                        <StepLabel>{steps[1]}</StepLabel>
                        <StepContent transitionDuration={0}>
                            <div className=''>
                                <p className="text-center h5 fw-bold mb-5">
                                    Ingresa los datos de contacto
                                </p>
                                <div className="row">
                                    <div className="col-2"></div>
                                    <div className="col-4">
                                        <p className="mb-1 form-field-text">Nombre completo<span className="asterisk">*</span></p>
                                        <TextField size="small" variant="outlined" label="Ingresa tu nombre" className="w-100"></TextField>
                                    </div>
                                    <div className="col-4">
                                        <p className="mb-1 form-field-text">Nombre de la empresa<span className="asterisk">*</span></p>
                                        <TextField size="small" variant="outlined" label="Ingresa el nombre de la empresa" className="w-100"></TextField>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                                <div className="row my-4">
                                    <div className="col-2"></div>
                                    <div className="col-4">
                                        <p className="mb-1 form-field-text">Correo electrónico<span className="asterisk">*</span></p>
                                        <TextField size="small" variant="outlined" label="Ingresa tu correo" className="w-100"></TextField>
                                    </div>
                                    <div className="col-4">
                                        <p className="mb-1 form-field-text">Ciudad o Estado<span className="asterisk">*</span></p>
                                        <TextField size="small" variant="outlined" label="Ingresa la Ciudad o el Estado" className="w-100"></TextField>
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
                        </StepContent>
                    </Step>
                    <Step key={steps[2]}>
                        <StepLabel>{steps[2]}</StepLabel>
                        <StepContent transitionDuration={0}>
                            <div className="d-flex flex-column align-items-center my-5">
                                <img width={90} src={check_circle.src} alt="" />
                                <p className='data-send-title'>Los datos han sido enviados <br /> correctamente</p>
                                <span className='data-send-description mt-3'>En breve un asesor se pondrá en contacto contigo</span>
                            </div>
                        </StepContent>
                    </Step>
                </Stepper>
                <div className="d-flex justify-content-center mt-3">
                    <Button
                        className="white-button me-4"
                        style={{ border: "1px solid" }}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}>
                        Regresar
                    </Button>
                    <Button onClick={handleNext} className="red-button">
                        {activeStep === steps.length - 2 ? 'Solicitar cotización' : 'Continuar'}
                    </Button>
                </div>
            </Box>
        </section>
    )
}
