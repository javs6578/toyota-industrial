import logo from "../src/img/toyota_equipos_industriales_logo_footer.png"
import facebook from "../src/img/facebook-icon.svg"
import instagram from "../src/img/instagram-icon.svg"
import youtube from "../src/img/youtube-icon.svg"
import republica from "../src/img/banner_sucursales.svg"

export default function Footer() {
    return (
        <footer >
            <section className="branches-section">
                <img src={republica.src} alt="" style={{ position: 'absolute', maxHeight: '370px ' }} />
                <div className="d-flex flex-column my-auto align-items-center" style={{ position: 'relative' }}>
                    <h3 className="branches-header">Encuentre la sucursal más cercana</h3>
                    <span className="branches-description mb-3">Contamos con distintos proveedores a lo largo de toda la <br /> república mexicana</span>
                    <button className="branches-button">Ver sucursales</button>
                </div>
            </section>
            <div className="row p-5">
                <div className="col-4 d-flex flex-column">
                    <img src={logo.src} alt="" width="315" />
                    <p className="footer-description">2021 TOYOTA TSUSHO CORPORATION DE MÉXICO S.A DE C.V</p>
                    <a className="footer-link" href="">Código de ética</a>
                    <a className="footer-link" href="">Aviso de privacidad</a>
                </div>
                <div className="col-4">
                    <h4 className="footer-header">Visítanos en:</h4>
                    <span className="footer-description">Miguel Allende 83, Colonia Plan de Guadalupe, CPA Logistic Center San Martin Obispo, Cuautitlán Izcalli, México, C.P. 54760</span>
                    <h4 className="footer-header">Contacto</h4>
                    <p>contacto@toyotafl.com.mx</p>
                    <p>800 717 5667</p>
                </div>
                <div className="col-4">
                    <h4 className="footer-header">Síguenos</h4>
                    <div className="d-flex my-3">
                        <img src={facebook.src} alt="" />
                        <img src={instagram.src} alt="" className="mx-4" />
                        <img src={youtube.src} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}