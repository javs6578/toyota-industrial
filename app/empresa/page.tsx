"use client";
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import thirty from '../src/img/30.svg'
import years from '../src/img/años_de_experiencia.svg'
import Link from 'next/link'
import red_arrow from '../src/img/red-arrow.svg'
import heart from '../src/img/heart-icon.svg'
import location from '../src/img/location-icon.svg'
import team from '../src/img/team-icon.svg'
import red_circle from '../src/img/red-circle.svg'
import orange_circle from '../src/img/orange-circle.svg'
import nature_icon_1 from '../src/img/nature-icon-1.svg'
import nature_icon_2 from '../src/img/nature-icon-2.svg'
import nature_icon_3 from '../src/img/nature-icon-3.svg'
import nature_icon_4 from '../src/img/nature-icon-4.svg'
import nature_icon_5 from '../src/img/nature-icon-5.svg'
import nuestra_historia from '../src/img/nuestra_historia_img.png'
import 'swiper/css';
import 'swiper/css/navigation';
import '../globals.css'
import './styles.css'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';

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

export default function Empresa() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            {/* EMPRESA BANNER */}
            <section className='mt-7'>
                <div className="row empresa-banner g-0 mb-5">
                    <div className="col-5 p-5 my-auto">
                        <span className='empresa-banner-text'>
                            NUESTRA EMPRESA
                        </span>
                        <h3 className='empresa-banner-title'>
                            Somos el proveedor
                            de soluciones en el
                            manejo de materiales
                        </h3>
                        <p className='empresa-banner-description'>
                            Contamos con la más completa línea de
                            productos y servicios ideales para su negocio.
                        </p>
                    </div>
                    <div className="col-7"></div>
                </div>
            </section>
            {/* 30 AÑOS */}
            <section>
                <div className="row g-0 my-5 p-5">
                    <div className="col-5 px-5">
                        <h3 className='thirty-title'>Toyota Tsusho Corporation de México</h3>
                        <p className='thirty-description mt-3'>
                            Toyota Tsusho Corporation de México es el
                            Distribuidor Oficial de la marca Toyota
                            Equipos Industriales en nuestro país y es
                            parte de la Red Global de Toyota Tsusho.
                        </p>
                        <p className='thirty-description'>
                            Toyota Tsusho es miembro del Grupo Toyota,
                            que comprende 17 compañías
                        </p>
                        <Link href="" className='footer-link' style={{ textDecoration: 'none' }}>
                            Ver compañías
                        </Link>
                        <img src={red_arrow.src} alt="" className='mx-2' />
                    </div>
                    <div className="col-3 my-auto">
                        <img src={thirty.src} alt="" />
                    </div>
                    <div className="col-4 my-5 ps-5">
                        <img src={years.src} alt="" />
                    </div>
                </div>
            </section>
            {/* FILOSOFIA, MISION, VISION */}
            <section className='container'>
                <div className="row g-0">
                    <div className="col-4 bg-red p-5">
                        <h3 className='collage-title'>Filosofía</h3>
                        <p className='collage-text my-4'>
                            Aportar servicios y soluciones que
                            ayuden a nuestros clientes a sacar
                            el mayor provecho de sus equipos y
                            así facilitar su trabajo en la
                            dirección de su empresa.
                        </p>
                        <p className='collage-text'>
                            Desde suministrar una refacción,
                            hasta ayudarles a gestionar toda su
                            flotilla, nuestro objetivo y
                            compromiso es el mismo: añadir su
                            valor a su negocio.
                        </p>
                    </div>
                    <div className="col-4 bg-black p-5">
                        <h3 className='collage-title'>Misión</h3>
                        <p className='collage-text my-4'>
                            Satisfacer siempre las necesidades
                            de nuestros clientes ofreciéndoles
                            productos y servicios de alta
                            calidad a un precio apropiado.
                        </p>
                        <p className='collage-text'>
                            Seremos fieles a ellos y nos
                            convertiremos en el proveedor
                            de soluciones preferido y de
                            confianza.
                        </p>
                    </div>
                    <div className="col-4 bg-orange p-5">
                        <h3 className='collage-title'>Visión</h3>
                        <p className='collage-text mt-4'>
                            Ser el socio de negocio
                            estratégico en el manejo de
                            material para nuestros clientes.
                            Tenemos como meta final
                            anticipar y satisfacer las
                            necesidades que nuestros clientes
                            requieran.
                        </p>
                    </div>
                </div>
            </section>
            {/* NUESTROS VALORES */}
            <section className='bg-dark pb-5 valores-section'>
                <div className='container'>
                    <h3 style={{ fontSize: '40px' }} className='valores-title text-center'>Nuestros valores</h3>
                    <div className="row g-0 py-5">
                        <div className="col-4 px-4">
                            <img className='mb-2' src={heart.src} alt="" />
                            <h4 className='valores-title'>SHOU-KON</h4>
                            <p className='valores-description'>
                                Compromiso y pasión por tu
                                trabajo, espíritu comercial y
                                pasión por el logro.
                            </p>
                        </div>
                        <div className="col-4 px-4">
                            <img className='mb-2' src={location.src} alt="" />
                            <h4 className='valores-title'>GENCHI / GENBUTSU / GENJITSU</h4>
                            <p className='valores-description'>
                                Para tomar la decisión correcta, hay
                                que estar en el lugar donde ocurren las
                                cosas, entender la situación real e
                                implementar mejora.
                            </p>
                        </div>
                        <div className="col-4 px-4">
                            <img className='mb-2' src={team.src} alt="" />
                            <h4 className='valores-title'>TEAM POWER</h4>
                            <p className='valores-description'>
                                Trabajo en equipo: si no valoramos a
                                nuestro equipo de trabajo, ellos no
                                valorarán a nuestros clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* FILOSOFIA / HISTORIA */}
            <section className='my-5 p-5'>
                <Box sx={{ width: '100%' }}>
                    <div className='shadow-bg w-50 px-5 rounded ' style={{ height: '84px' }}>
                        <Tabs className='shadow-lg px-4 h-100' value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab className='custom-tab pt-4' label="Filosofía empresarial" {...a11yProps(0)} />
                            <Tab className='custom-tab pt-4' label="Nuestra historia" {...a11yProps(1)} />
                        </Tabs>
                    </div>
                    <CustomTabPanel value={value} index={0}>
                        <div className="row">
                            <div className="col-5 px-4 my-auto">
                                <h3 className='filosofia-title'>
                                    <span className='red-text'>Vivir y prosperar conjuntamente </span>con
                                    las personas, la
                                    sociedad y el planeta
                                </h3>
                                <p className='filosofia-subtitle my-4'>
                                    Nuestro objetivo es ser una empresa generadora de
                                    valor que contribuya a la creación de una sociedad
                                    más próspera.
                                </p>
                                <Link href="/" className='footer-link' style={{ textDecoration: 'none' }}>Ver código de conducta y ética</Link>
                                <img className='ms-2' src={red_arrow.src} alt="" />
                            </div>
                            <div className="col-1"></div>
                            <div className="col-5">
                                <div className="row" style={{ position: 'relative' }}>
                                    <img className='red-circle' src={red_circle.src} alt="" />
                                    <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                        <span className='red-text fw-bold' style={{ fontSize: '30px' }}>01</span>
                                        <p className='filosofia-card-description'>Debemos luchar por actividades comerciales abiertas y equitativas</p>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                        <span className='red-text fw-bold' style={{ fontSize: '30px' }}>02</span>
                                        <p className='filosofia-card-description'>Debemos ser socialmente responsables y comprometidos con la conservación del medioambiente</p>
                                    </div>
                                </div>
                                <div className="row mt-4" style={{ position: 'relative' }}>
                                    <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                        <span className='red-text fw-bold' style={{ fontSize: '30px' }}>03</span>
                                        <p className='filosofia-card-description'>Debemos ser creativos y comprometidos a ofrecer valor agregado</p>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                        <span className='red-text fw-bold' style={{ fontSize: '30px' }}>04</span>
                                        <p className='filosofia-card-description'>Debemos respetar a las personas y trabajar para crear un ambiente de trabajo atractivo</p>
                                    </div>
                                    <img className='orange-circle' src={orange_circle.src} alt="" />
                                </div>
                            </div>
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <div className="row">
                            <div className="col-5 px-4 my-auto">
                                <h3 className='filosofia-title'>
                                    <span className='red-text'>Más de 30 años </span>
                                    de experiencia en México nos respaldan.
                                </h3>
                                <p className='filosofia-subtitle my-4'>
                                    Conoce la trayectoria que nos hace líderes en
                                    soluciones para el manejo de materiales con la
                                    más completa línea de productos y servicios
                                    para su negocio.
                                </p>
                                <Link href="/" className='footer-link' style={{ textDecoration: 'none' }}>Conoce nuestra historia</Link>
                                <img className='ms-2' src={red_arrow.src} alt="" />
                            </div>
                            <div className="col-2"></div>
                            <div className="col-4">
                                <img className='w-100' src={nuestra_historia.src} alt="" />
                            </div>
                        </div>
                    </CustomTabPanel>
                </Box>

            </section>
            {/* MEDIO AMBIENTE */}
            <section className='medio-ambiente-section'>
                <div className="row g-0 py-5">
                    <div className="col-5 p-5">
                        <span className='medio-ambiente-text'>Toyota Tsusho Corporation de México, comprometios con el</span>
                        <h3 className='medio-ambiente-title'>medio ambiente</h3>
                        <p className='medio-ambiente-description'>
                            En Toyota Tsusho Corporation de México proveemos
                            soluciones logísticas a través del diseño de propuestas
                            que optimicen las operaciones de nuestros clientes
                            aplicando buenas prácticas ambientales
                        </p>
                    </div>
                    <div className="col-7 my-auto">
                        <Swiper style={{ minHeight: '380px' }}
                            modules={[A11y, Navigation]}
                            navigation
                            spaceBetween={130}
                            slidesPerView={3}
                            className='w-100'
                        >
                            <SwiperSlide>
                                <div className="medio-ambiente-card">
                                    <img src={nature_icon_1.src} alt="" />
                                    <p className='medio-ambiente-card-description'>
                                        Estamos comprometidos con el
                                        desarrollo de montacargas
                                        eléctricos que tengan las
                                        mismas características y
                                        funcionalidad que los modelos
                                        de combustión interna.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="medio-ambiente-card">
                                    <img src={nature_icon_2.src} alt="" />
                                    <p className='medio-ambiente-card-description'>
                                        DPF-II (Filtro Diesel
                                        antipartículas) reduce
                                        emisiones de los motores diesel.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="medio-ambiente-card">
                                    <img src={nature_icon_3.src} alt="" />
                                    <p className='medio-ambiente-card-description'>
                                        El sistema de 3 vías del
                                        convertidor catalítico utilizados
                                        en los motores reduce las
                                        emisiones pesadas.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="medio-ambiente-card">
                                    <img src={nature_icon_4.src} alt="" />
                                    <p className='medio-ambiente-card-description'>
                                        Vehículos que al utilizar
                                        combustibles limpios como gas
                                        LP o gas natural comprimido
                                        emiten niveles muy bajos o nulos de ozono.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="medio-ambiente-card">
                                    <img src={nature_icon_5.src} alt="" />
                                    <p className='medio-ambiente-card-description'>
                                        Todos nuestros montacargas
                                        están fabricados para ser 99%
                                        reciclables.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}