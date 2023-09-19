import Link from 'next/link'
import './globals.css'
import ventajas from './src/img/ventajas_ilustracion.png'

export default function HomePage() {
  return (
    <>
      {/* VENTAJAS */}
      <section>
        <div className="row g-0 my-5">
          <div className="col-5 my-auto p-5">
            <span className='perks-text'>VENTAJAS</span>
            <h2 className='perks-title'>Diseñamos<span className='red-text'> soluciones a la medida  </span>
              de sus necesidades
            </h2>
            <p className='perks-description'>
              Para nosotros lo más importante es ofrecerle
              productos y servicios de la más alta calidad,
              enfocándonos en las necesidades de tu negocio,
              por lo que
              <strong>
                escuchar y entender bien los retos a los
                que su operación se enfrenta, es pieza fundamental
                de nuestros procesos
              </strong>
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
            <img src={ventajas.src} alt="" />
          </div>
          <div className="col-6 my-auto p-5">
            <span className='perks-text'>SERVICIOS</span>
            <h2 className='perks-title'><span className='red-text'>Mantenimieto </span>
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
            <Link href="" className='footer-link'>
              Conoce nuestros servicios
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="row g-0 my-5">
          <div className="col-4 my-auto p-5">
            <h2 className='perks-title'><span className='red-text'> Todo </span>
              para mover sus materiales
              <span className="red-text"> en un mismo lugar</span>
            </h2>
            <p className='perks-description'>
              Podemos suministrar desde una
              refacción, servicios de mantenimiento,
              hasta gestionar toda tu flotilla.
            </p>
            <Link href="" className='footer-link'>
              Ver todos los equipo
            </Link>
          </div>
          <div className="col-8 p-0 d-flex justify-content-end">
            <img src={ventajas.src} alt="" />
          </div>
        </div>
      </section>
    </>
  )
} 