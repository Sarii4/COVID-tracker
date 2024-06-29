import Layout from "../layout/Layout"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path:"/tracker",
        element: <Layout/>,
        children: [
            {
                path:"/tracker1",
                element: <Tracker1/>
            },
            {
                path:"/tracker2",
                element: <Tracker2/>
            },
        ]
    }
])

/* {
    path: "/",
    element: <Home/>,
    children: [
        {
            path:"/tracker",
            element: <Layout/>,
            children: [
                {
                    path:"/tracker1",
                    element: <Tracker1/>
                },
                {
                    path:"/tracker2",
                    element: <Tracker2/>
                },
            ]
        }
    ]
}
]) */