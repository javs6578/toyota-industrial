import '../globals.css'
import './styles.css'
import thirty from '../src/img/30.svg'
import years from '../src/img/años_de_experiencia.svg'
import Link from 'next/link'
import red_arrow from '../src/img/red-arrow.svg'
import heart from '../src/img/heart-icon.svg'
import location from '../src/img/location-icon.svg'
import team from '../src/img/team-icon.svg'

export default function Empresa() {
    return (
        <>
            {/* EMPRESA BANNER */}
            <section>
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
                            Conoce nuestros servicios
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
            <section className='bg-dark py-5'>
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
        </>
    )
}