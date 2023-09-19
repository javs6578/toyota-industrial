import Link from "next/link"
import '../globals.css'
import logo from "../src/img/toyota_equipos_industriales_logo.png"

export default function Navbar() {
    return (
        <nav className="navbar pt-0">
            <div className="container-fluid nav-contact-background px-3 py-2">
                <Link className="navbar-brand" href="/">
                </Link>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link nav-contact-link" href="/">Empresa</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-contact-link" href="/">contacto@toyotafl.com.mx</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-contact-link" href="/">800 717 5667</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-contact-link" href="/">Whatsapp</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-contact-link" href="/">Contáctanos</Link>
                    </li>
                </ul>
            </div>
            <div className="container-fluid px-4">
                <Link className="navbar-brand" href="/">
                    <img src={logo.src} alt="Logo" className="d-inline-block align-text-top" />
                </Link>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link nav-router-link" href="/">Montacargas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-router-link" href="/">Automatización</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-router-link" href="/">Servicios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-router-link" href="/">Refacciones</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-router-link" href="/">Sucursales</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

