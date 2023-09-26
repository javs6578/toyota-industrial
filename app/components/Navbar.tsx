import Link from "next/link"
import '../globals.css'
import logo from "../src/img/toyota_equipos_industriales_logo.png"
import phone from "../src/img/phone-icon.svg"
import mail from "../src/img/mail-icon.svg"
import whatsapp from "../src/img/whatsapp-icon.svg"


export default function Navbar() {
    return (
        <nav className="navbar pt-0 fixed-top bg-light">
            <div className="container-fluid nav-contact-background pl-3 pr-0 g-0">
                <Link className="navbar-brand" href="/">
                </Link>
                <ul className="nav justify-content-end">
                    <li className="nav-item px-2">
                        <Link className="nav-link nav-contact-link" href="/empresa">Empresa</Link>
                    </li>
                    <li className="nav-item px-2">
                        <div className="d-flex">
                            <img src={mail.src} alt="" />
                            <Link className="nav-link nav-contact-link" href="mailto:contacto@toyotafl.com.mx">contacto@toyotafl.com.mx</Link>
                        </div>
                    </li>
                    <li className="nav-item px-2">
                        <div className="d-flex">
                            <img src={phone.src} alt="" />
                            <Link className="nav-link nav-contact-link" href="tel:800 717 5667">800 717 5667</Link>
                        </div>
                    </li>
                    <li className="nav-item px-2">
                        <div className="d-flex">
                            <img src={whatsapp.src} alt="" />
                            <Link className="nav-link nav-contact-link" href="/">Whatsapp</Link>
                        </div>
                    </li>
                    <li className="nav-item bg-red px-4 my-auto">
                        <Link className="nav-link nav-contact-link" href="/contacto">Contáctanos</Link>
                    </li>
                </ul>
            </div>
            <div className="container-fluid px-4">
                <Link className="navbar-brand" href="/">
                    <img src={logo.src} alt="Logo" className="d-inline-block align-text-top" />
                </Link>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link nav-router-link" href="/montacargas">Montacargas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-router-link" href="/">Automatización</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-router-link" href="/">Servicios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-router-link" href="/refacciones">Refacciones</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-router-link" href="/">Sucursales</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

