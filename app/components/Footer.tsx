import logo from "../src/img/toyota_equipos_industriales_logo_footer.png"
import facebook from "../src/img/facebook-icon.svg"
import linkedin from "../src/img/linkedin-icon.svg"
import youtube from "../src/img/youtube-icon.svg"
import republica from "../src/img/banner_sucursales.svg"
import '../globals.css'
import Link from "next/link"
import gray_mail from '../src/img/gray-mail-icon.svg'
import gray_phone from '../src/img/gray-phone-icon.svg'

export default function Footer() {
    return (
        <footer >
            <section className="branches-section">
                <img src={republica.src} alt="" style={{ position: 'absolute', maxHeight: '370px ' }} />
                <div className="d-flex flex-column my-auto align-items-center" style={{ position: 'relative' }}>
                    <h3 className="branches-header">Encuentre la sucursal más cercana</h3>
                    <span className="branches-description mb-3">Contamos con distintos proveedores a lo largo de toda la <br /> república mexicana</span>
                    <button className="red-button">Ver sucursales</button>
                </div>
            </section>
            <div className="row g-0 p-5">
                <div className="col-4 d-flex flex-column">
                    <img src={logo.src} alt="" width="315" />
                    <p className="footer-description">2021 TOYOTA TSUSHO CORPORATION <br /> DE MÉXICO S.A DE C.V</p>
                    <Link className="footer-link my-2" href="">Código de ética</Link>
                    <Link className="footer-link" href="">Aviso de privacidad</Link>
                </div>
                <div className="col-4">
                    <h4 className="footer-header">Visítanos en:</h4>
                    <span className="footer-description">Miguel Allende 83, Colonia Plan de Guadalupe, CPA Logistic Center San Martin Obispo, Cuautitlán Izcalli, México, C.P. 54760</span>
                    <h4 className="footer-header my-3">Contacto</h4>
                    <div className="d-flex mb-2">
                        <img className="me-3" src={gray_mail.src} alt="" />
                        <p className="mb-0">contacto@toyotafl.com.mx</p>
                    </div>
                    <div className="d-flex ">
                        <img className="me-3" width="20" src={gray_phone.src} alt="" />
                        <p className="mb-0">800 717 5667</p>
                    </div>
                </div>
                <div className="col-3">
                    <h4 className="footer-header">Síguenos</h4>
                    <div className="d-flex my-3">
                        <Link href="https://www.facebook.com/toyotaindustriales" target="_blank">
                            <img src={facebook.src} alt="" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/toyota-equipos-industriales" target="_blank">
                            <img className="mx-4" src={linkedin.src} alt="" />
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCjFTFqE817Q8urJfo8kwk6A" target="_blank">
                            <img src={youtube.src} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}