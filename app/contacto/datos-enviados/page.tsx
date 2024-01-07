import Link from 'next/link'
import check_circle from '../../src/img/check-circle.svg'

export default function DatosEnviados() {
    return (
        <section className='p-5'>
            <div className="d-flex flex-column align-items-center my-5">
                <img width={90} src={check_circle.src} alt="" />
                <p className='data-send-title mt-4'>Los datos han sido enviados <br /> correctamente</p>
                <span className='data-send-description mt-3 text-center'>En breve un asesor se pondrá en contacto contigo</span>
                <div className="row mt-5">
                    <div className="col-6 hide-mobile">
                        <button className="white-button" style={{ border: '1px solid', width: '190px' }}>
                            <Link href="/servicios" style={{ textDecoration: 'none', color: '#E50020' }}>Conocer servicios</Link>
                        </button>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <button className="red-button" style={{ border: '1px solid', width: '190px' }}>
                            <Link href="/montacargas" style={{ textDecoration: 'none', color: '#FFF' }}>Ver más productos</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}