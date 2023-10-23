"use client";
import Link from "next/link";
import check_circle from '../../src/img/check-circle.svg'
import polizas from '../../src/img/poliza-opciones.png'
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Step, StepLabel, Stepper, TextField } from "@mui/material";
import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { red } from "@mui/material/colors";

export default function cotizador() {

    const steps = [
        'Seleccione el tipo de equipo que tiene',
        'Ingrese el modelo del equipo',
        'Seleccione el tipo de póliza',
        'Ingrese datos de contacto',
    ];

    const [activeStep, setActiveStep] = React.useState(1);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const [alignment, setAlignment] = React.useState('web');

    const handleAlignment = (event: any, newAlignment: React.SetStateAction<string> | null) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    return (
        <section className="mb-5 pb-5">
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
                        {activeStep == 4 && (
                            <section className='py-3'>
                                <div className="d-flex flex-column align-items-center my-5">
                                    <img width={90} src={check_circle.src} alt="" />
                                    <p className='data-send-title'>Los datos han sido enviados <br /> correctamente</p>
                                    <span className='data-send-description mt-3'>En breve un asesor se pondrá en contacto contigo</span>
                                </div>
                            </section>
                        )}
                        {activeStep < 4 && (
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
                                    {activeStep === steps.length - 1 ? 'Solicitar cotización' : 'Continuar'}
                                </Button>
                            </div>
                        )}

                        {activeStep === 4 && (
                            <div className="d-flex justify-content-center mt-3">
                                <Button
                                    className="white-button me-3 rounded-0"
                                    style={{ border: "1px solid" }}
                                    sx={{ mr: 1 }}>
                                    <Link className='light-red-text' href="/servicios" style={{ textDecoration: 'none' }}>Cotizar otra póliza</Link>
                                </Button>
                                <Button onClick={handleNext} className="red-button rounded-0" sx={{ fontSize: '18px' }}>
                                    Ver más productos
                                </Button>
                            </div>
                        )}
                    </Box>
                </div>
            </div>
        </section>
    )

}