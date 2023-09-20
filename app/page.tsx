import Link from 'next/link'
import './globals.css'
import ventajas from './src/img/ventajas_ilustracion.png'
import servicios from './src/img/servicios-ilustracion.png'
import red_rectangle from './src/img/little-red-rectangle.svg'
import red_arrow from './src/img/red-arrow.svg'
import white_arrow from './src/img/white-arrow.svg'
import montacargas1 from './src/img/montacargas-ilustracion-1.png'
import montacargas2 from './src/img/montacargas-ilustracion-2.png'
import colegas from './src/img/dos-colegas-fabrica.png'

export default function HomePage() {
  return (
    <>
      {/* OFRECEMOS */}
      <section>
        <div className="row offer-section g-0 mb-5">
          <div className="col-5 p-5 my-auto">
            <h2 className='branches-header'>Ofrecemos soluciones integrales en equipos industriales</h2>
            <p className='offer-text my-5'>
              Facilitamos la movilidad de tus materiales a través de
              equipos de combustión y eléctricos para caminos
              simples e irregulares para interiores y exteriores
            </p>
            <div className="d-flex justify-content-evenly">
              <button className='white-button'>
                Conoce más
              </button>
              <button className='red-button'>
                Ver equipos
              </button>
            </div>
          </div>
          <div className="col-7"></div>
        </div>
      </section>
      {/* VENTAJAS */}
      <section>
        <div className="row g-0 my-5">
          <div className="col-5 my-auto p-5">
            <span className='perks-text'>VENTAJAS</span>
            <img src={red_rectangle.src} alt="" />
            <h2 className='perks-title'>Diseñamos<span className='red-text'> soluciones <br /> a la medida  </span>
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
          <div className="col-7 p-0 d-flex justify-content-end">
            <img src={ventajas.src} alt="" />
          </div>
        </div>
      </section>
      {/* SERVICIOS */}
      <section>
        <div className="row g-0 my-5">
          <div className="col-6 p-0 d-flex justify-content-start">
            <img src={servicios.src} alt="" />
          </div>
          <div className="col-6 my-auto p-5">
            <span className='perks-text'>SERVICIOS</span>
            <img src={red_rectangle.src} alt="" />
            <h2 className='perks-title'><span className='red-text'>Mantenimieto <br /></span>
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
              <strong>mantenimiento correctivo y preventivo,</strong> lo que
              garantiza la vida productiva de los equipos
            </p>
            <Link href="" className='footer-link' style={{ textDecoration: 'none' }}>
              Conoce nuestros servicios
            </Link>
            <img src={red_arrow.src} alt="" className='mx-2' />
          </div>
        </div>
      </section>
      {/* VER EQUIPOS */}
      <section>
        <div className="row g-0 my-5">
          <div className="col-4 my-auto p-5">
            <h2 className='perks-title'><span className='red-text'> Todo </span>
              para mover sus materiales <br />
              <span className="red-text"> en un mismo lugar</span>
            </h2>
            <p className='perks-description'>
              Podemos suministrar desde una
              refacción, servicios de mantenimiento,
              hasta gestionar toda tu flotilla.
            </p>
            <Link href="" className='footer-link' style={{ textDecoration: 'none' }}>
              Ver todos los equipos
            </Link>
            <img src={red_arrow.src} alt="" className='mx-2' />
          </div>
          <div className="col-8 p-0 d-flex justify-content-end">
            <img src={ventajas.src} alt="" />
          </div>
        </div>
      </section>
      {/* COLLAGE */}
      <section>
        <div className="row g-0">
          <div className="col-4">
            <img className='w-100' src={montacargas1.src} alt="" />
          </div>
          <div className="col-4 bg-dark">
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
                <Link className='collage-link me-2' href="/">
                  Encuentra aquí tu equipo
                </Link>
                <img src={white_arrow.src} alt="" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <img className='w-100' src={montacargas2.src} alt="" />
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 bg-red">
            <div className='my-auto p-5'>
              <h3 className='collage-title'>Servicios</h3>
              <p className='collage-text mt-4'>
                Contamos con diferentes acciones de
                mantenimiento correctivo y preventivo de tus
                equipos con el propósito de garantizar y
                optimizar la productividad de tu operación.
              </p>
              <div className='mt-5'>
                <Link className='collage-link me-2' href="/">
                  Conoce nuestros servicios
                </Link>
                <img src={white_arrow.src} alt="" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <img className='w-100' src={colegas.src} alt="" />
          </div>
          <div className="col-4 bg-orange">
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
                <Link className='collage-link me-2' href="/">
                  Cotiza tu refacción
                </Link>
                <img src={white_arrow.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 