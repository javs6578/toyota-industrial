"use client";

import { Button, FormControl, InputLabel, Link, MenuItem, Select } from "@mui/material";
import React, { memo, useState } from "react";

export * from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import sucursales from '../src/img/sucursales_banner.jpg'
import rigth_arrow from '../src/img/right_arrow.svg'
import close_dialog from '../src/img/close_dialog.svg'

import './styles.css'
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

import { Tooltip } from 'react-tooltip'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      maxWidht: 1000
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    '& .MuiPaper-root': {
        width: '100%',
        maxWidth: '1138px', // Set your width here
      }
  }));


const geoUrl =
  "https://gist.githubusercontent.com/diegovalle/5129746/raw/c1c35e439b1d5e688bca20b79f0e53a1fc12bf9e/mx_tj.json";
const states = [
    { "clave": "AGS", "nombre": "Aguascalientes" },
    { "clave": "BC",  "nombre": "Baja California" },
    { "clave": "BCS", "nombre": "Baja California Sur" },
    { "clave": "CHI", "nombre": "Chihuahua" },
    { "clave": "CHS", "nombre": "Chiapas" },
    { "clave": "CMP", "nombre": "Campeche" },
    { "clave": "CMX", "nombre": "Ciudad de México" },
    { "clave": "COA", "nombre": "Coahuila" },
    { "clave": "COL", "nombre": "Colima" },
    { "clave": "DGO", "nombre": "Durango" },
    { "clave": "GRO", "nombre": "Guerrero" },
    { "clave": "GTO", "nombre": "Guanajuato" },
    { "clave": "HGO", "nombre": "Hidalgo" },
    { "clave": "JAL", "nombre": "Jalisco" },
    { "clave": "MCH", "nombre": "Michoacán" },
    { "clave": "MEX", "nombre": "Estado de México" },
    { "clave": "MOR", "nombre": "Morelos" },
    { "clave": "NAY", "nombre": "Nayarit" },
    { "clave": "NL",  "nombre": "Nuevo Leon" },
    { "clave": "OAX", "nombre": "Oaxaca" },
    { "clave": "PUE", "nombre": "Puebla" },
    { "clave": "QR",  "nombre": "Quintana Roo" },
    { "clave": "QRO", "nombre": "Queretaro" },
    { "clave": "SIN", "nombre": "Sinaloa" },
    { "clave": "SLP", "nombre": "San Luis Potosi" },
    { "clave": "SON", "nombre": "Sonora" },
    { "clave": "TAB", "nombre": "Tabasco" },
    { "clave": "TLX", "nombre": "Tlaxcala" },
    { "clave": "TMS", "nombre": "Tamaulipas" },
    { "clave": "VER", "nombre": "Veracruz" },
    { "clave": "YUC", "nombre": "Yucatán" },
    { "clave": "ZAC", "nombre": "Zacatecas" } 
]

const MapChart  = () => {
    const [open, setOpen] = React.useState(false);
    const [selectChanged, setSelectChanged] = React.useState(false);
    const [corpName, setCorpName] = React.useState('');

    const handleClickOpen = (name: string) => {
        setCorpName(name)
        setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleChange = () => {
        setSelectChanged(true);
    };

    const [tooltipContent, setTooltipContent] = React.useState("");

    return (    
       <section>
            <img className='w-100' src={sucursales.src} alt=""/>
            <div className="row g-0 my-5">
                <div className="col-md-3 col-sm-12 p-5">
                    <h2 className='perks-title-2 text-left mb-4' style={{color: '#E50020'}}>
                        Localiza tu estado
                    </h2>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Localiza tu estado</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Localiza tu estado"
                            onChange={handleChange}
                        >
                            {
                                states.map((state, index) => <MenuItem value={state.clave} key={index}>{state.nombre}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    { selectChanged && (
                        <>
                            <Button className="btn-right-arrow" onClick={() => handleClickOpen('SEIL')}>
                                SEIL
                                <img src={rigth_arrow.src} alt="right arrow" />
                            </Button>
                            <Button className="btn-right-arrow" onClick={() => handleClickOpen('MMH')}>
                                MMH
                                <img src={rigth_arrow.src} alt="right arrow" />
                            </Button>
                            <Button className="btn-right-arrow" onClick={() => handleClickOpen('MAC')}>
                                MAC
                                <img src={rigth_arrow.src} alt="right arrow" />
                            </Button>
                        </>
                    )}
                </div>

                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <div className="map-dialog">
                        <div className="content-dialog">
                            <h2 className='perks-title-2 text-left' style={{color: '#E50020'}}>
                                {corpName}
                            </h2>
                            <h2 className='perks-title-2' style={{fontSize: 16}}>
                                Domicilio
                            </h2>
                            <p className='perks-description m-0' >
                                Dirección: Carretera León - Silao Libramiento Norte #2020
                            </p>
                            <h2 className='perks-title-2' style={{fontSize: 16}}>
                                Contacto
                            </h2>
                            <p className='perks-description m-0' >
                                Tel: 800 717 5664<br />
                                E-mail: contacto@toyotafl.com.mx<br />
                                Sitio web: www.mmh.com.mx
                            </p>
                            <h2 className='perks-title-2' style={{fontSize: 16}}>
                                Horario de atención
                            </h2>
                            <p className='perks-description m-0' >
                                Lunes a viernes de 8:00 a 17:00hrs
                            </p>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.9461536155295!2d-101.44130085069189!3d20.954677438113162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b9b1a263104f3%3A0x70e37fc517e8e6e4!2sSeil%20Rigging%20%26%20Millwright%20-%20Silao!5e0!3m2!1sen!2smx!4v1701443613098!5m2!1sen!2smx" width="680" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </BootstrapDialog>

                <div className="col-md-9 col-sm-12 p-5">
                    <h2 className='perks-title-2 text-center'>
                    Conoce nuestras sucursales y proveedores ubicados en puntos<br />
                    estratégicos de la república Mexicana. 
                    </h2>
                    <p className='perks-description text-center m-0'>
                    Selecciona el estado donde te encuentras para poder conocer
                    el proveedor más cercano
                    </p>
                    <section data-tip="">
                        <ComposableMap
                        style={{ backgroundColor: "transparent", width: "100%", height: "auto", marginRight: 'auto', marginLeft: 'auto' }}
                        width={800}
                        height={400}  
                        projection="geoAlbers"
                        projectionConfig={{
                        center: [-5, 25]
                        }}
                        >
                        <Geographies
                        style={{ backgroundColor: "red", bottom: 100 }}
                        geography={geoUrl}
                        >
                        {({ geographies }) =>
                        geographies.map((geo) => (
                            // <Geography key={geo.rsmKey} geography={geo} fill="#D9D9D9" stroke="#F5F5F5"/>

                            <Geography
                            data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent}
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                                console.log('geo', geo.properties.state_name)
                                setTooltipContent(`${geo.properties.state_name}`);
                            }}
                            onMouseLeave={() => {
                                console.log('-')
                                setTooltipContent("");
                            }}
                            fill="#D9D9D9" 
                            stroke="#F5F5F5"
                            style={{
                                default: {
                                fill: "#D6D6DA",
                                outline: "none"
                                },
                                hover: {
                                fill: "#E50020",
                                outline: "none"
                                },
                                pressed: {
                                  fill: "#E50020",
                                  outline: "none"
                                }
                            }}
                            />
                        ))
                        }
                        </Geographies>
                        </ComposableMap>
                        <Tooltip id="my-tooltip" />
                    </section>
                </div>
            </div>
            
       </section>
      );
}

export default memo(MapChart);
