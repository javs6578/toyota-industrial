"use client";
import facebook from "../src/img/facebook-icon.svg"
import linkedin from "../src/img/linkedin-icon.svg"
import youtube from "../src/img/youtube-icon.svg"
import contacto_banner from "../src/img/contáctanos_banner.jpg"
import contacto_banner_mobile from "../src/img/contáctanos_banner.jpg"
import '../globals.css'
import Link from "next/link"
import * as yup from "yup";
import gray_mail from '../src/img/gray-mail-icon.svg'
import gray_phone from '../src/img/gray-phone-icon.svg'
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFTextField } from "../hook-form";
import { Button } from "@mui/material";
import emailjs from '@emailjs/browser'

type ContactValuesProps = {
    contact_name: string,
    contact_company: string,
    contact_mail: string,
    contact_city: string,
    contact_comment: string
}

export default function Contacto() {

    const [contactData, setContactData] = useState<ContactValuesProps>({
        contact_name: '',
        contact_company: '',
        contact_mail: '',
        contact_city: '',
        contact_comment: ''
    });

    const contactSchema = yup.object().shape({
        contact_name: yup.string().required('Nombre es requerido'),
        contact_company: yup.string().required('Empresa es requerido'),
        contact_mail: yup.string().required('Correo es requerido').email('El correo debe ser valido'),
        contact_city: yup.string().required('Ciudad o estado es requerido'),
        contact_comment: yup.string().required('Comentario requerido')
    })

    const methods = useForm<ContactValuesProps>({
        resolver: yupResolver(contactSchema),
        defaultValues: {
            contact_name: contactData?.contact_name || '',
            contact_company: contactData?.contact_company || '',
            contact_mail: contactData?.contact_mail || '',
            contact_city: contactData?.contact_city || '',
            contact_comment: contactData?.contact_comment || ''
        },
    })

    const submitContact = async (data: ContactValuesProps, e: any) => {
        const bodyJSON = {
            "data": {
                "contact_name": data.contact_name,
                "contact_company": data.contact_company,
                "contact_mail": data.contact_mail,
                "contact_city": data.contact_city,
                "contact_comment": data.contact_comment,
            }
        }
        await fetch('http://localhost:1337/api/contact-uses', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyJSON)
        })
        emailjs.sendForm('service_utymded', 'template_jssz6tp', e.target, 'EZFglXdwLTeNCKQ3x')
        window.location.replace("contacto/datos-enviados");
    };

    const { handleSubmit } = methods

    return (
        <section>
            <img className="w-100 hide-mobile" src={contacto_banner.src} alt="" />
            <img className="w-100 hide-desktop" src={contacto_banner_mobile.src} alt="" />
            <div className="row g-0 p-5">
                <div className="col-md-4 col-sm-12 hide-mobile d-flex flex-column">
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
                <div className="col-md-6 col-sm-12">
                    <FormProvider methods={methods} onSubmit={handleSubmit(submitContact)} >
                        <h5 className="text-center">
                            Ingrese los siguientes datos y en breve un asesor
                            se pondrá en contacto con usted
                        </h5>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 my-2">
                                <p className="mb-1 form-field-text">Nombre completo<span className="asterisk">*</span></p>
                                <RHFTextField
                                    name="contact_name"
                                    placeholder="Ingresa tu nombre"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    className="w-100"
                                    autoComplete="off"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="col-md-6 col-sm-12 my-2">
                                <p className="mb-1 form-field-text">Nombre de la empresa<span className="asterisk">*</span></p>
                                <RHFTextField
                                    name="contact_company"
                                    placeholder="Ingresa el nombre de la empresa"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    className="w-100"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 my-2">
                                <p className="mb-1 form-field-text">Correo electrónico<span className="asterisk">*</span></p>
                                <RHFTextField
                                    name="contact_mail"
                                    placeholder="Ingresa tu correo"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    className="w-100"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-md-6 col-sm-12 my-2">
                                <p className="mb-1 form-field-text">Ciudad o Estado<span className="asterisk">*</span></p>
                                <RHFTextField
                                    name="contact_city"
                                    placeholder="Ingresa la Ciudad o el Estado"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    className="w-100"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <p className="form-field-text my-2">Agregar comentario</p>
                        <RHFTextField
                            name="contact_comment"
                            placeholder="Ingresa un comentario"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className="w-100"
                            autoComplete="off"
                            multiline
                            rows={4}
                        />
                        <div className="d-flex justify-content-end mt-3">
                            <Button className="red-button" type="submit">
                                Enviar
                            </Button>
                        </div>
                    </FormProvider>
                </div>
            </div>
        </section>
    )
}
