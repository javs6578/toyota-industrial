import Link from "next/link"
import '../globals.css'
import logo from "../src/img/toyota_equipos_industriales_logo.png"
import phone from "../src/img/phone-icon.svg"
import mail from "../src/img/mail-icon.svg"
import whatsapp from "../src/img/whatsapp-icon.svg"

export default function Navbar() {
    return (
        <>
            <div className="container-fluid nav-contact-background pl-3 pr-0 g-0 subnavbar">
                <Link className="navbar-brand" href="/">
                </Link>
                <ul className="nav justify-content-end">
                    <li className="nav-item px-2 me-2">
                        <Link className="nav-link nav-contact-link" href="/empresa">Empresa</Link>
                    </li>
                    <li className="nav-item px-2">
                        <div className="d-flex">
                            <Link className="nav-link" href="mailto:contacto@toyotafl.com.mx">
                                <img src={mail.src} alt="mail-icon" width={24} />
                                <span className="hide-mobile nav-contact-link ms-2">contacto@toyotafl.com.mx</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <div className="d-flex">
                            <Link className="nav-link" href="tel:800 717 5667">
                                <img src={phone.src} alt="phone-icon" width={24} />
                                <span className="hide-mobile nav-contact-link ms-2">800 717 5667</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item px-2">
                        <div className="d-flex">
                            <Link className="nav-link" href="/">
                                <img src={whatsapp.src} alt="whatsapp-icon" width={24} />
                                <span className="hide-mobile nav-contact-link ms-2">Whatsapp</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item bg-red px-4 my-auto">
                        <Link className="nav-link nav-contact-link " href="/contacto">Contáctanos</Link>
                    </li>
                </ul>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <img src={logo.src} alt="Logo" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="nav fl-column">
                            <li className="nav-item">
                                <Link className="nav-link nav-router-link" href="/montacargas">Montacargas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-router-link" href="/">Automatización</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-router-link" href="/servicios">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-router-link" href="/refacciones">Refacciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-router-link" href="/sucursales">Sucursales</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

