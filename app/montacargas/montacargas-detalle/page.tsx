"use client";
import '../../globals.css'
import * as React from 'react';
import montacargas from '../../src/img/montacargas_banner.jpg'
import montacargas_vehicle from '../../src/img/montacargas.png'
import { FormControl, FormControlLabel, FormLabel, Link, Radio, RadioGroup, TextField } from '@mui/material'
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import red_arrow from '../../src/img/red-arrow.svg'
import { useRouter } from 'next/navigation'

export default function MontacargasDetail() {

    const [count, setCount] = useState(0);
    const [product, setProduct]: any = useState({
        "model": "",
        "load_capacity": "",
        "height_capacity": "",
        "equip": "",
        "img": ""
    })

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [condition, setCondition] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('1');

    const router = useRouter()

    const handleData = async () => {
        const payload = {
            data: {
                name,
                company,
                email,
                city,
                condition,
                type,
                quantity
            }
        }
        await fetch('https://worthy-art-2f349fa41d.strapiapp.com/api/quotes', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer a81ce047fc28c815ad7f15baed2ae45ffa661e27505a58eea8194186fcd4807588b5e432b806aa6281a3543655c1c4d9d57153c266afbc207b18cca5ab308cb1a8f7a8e54e0e6a5b311f8b8834d13acfba3f42ab1698d4a8aff49d0d6a141dfe4c4bcce8847daaea2a9dbe95379825e8674104a2ba89acf0687de5932f5ef82a"
            },
            body: JSON.stringify(payload)
        })
        router.push('/contacto/datos-enviados')
    }

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

    useEffect(() => {
        const sessionProduct: any = sessionStorage.getItem('product')
        setProduct(JSON.parse(sessionProduct) || null)
      }, []);

    return (
        <section>
            <img className='w-100' src={montacargas.src} alt="" />
            <div className="row g-0 p-4">
                <div className="col-md-3 col-sm-12 p-3">
                    <div className='montacargas-card'>
                        <span className='h5 red-text' style={{ color: '#E50020' }}>Características del equipo</span>
                        <img src={product.img} className='montacargas-img' alt="" />
                        <strong>Equipo</strong>
                        <p>{ product.equip }</p>
                        <strong>Modelo</strong>
                        <p>{ product.model }</p>
                        <strong>Capacidad de carga lb/kg</strong>
                        <p>{ product.load_capacity }</p>
                        <strong>Altura máxima/contraído (milímetros)</strong>
                        <p>{ product.height_capacity }</p>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 p-4 my-auto">
                    <p className="h5 send-picture-text dark-red-text my-3" style={{ fontSize: '18px'}}>
                        Ingresa los siguientes datos para solicitar la cotización <br className='hide-mobile' />
                        de tu producto
                    </p>
                    <div className="row g-0 mb-3">
                        <div className="col-md-6 col-sm-12 mb-3">
                            <p className="mb-1 form-field-text">Nombre completo<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa tu nombre" className="w-100 pe-3" onChange={(e) => setName(e.target.value)}></TextField>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="mb-1 form-field-text">Nombre de la empresa<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa el nombre de la empresa" className="w-100 pe-3" onChange={(e) => setCompany(e.target.value)}></TextField>
                        </div>
                    </div>
                    <div className="row g-0 my-3">
                        <div className="col-md-6 col-sm-12 mb-3">
                            <p className="mb-1 form-field-text">Correo electrónico<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa tu correo" className="w-100 pe-3" onChange={(e) => setEmail(e.target.value)}></TextField>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="mb-1 form-field-text">Ciudad o Estado<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa la Ciudad o el Estado" className="w-100 pe-3" onChange={(e) => setCity(e.target.value)}></TextField>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-12"><FormControl className='mb-3'>
                            <FormLabel className='black-text' id="demo-radio-buttons-group-label"><span className='form-field-text'>Condición y tipo</span></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                onChange={(e) => setCondition(e.target.value)}
                            >
                                <FormControlLabel value="Nuevo" control={<Radio />} label="Nuevo" />
                                <FormControlLabel value="Seminuevo" control={<Radio />} label="Seminuevo" />
                            </RadioGroup>
                        </FormControl></div>
                        <div className="col-md-6 col-sm-12">
                            <FormControl className='mb-3'>
                                <FormLabel className='black-text' id="demo-radio-buttons-group-label"><span className='form-field-text'>Tipo</span></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    onChange={(e) => setType(e.target.value)}
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
                            <button className="white-button" style={{ border: "1px solid", height: '54px' }}>
                                <Link href="/montacargas" className='footer-link' style={{ textDecoration: 'none' }}>
                                    Regresar
                                </Link>
                            </button>
                            <button className="red-button" style={{ height: '54px', marginLeft: 10 }} onClick={handleData}>
                                Solicitar cotización
                            </button>
                    </div>
                </div>
            </div>
        </section>
    )
}