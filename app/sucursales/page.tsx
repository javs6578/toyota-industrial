"use client";
import MapChart from "./MapChart";
import React from "react";
import ReactDOM from "react-dom";
// import * as ReactTooltip from "react-tooltip";
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));  

export default function Sucursales() {
    const [content, setContent] = React.useState("");
    return (
        <div>
            <MapChart setTooltipContent={setContent}/>
            {/* <ReactTooltip offset={{ top: 335, left: 45 }} >
                {content}
            </ReactTooltip> */}
        </div>
    )
}