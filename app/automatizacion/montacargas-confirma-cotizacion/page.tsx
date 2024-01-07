import check_circle from '../../src/img/check-circle.svg'

export default function MontacargasConfirmaCotizacion() {
    return (
        <>
            <div className="d-flex flex-column align-items-center my-5">
                <img width={90} src={check_circle.src} alt="" />
                <p className='data-send-title'>Los datos han sido enviados <br /> correctamente</p>
                <span className='data-send-description mt-3'>En breve un asesor se pondrá en contacto contigo</span>
                <div className="row mt-5">
                    <div className="col-6">
                        <button className="white-button" style={{ border: '1px solid' }}>Conocer servicios</button>
                    </div>
                    <div className="col-6">
                        <button className="red-button">Ver más productos</button>
                    </div>
                </div>
            </div>
        </>
    )
}