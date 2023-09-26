import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import '../globals.css'
import montacargas from '../src/img/montacargas_banner.svg'
import montacargas_vehicle from '../src/img/montacargas.png'
import SearchIcon from '@mui/icons-material/Search';

export default function Montacargas() {
    return (
        <>
            <img className='w-100 mt-7' src={montacargas.src} alt="" />
            <section>
                <div className="row g-0 p-5">
                    <div className="col-lg-2 col-md-3">
                        <FormControl>
                            <FormLabel className='red-text mb-3' id="demo-radio-buttons-group-label"><strong>Seleccione el Montacargas</strong></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel className='fw-bold' value="Combustión" control={<Radio />} label="Combustión" />
                                <FormControlLabel className='fw-bold' value="Eléctrico" control={<Radio />} label="Eléctrico" />
                                <FormControlLabel className='fw-bold' value="Reach y apiladores" control={<Radio />} label="Reach y apiladores" />
                                <FormControlLabel className='fw-bold' value="Order picker" control={<Radio />} label="Order picker" />
                                <FormControlLabel className='fw-bold' value="Tractores de arrastre" control={<Radio />} label="Tractores de arrastre" />
                                <FormControlLabel className='fw-bold' value="Patines eléctricos" control={<Radio />} label="Patines eléctricos" />
                                <FormControlLabel className='fw-bold' value="Patines hidráulico" control={<Radio />} label="Patines hidráulico" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl className='mt-5 mb-3'>
                            <FormLabel className='black-text' id="demo-radio-buttons-group-label"><h3>Condición</h3></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Nuevo" control={<Radio />} label="Nuevo" />
                                <FormControlLabel value="Seminuevo" control={<Radio />} label="Seminuevo" />
                            </RadioGroup>
                        </FormControl>
                        <button className='red-button'>Aplicar</button>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-9 col-md-9">
                        <div className='mb-3 d-flex justify-content-end'>
                            <TextField className='w-50' size='small' id="outlined-basic" label="Busca el equipo o modelo" variant="outlined" />
                            <button className='red-button-border w-25 rounded-end'>
                                Buscar <SearchIcon />
                            </button>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className='montacargas-card'>
                                    <img src={montacargas_vehicle.src} className='w-100' alt="" />
                                    <strong>Equipo</strong>
                                    <p>Combustión Cushion</p>
                                    <strong>Modelo</strong>
                                    <p>8FGCU20</p>
                                    <strong>Capacidad de carga lb/kg </strong>
                                    <p>4,000/2,000</p>
                                    <div className='d-flex flex-column'>
                                        <button className='red-button-border mb-2'>Cotizar equipo</button>
                                        <button className='white-button-border'>Ver características</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4"><div className='montacargas-card'>
                                <img src={montacargas_vehicle.src} className='w-100' alt="" />
                                <strong>Equipo</strong>
                                <p>Combustión Cushion</p>
                                <strong>Modelo</strong>
                                <p>8FGCU20</p>
                                <strong>Capacidad de carga lb/kg </strong>
                                <p>4,000/2,000</p>
                                <div className='d-flex flex-column'>
                                    <button className='red-button-border mb-2'>Cotizar equipo</button>
                                    <button className='white-button-border'>Ver características</button>
                                </div>
                            </div></div>
                            <div className="col-4"><div className='montacargas-card'>
                                <img src={montacargas_vehicle.src} className='w-100' alt="" />
                                <strong>Equipo</strong>
                                <p>Combustión Cushion</p>
                                <strong>Modelo</strong>
                                <p>8FGCU20</p>
                                <strong>Capacidad de carga lb/kg </strong>
                                <p>4,000/2,000</p>
                                <div className='d-flex flex-column'>
                                    <button className='red-button-border mb-2'>Cotizar equipo</button>
                                    <button className='white-button-border'>Ver características</button>
                                </div>
                            </div></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 