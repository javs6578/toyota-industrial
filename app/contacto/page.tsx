import logo from "../src/img/toyota_equipos_industriales_logo_footer.png"
import facebook from "../src/img/facebook-icon.svg"
import linkedin from "../src/img/linkedin-icon.svg"
import youtube from "../src/img/youtube-icon.svg"
import contacto_banner from "../src/img/contacto-banner.svg"
import '../globals.css'
import Link from "next/link"
import gray_mail from '../src/img/gray-mail-icon.svg'
import gray_phone from '../src/img/gray-phone-icon.svg'
import TextField from "@mui/material/TextField/TextField"

export default function Contacto() {
    return (
        <section className="mt-7">
            <img className="w-100" src={contacto_banner.src} alt="" />
            <div className="row g-0 p-5">
                <div className="col-4 d-flex flex-column">
                    <h4 className="footer-header">Visítanos en:</h4>
                    <span className="footer-description">Miguel Allende 83, Colonia Plan de Guadalupe, CPA Logistic Center San Martin Obispo, Cuautitlán Izcalli, México, C.P. 54760</span>
                    <h4 className="footer-header my-3">Contacto</h4>
                    <div className="d-flex mb-2">
                        <img className="me-3" src={gray_mail.src} alt="" />
                        <p className="mb-0 form-field-text">contacto@toyotafl.com.mx</p>
                    </div>
                    <div className="d-flex ">
                        <img className="me-3" width="20" src={gray_phone.src} alt="" />
                        <p className="mb-0">800 717 5667</p>
                    </div>
                    <h4 className="footer-header my-3">Síguenos</h4>
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
                <div className="col-1"></div>
                <div className="col-6">
                    <h5 className="text-center mb-5">
                        Ingrese los siguientes datos y en breve un asesor
                        se pondrá en contacto con usted
                    </h5>
                    <div className="row">
                        <div className="col-6">
                            <p className="mb-1 form-field-text">Nombre completo<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa tu nombre" className="w-100"></TextField>
                        </div>
                        <div className="col-6">
                            <p className="mb-1 form-field-text">Nombre de la empresa<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa el nombre de la empresa" className="w-100"></TextField>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-6">
                            <p className="mb-1 form-field-text">Correo electrónico<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa tu correo" className="w-100"></TextField>
                        </div>
                        <div className="col-6">
                            <p className="mb-1 form-field-text">Ciudad o Estado<span className="asterisk">*</span></p>
                            <TextField size="small" variant="outlined" label="Ingresa la Ciudad o el Estado" className="w-100"></TextField>
                        </div>
                    </div>
                    <p className="mb-1 form-field-text">Agregar comentario</p>
                    <TextField
                        className="w-100"
                        id="outlined-multiline-static"
                        label="Ingresa un comentario"
                        multiline
                        rows={4}
                    />
                    <div className="d-flex justify-content-end mt-3">
                        <Link href="contacto/datos-enviados">
                            <button className="red-button">Enviar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}