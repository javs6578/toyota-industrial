"use client";
import MapChart from "./MapChart";
import React from "react";
import ReactDOM from "react-dom";
import { Tooltip as ReactTooltip } from 'react-tooltip'
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
    return (
        <div>
            <MapChart/>
        </div>
    )
}