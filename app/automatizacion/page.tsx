"use client"
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import '../globals.css'
import montacargas from '../src/img/automatizacion_banner.jpg'
import montacargas_vehicle from '../src/img/montacargas.png'
import SearchIcon from '@mui/icons-material/Search';
import productsJSON from "./montacargas.json";
import React, { useEffect, useReducer } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import './styles.css'
import model_icon from '../src/img/model_icon.svg'
import car_icon from '../src/img/car_icon.svg'
import rule_icon from '../src/img/rule_icon.svg'
import { rule } from 'postcss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      maxWidht: 500
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    '& .MuiPaper-root': {
        width: '100%',
        maxWidth: '500px', // Set your width here
      }
  }));


export default function Montacargas() {
    const [open, setOpen] = React.useState(false);
    const [products, setProducts]: any = React.useState(productsJSON);
    const [newProducts, setNewProducts]: any = React.useState([]);
    const [equip, setEquip] = React.useState('');
    const [model, setModel] = React.useState('');
    const [charge, setCharge] = React.useState('');
    const [height, setHeight] = React.useState('');


    const [search, setSearch] = React.useState("");
    const [productType, setProductType] = React.useState("");
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [showMore, setShowMore] = React.useState(15);

    const router = useRouter()


    const handleOpen = (product: any) => {
        setEquip(product.equip)
        setModel(product.model)
        setCharge(product.load_capacity)
        setHeight(product.height_capacity)
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };
  
    const handleChange = (e: { target: { value: string; }; }) => {
        setSearch(e.target.value);
    };
    const handleType = (e: { target: { value: string; }; }) => {
        setProductType(e.target.value);
    };
    const handleDetail = (product) => {
        router.push('/automatizacion/automatizacion-detalle', { scroll: false })
        sessionStorage.setItem('product', JSON.stringify(product))
    }

    useEffect(() => {
        const oldProducts = [...products];
        const filteredAllProducts = oldProducts.filter(product => {
            // if (search && product.Modelo !== search) {
            //     return false
            // }

            if (productType && product.equip !== productType) {
                return false
            }

            if (search && !product.model.includes(search)) {
                return false
            }

            return true
        })
        setNewProducts([...filteredAllProducts])

      }, [search, productType]);

    return (
        <>
            <img className='w-100' src={montacargas.src} alt="" />
            <section>
                <div className="row g-0 p-5">
                    <div className="col-lg-2 col-md-3 hide-mobile">
                        <FormControl>
                            <FormLabel className='light-red-text mb-3' id="demo-radio-buttons-group-label"><strong>Seleccione el Equipo</strong></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                onChange={handleType}
                                value={productType}
                            >
                                <FormControlLabel className='fw-bold' value="" control={<Radio />} label="Ver todos los equipos"/>
                                <FormControlLabel className='fw-bold' value="AGV" control={<Radio />} label="AGV"/>
                                <FormControlLabel className='fw-bold' value="Rack Sorter ASRS" control={<Radio />} label="Rack Sorter ASRS" />
                                <FormControlLabel className='fw-bold' value="Conveyors & Sorters" control={<Radio />} label="Conveyors & Sorters" />
                                <FormControlLabel className='fw-bold' value="RacksCUSHION" control={<Radio />} label="Racks" />
                                <FormControlLabel className='fw-bold' value="Radio Shuttle" control={<Radio />} label="Radio Shuttle" />
                                <FormControlLabel className='fw-bold' value="Transportadores para manejo de Pallets" control={<Radio />} label="Transportadores para manejo de Pallets" />
                            </RadioGroup>
                        </FormControl>
                        {/* <FormControl className='mt-5 mb-3'>
                            <FormLabel className='black-text' id="demo-radio-buttons-group-label"><h3>Condición</h3></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Nuevo" control={<Radio />} label="Nuevo" />
                                <FormControlLabel value="Seminuevo" control={<Radio />} label="Seminuevo" />
                            </RadioGroup>
                        </FormControl> */}
                        <button className='red-button' style={{marginTop: '1em'}}>Aplicar</button>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <div className='mb-3 d-flex justify-content-center'>
                            <TextField className='w-50 rounded-0' size='small' id="outlined-basic" label="Busca el modelo" variant="outlined" onChange={handleChange}/>
                            <button className='red-button-border w-50 rounded-end' style={{ height: '40px' }}>
                                Buscar <SearchIcon />
                            </button>
                        </div>
                        <div className="row">
                            {newProducts.slice(0, showMore).map((product: any, index: any) => 
                                 <div className="col-md-4 col-sm-12 my-3" key={index}>
                                 <div className='montacargas-card'>
                                     <img src={product.img} className='montacargas-img' alt=""/>
                                     <strong>Equipo</strong>
                                     <p>{product.equip}</p>
                                     <strong>Modelo</strong>
                                     <p>{product.model}</p>
                                     <strong>Capacidad de carga lb/kg </strong>
                                     <p>{product.load_capacity}</p>
                                     <div className='d-flex flex-column'>
                                        <button className='red-button-border mb-2' onClick={()=> handleDetail(product)}>
                                            Cotizar equipo
                                        </button>
                                         <button className='white-button-border' onClick={() => handleOpen(product)}>Ver características</button>
                                     </div>
                                 </div>
                             </div>
                            )}
                        </div>
                        { showMore <= newProducts.length &&
                            <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
                                <button className='red-button' style={{marginTop: '1em'}} onClick={() => setShowMore(showMore + 15)}>Ver más equipos</button>
                            </div>
                        }
                    </div>
                </div>

                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <div className="map-dialog">
                        <div className="content-dialog">
                            <h2 className='perks-title-2 text-left' style={{fontSize: '25px'}}>
                                { equip }
                            </h2>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <img src={model_icon.src} alt="Model icon" style={{width: '50px', height: '100%', marginRight: 10}}/>
                                </div>
                                <div>
                                    <h2 className='perks-title-2' style={{fontSize: 16, color: '#E50020', margin: 0}} >
                                        Modelo
                                    </h2>
                                    <p className='perks-description m-0' >
                                        { model }
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div style={{display: 'flex'}}>
                                <div>
                                    <img src={car_icon.src} alt="Model icon" style={{width: '45px', height: '100%', marginRight: 10}}/>
                                </div>
                                <div>
                                    <h2 className='perks-title-2' style={{fontSize: 16, color: '#E50020', margin: 0}} >
                                        Capacidad de carga kg 
                                    </h2>
                                    <p className='perks-description m-0' >
                                        { charge }
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div style={{display: 'flex'}}>
                                <div>
                                    <img src={rule_icon.src} alt="Model icon" style={{width: '40px', height: '100%', marginRight: 10}}/>
                                </div>
                                <div>
                                    <h2 className='perks-title-2' style={{fontSize: 16, color: '#E50020', margin: 0}} >
                                        Opción de altura máxima / contraído
                                    </h2>
                                    <p className='perks-description m-0' >
                                        { height }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </BootstrapDialog>
            </section>
        </>
    )
} 