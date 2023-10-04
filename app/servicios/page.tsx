import Link from "next/link";
import red_circle from '../src/img/red-circle.svg'
import orange_circle from '../src/img/orange-circle.svg'
import red_arrow from '../src/img/red-arrow.svg'


export default function Servicios() {
    return (
        <>
            {/* BANNER */}
            <section className='mt-7'>
                <div className="row services-banner g-0 mb-5">
                    <div className="col-6 p-5 my-auto mx-5">
                        <h2 className='branches-header'>
                            Nuestro compromiso es
                            dar soporte a todos los
                            equipos Toyota
                        </h2>
                        <p className='offer-text my-5'>
                            Nuestros técnicos expertos están capacitados <br />
                            para poder proporcionar mantenimiento a los <br />
                            montacargas Toyota.
                        </p>
                        <button className='red-button'>
                            <Link href="/montacargas" className='text-light' style={{ textDecoration: 'none' }}>Cotizar póliza</Link>
                        </button>
                    </div>
                    <div className="col-6 d-flex justify-content-center m-auto">
                    </div>
                </div>
            </section>
            {/* POLIZA STEPS */}
            <section className="p-5 mb-5">
                <div className="row">
                    <div className="col-5 px-5 my-auto">
                        <h3 className='filosofia-title' style={{ fontSize: '40px' }}>
                            Contar con una <span className='light-red-text'>póliza de mantenimiento </span>
                            tiene muchas ventajas
                        </h3>
                        <p className='filosofia-subtitle my-4'>
                            Al mantener en perfecto funcionamiento sus equipos
                            le brindamos la tranquilidad de que su operación y
                            productividad diaria no se dentendrá
                        </p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <div className="row" style={{ position: 'relative' }}>
                            <img className='red-circle' src={red_circle.src} alt="" />
                            <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>01</span>
                                <p className='filosofia-card-description'>Incremento en la productividad</p>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>02</span>
                                <p className='filosofia-card-description'>Mayor vida útil de los equipos industriales</p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ position: 'relative' }}>
                            <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>03</span>
                                <p className='filosofia-card-description'>Menores costos de operación y mantenimiento</p>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-5 filosofia-card py-4 px-3 shadow-lg">
                                <span className='light-red-text fw-bold' style={{ fontSize: '30px' }}>04</span>
                                <p className='filosofia-card-description'>Reducción del tiempo invertido en  reparaciones</p>
                            </div>
                            <img className='orange-circle' src={orange_circle.src} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}