// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom/client";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './root'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Root />
    </BrowserRouter>
  </StrictMode>,
)
