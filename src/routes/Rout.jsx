import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../home";
import Layout from "../Components/layout/Layout";
import Tracker1 from "../pages/Tracker1";
import Tracker2 from "../pages/Tracker2";

export const router = createBrowserRouter ([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/tracker",
        element:< Layout />,
        children: [
            {
                path:"/tracker1",
                element:<Tracker1 />
            },
            {
                path:"/tracker2",
                element:<Tracker2 />
            }
        ]
    },
])

export default router
