"use client";
import refacciones_banner from '../src/img/refacciones_banner.jpg'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import check_circle from '../src/img/check-circle.svg'
import { FormControl, FormControlLabel, FormLabel, Link, Radio, RadioGroup, StepContent, TextField } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import upload_icon from '../src/img/upload_icon.svg'
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import red from '@mui/material/colors/red';
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

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
        '',
        'Datos de la refacción',
        'Datos de la empresa',
        'Enviar cotización',
    ];

    const [activeStep, setActiveStep] = React.useState(-1);

    const handleNext = () => {
        if (activeStep == -1) {
            setActiveStep(0)
            return
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    // Drag and Drop files
    const [file, setFile] = React.useState(null);
    const handleFile = (file: any) => {
        setFile(file);
        console.log("setFile", file)
    };

    const element = <div className="d-flex flex-column bg-grey align-items-center">
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
        </Button>
    </div>;

    const noElement = <div className="d-flex flex-column bg-grey align-items-center">
        <img src={upload_icon.src} alt="" />
        <span className='drag-file-text'>¡ Los archivos se cargaron exitosamente !</span>
        </div>;

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [quantity, setQuantity] = useState('1');

    const handlePolicy = async (event: any) => {
        event.preventDefault()
        const payload = {
            data: {
                name,
                company,
                email,
                city,
            }
        }
        await fetch('https://worthy-art-2f349fa41d.strapiapp.com/api/repairs', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer a81ce047fc28c815ad7f15baed2ae45ffa661e27505a58eea8194186fcd4807588b5e432b806aa6281a3543655c1c4d9d57153c266afbc207b18cca5ab308cb1a8f7a8e54e0e6a5b311f8b8834d13acfba3f42ab1698d4a8aff49d0d6a141dfe4c4bcce8847daaea2a9dbe95379825e8674104a2ba89acf0687de5932f5ef82a"
            },
            body: JSON.stringify(payload)
        })
        .then(() => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
    };

    return (
        <section>
            <img src={refacciones_banner.src} className='w-100' alt="" />
            <Box sx={{ width: '100%', margin: '2em 0' }}>
                <Box sx={{ width: '100%', margin: '2em 0' }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
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
                    {activeStep == -1 && (
                        <Box sx={{ width: '100%' }}>
                            <FormControl className='d-flex align-items-center mt-5'>
                                <FormLabel className='mb-3' id="demo-radio-buttons-group-label"><strong>¿Cuenta con imágenes de referencia?</strong></FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value={true} control={<Radio {...controlProps('a')}
                                        sx={{
                                            '&.Mui-checked': {
                                                color: red[600],
                                            },
                                        }} />} label="Si" />
                                    <FormControlLabel value={false} control={<Radio {...controlProps('b')}
                                        sx={{
                                            '&.Mui-checked': {
                                                color: red[600],
                                            },
                                        }} />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    )}
                    {activeStep == 0 && (
                        <Box sx={{ width: '100%' }}>
                            <div className="d-flex flex-column align-items-center mt-5 px-5 ">
                                <span className='send-picture-text'>Envíenos imágenes como referencia</span>
                                <span className='branches-description mb-4'>Pueden ser imágenes de la refacción o del equipo</span>
                                {/* <div className="file-container d-flex flex-column bg-grey align-items-center">
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
                                </div> */}

                                <FileUploader handleChange={handleFile} name="file" types={fileTypes} label="Arrastra el o los archivos" classes="file-container" multiple
                                children={file ? noElement : element}/>
                            </div>
                        </Box>
                    )}
                    {activeStep == 1 && (
                        <div className='px-4'>
                            <p className="text-center h5 fw-bold mt-5 mb-4">
                                Ingresa los datos de contacto
                            </p>
                            <div className="row g-0">
                                <div className="col-2"></div>
                                <div className="col-md-4 col-sm-12 my-2 me-4">
                                    <p className="mb-1 form-field-text">Nombre completo<span className="asterisk">*</span></p>
                                    <TextField size="small" className='w-100' variant="outlined" label="Ingresa tu nombre" onChange={(e) => setName(e.target.value)}></TextField>
                                </div>
                                <div className="col-md-4 col-sm-12 my-2 me-4">
                                    <p className="mb-1 form-field-text">Nombre de la empresa<span className="asterisk">*</span></p>
                                    <TextField size="small" className='w-100' variant="outlined" label="Ingresa el nombre de la empresa" onChange={(e) => setCompany(e.target.value)}></TextField>
                                </div>
                            </div>
                            <div className="col-2"></div>
                            <div className="row g-0">
                                <div className="col-2"></div>
                                <div className="col-md-4 col-sm-12 my-2 me-4">
                                    <p className="mb-1 form-field-text">Correo electrónico<span className="asterisk">*</span></p>
                                    <TextField size="small" className='w-100' variant="outlined" label="Ingresa tu correo" onChange={(e) => setEmail(e.target.value)}></TextField>
                                </div>
                                <div className="col-md-4 col-sm-12 my-2 me-4">
                                    <p className="mb-1 form-field-text">Ciudad o Estado<span className="asterisk">*</span></p>
                                    <TextField size="small" className='w-100' variant="outlined" label="Ingresa la Ciudad o el Estado" onChange={(e) => setCity(e.target.value)}></TextField>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2"></div>
                                <div className="col-md-4 col-sm-12 mt-4">
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
                        <div className="d-flex flex-column align-items-center my-5 px-5">
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
                            disabled={activeStep === -1}
                            onClick={handleBack}
                            sx={{ mr: 1 }}>
                            Regresar
                        </Button>
                        <Button onClick={handlePolicy} className="red-button rounded-0" sx={{ fontSize: '18px' }}>
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
                        <Button className="red-button rounded-0" sx={{ fontSize: '18px' }}>
                            <Link href="/refacciones" sx={{ textDecoration: 'none', color: '#FFF' }}>Ver más productos</Link>
                        </Button>
                    </div>
                )}
            </Box>
        </section>
    )
}
