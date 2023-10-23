"use client";

import Link from 'next/link'
import './globals.css'
import ventajas from './src/img/ventajas_ilustracion.png'
import servicios from './src/img/servicios-ilustracion.png'
import red_rectangle from './src/img/little-red-rectangle.svg'
import red_arrow from './src/img/red-arrow.svg'
import white_arrow from './src/img/white-arrow.svg'
import play_button from './src/img/play-button.svg'
import montacargas1 from './src/img/montacargas-ilustracion-1.png'
import montacargas2 from './src/img/montacargas-ilustracion-2.png'
import montacargas_slider1 from './src/img/montacargas_slider1.png'
import montacargas_slider2 from './src/img/montacargas_slider2.png'
import montacargas_slider3 from './src/img/montacargas_slider3.png'
import montacargas_slider4 from './src/img/montacargas_slider4.png'
import montacargas_slider5 from './src/img/montacargas_slider5.png'
import montacargas_slider6 from './src/img/montacargas_slider6.png'
import orange_rectangle from './src/img/orange-rectangle.png'
import colegas from './src/img/dos-colegas-fabrica.png'
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import 'swiper/css';
import 'swiper/css/scrollbar';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function HomePage() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* OFRECEMOS */}
      <section>
        <div className="row offer-section g-0 mb-5">
          <div className="col-md-6 col-sm-12 p-5 my-auto">
            <h2 className='branches-header'>Ofrecemos soluciones integrales en equipos industriales</h2>
            <p className='offer-text my-5'>
              Facilitamos la movilidad de tus materiales a través de
              equipos de combustión y eléctricos para caminos
              simples e irregulares para interiores y exteriores
            </p>
            <div className="d-flex">
              <button className='white-button me-3'>
                <Link href="#ver-equipos" className='dark-red-text' style={{ textDecoration: 'none' }}>Conoce más</Link>
              </button>
              <button className='red-button'>
                <Link href="/montacargas" className='text-light' style={{ textDecoration: 'none' }}>Ver equipos</Link>
              </button>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center m-auto hide-mobile">
            <Button onClick={handleClickOpen}>
              <img src={play_button.src} alt="" />
            </Button>
          </div>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <iframe width="600" height="445" src="https://www.youtube.com/embed/UHXo-Kb7PO8?si=e0Zjepy7-TIZ20Ol"
              title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
          </BootstrapDialog>
        </div>
      </section>
      {/* VENTAJAS */}
      <section>
        <div className="row g-0 my-5">
          <div className="col-md-5 col-sm-12 my-auto p-5">
            <span className='perks-text'>VENTAJAS</span>
            <img src={red_rectangle.src} alt="" />
            <h2 className='perks-title'>Diseñamos<span className='light-red-text'> soluciones <br /> a la medida  </span>
              de sus necesidades
            </h2>
            <p className='perks-description'>
              Para nosotros lo más importante es ofrecerle
              productos y servicios de la más alta calidad,
              enfocándonos en las necesidades de tu negocio,
              por lo que <strong> escuchar y entender bien los
                retos a los que su operación se enfrenta, es pieza
                fundamental de nuestros procesos</strong>
            </p>
          </div>
          <div className="col-md-7 col-sm-12 p-0 d-flex justify-content-end">
            <img src={ventajas.src} alt="" className='w-100' />
          </div>
        </div>
      </section>
      {/* SERVICIOS */}
      <section className='my-5 py-5'>
        <div className="row g-0 my-5">
          <div className="col-md-6 col-sm-12 hide-mobile p-0 d-flex justify-content-start">
            <img src={servicios.src} alt="" />
          </div>
          <div className="col-md-6 col-sm-12 my-auto p-5">
            <span className='perks-text'>SERVICIOS</span>
            <img src={red_rectangle.src} alt="" />
            <h2 className='perks-title'><span className='light-red-text'>Mantenimieto <br /></span>
              correctivo y preventivo
            </h2>
            <p className='perks-description'>
              Usted podrá comprar o rentar equipo nuevo
              o seminuevo. Cada equipo tiene la garantía de
              calidad, seguridad y rendimiento que caracteriza
              los productos Toyota.
            </p>
            <p className='perks-description'>
              Nuestros expertos están capacitados para brindar
              <strong> mantenimiento correctivo y preventivo,</strong> lo que
              garantiza la vida productiva de los equipos
            </p>
            <Link href="/servicios" className='footer-link' style={{ textDecoration: 'none' }}>
              Conoce nuestros servicios
            </Link>
            <img src={red_arrow.src} alt="" className='mx-2' />
          </div>
          <div className="col-md-6 col-sm-12 hide-desktop p-0 d-flex justify-content-start">
            <img src={servicios.src} alt="" className='w-100' />
          </div>
        </div>
      </section>
      {/* VER EQUIPOS */}
      <section className='my-5 pb-5' id='ver-equipos'>
        <div className="row g-0 my-5">
          <div className="col-md-4 col-sm-12 my-auto p-5">
            <h2 className='perks-title'><span className='light-red-text'> Todo </span>
              para mover sus materiales <br />
              <span className="light-red-text"> en un mismo lugar</span>
            </h2>
            <p className='perks-description my-3'>
              Podemos suministrar desde una
              refacción, servicios de mantenimiento,
              hasta gestionar toda tu flotilla.
            </p>
            <Link href="/montacargas" className='footer-link' style={{ textDecoration: 'none' }}>
              Ver todos los equipos
            </Link>
            <img src={red_arrow.src} alt="" className='mx-2' />
          </div>
          <div className="col-md-8 col-sm-12 p-0 ps-5 d-flex justify-content-end" style={{ position: 'relative' }}>
            <img src={orange_rectangle.src} alt="" style={{ position: 'absolute', bottom: '-20px' }} />
            <Swiper style={{ minHeight: '500px' }}
              modules={[A11y, Navigation]}
              navigation
              breakpoints={{
                600: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 180
                },
              }}
              className='w-100'
            >
              <SwiperSlide>
                <div className="card montacargas-slider-card">
                  <img src={montacargas_slider1.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title montacargas-slider-title">Tractor de arrastre</h5>
                    <p className="card-text montacargas-slider-description">
                      Si va a arrastrar directamente o
                      realizará múltiples paradas en su
                      ruta estos tractores cumplen su
                      objetivo
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card montacargas-slider-card">
                  <img src={montacargas_slider2.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title montacargas-slider-title">Interiores y exteriores</h5>
                    <p className="card-text montacargas-slider-description">
                      Si va a arrastrar directamente o
                      realizará múltiples paradas en su
                      ruta estos tractores cumplen su
                      objetivo
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card montacargas-slider-card">
                  <img src={montacargas_slider3.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title montacargas-slider-title">Patines hidráulicos y eléctricos</h5>
                    <p className="card-text montacargas-slider-description">
                      Estos modelos facilitan el trabajo
                      de transportar cargas en
                      almacenes, incluso son ideales
                      para pasillos estrechos.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card montacargas-slider-card">
                  <img src={montacargas_slider4.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title montacargas-slider-title">Automatización</h5>
                    <p className="card-text montacargas-slider-description">
                      Software innovador e ingeniería
                      de automatización personalizada
                      para obtener soluciones
                      completas y únicas.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card montacargas-slider-card">
                  <img src={montacargas_slider5.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title montacargas-slider-title">Apiladores Reach</h5>
                    <p className="card-text montacargas-slider-description">
                      Diseñados para cumplir con las
                      tareas cotidianas ligeras.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card montacargas-slider-card">
                  <img src={montacargas_slider6.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title montacargas-slider-title">Pasillos angostos</h5>
                    <p className="card-text montacargas-slider-description">
                      Ideal para desempeño en
                      bodegas, centros de distribución
                      y plantas de manufactura donde
                      el espacio es un problema
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>

              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* COLLAGE */}
      <section>
        <div className="row g-0">
          <div className="col-md-4 col-sm-12">
            <img className='w-100' src={montacargas1.src} alt="" />
          </div>
          <div className="col-md-4 col-sm-12 bg-dark">
            <div className='my-auto p-5'>
              <h3 className='collage-title'>Montacargas</h3>
              <p className='collage-text mt-4'>
                Contamos con equipos de combustión interna
                adecuados para la carga, transporte, traslado,
                elevación y acomodo de materiales, así como
                equipos eléctricos amigables con el medio
                ambiente ideales para movilidad en interiores
              </p>
              <div className='mt-5'>
                <Link className='collage-link me-2' href="/montacargas">
                  Encuentra aquí tu equipo
                </Link>
                <img src={white_arrow.src} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <img className='w-100' src={montacargas2.src} alt="" />
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-4 col-sm-12 bg-red">
            <div className='my-auto p-5'>
              <h3 className='collage-title'>Servicios</h3>
              <p className='collage-text mt-4'>
                Contamos con diferentes acciones de
                mantenimiento correctivo y preventivo de tus
                equipos con el propósito de garantizar y
                optimizar la productividad de tu operación.
              </p>
              <div className='mt-5'>
                <Link className='collage-link me-2' href="/servicios">
                  Conoce nuestros servicios
                </Link>
                <img src={white_arrow.src} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <img className='w-100' src={colegas.src} alt="" />
          </div>
          <div className="col-md-4 col-sm-12 bg-orange">
            <div className='my-auto p-5'>
              <h3 className='collage-title'>Refacciones</h3>
              <p className='collage-text mt-4'>
                Todas nuestras refacciones son piezas
                originales, lo cual garantiza una larga vida de
                productividad en nuestros equipos, lo que se
                traduce en un incremento de rentabilidad
                para su negocio
              </p>
              <div className='mt-5'>
                <Link className='collage-link me-2' href="/refacciones">
                  Cotiza tu refacción
                </Link>
                <img src={white_arrow.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PRÁCTICAS AMBIENTALES */}
      <section className='medio-ambiente-banner p-5 hide-mobile'>
        <div className="row">
          <div className="col-9 my-auto">
            <p className='medio-ambiente-banner-title'>
              En Toyota Tsusho Corporation de México,
              aplicamos buenas prácticas ambientales
            </p>
          </div>
          <div className="col-3 my-auto">
            <button className="white-button">
              <Link className='light-red-text' style={{ textDecoration: 'none' }} href="/empresa">
                Conoce más
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  )
} 