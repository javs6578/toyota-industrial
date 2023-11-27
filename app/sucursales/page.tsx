"use client";

import { Link } from "@mui/material";
import React, { useState } from "react";

export * from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import sucursales from '../src/img/sucursales_banner.svg'


const geoUrl =
  "https://gist.githubusercontent.com/diegovalle/5129746/raw/c1c35e439b1d5e688bca20b79f0e53a1fc12bf9e/mx_tj.json";


export default function Sucursales() {

    const [tooltip, setTooltipContent] = useState("");

    return (    
       <section>
            <img className='w-100' src={sucursales.src} alt="" />
            <div className="row g-0 my-5">
                <div className="col-md-3 col-sm-12 p-5">
                    <h2 className='perks-title-2 text-center'>
                        Localiza tu estado
                    </h2>
                </div>

                <div className="col-md-9 col-sm-12 p-5">
                    <h2 className='perks-title-2 text-center'>
                    Conoce nuestras sucursales y proveedores ubicados en puntos<br />
                    estratégicos de la república Mexicana. 
                    </h2>
                    <p className='perks-description text-center m-0'>
                    Selecciona el estado donde te encuentras para poder conocer
                    el proveedor más cercano
                    </p>
                    <section>
                        <ComposableMap
                        style={{ backgroundColor: "transparent", width: "100%", height: "auto" }}
                        width={800}
                        height={400}  
                        projection="geoAlbers"
                        projectionConfig={{
                        center: [-5, 25]
                        }}
                        >
                        <Geographies
                        style={{ backgroundColor: "red", bottom: 100 }}
                        geography={geoUrl}
                        >
                        {({ geographies }) =>
                        geographies.map((geo) => (
                            // <Geography key={geo.rsmKey} geography={geo} fill="#D9D9D9" stroke="#F5F5F5"/>

                            <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                                setTooltipContent(`${geo.properties.name}`);
                            }}
                            onMouseLeave={() => {
                                setTooltipContent("");
                            }}
                            fill="#D9D9D9" 
                            stroke="#F5F5F5"
                            style={{
                                default: {
                                fill: "#D6D6DA",
                                outline: "none"
                                },
                                hover: {
                                fill: "#E50020",
                                outline: "none"
                                },
                                // pressed: {
                                //   fill: "#E42",
                                //   outline: "none"
                                // }
                            }}
                            />
                        ))
                        }
                        </Geographies>
                        </ComposableMap>
                    </section>
                </div>
            </div>
            
       </section>
      );
}