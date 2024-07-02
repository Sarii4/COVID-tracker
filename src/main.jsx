import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from "./routes/Routing.jsx"
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes/Rout.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Routing />
  {/*   <RouterProvider router={router}/> */}
  </React.StrictMode>,
)