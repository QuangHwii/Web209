import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom'
import ProductsList from './components/productsList'
export const routers = createBrowserRouter([
    { path: '/', element: <div>Home Page</div> },
    {
        path: '/admin', element: (
            <div>
                Layout Admin <Outlet />
            </div>
        ), children: [
            {
                index: true,
                element: <Navigate to={"dashboard"} />
            },
            {
                path: "dashboard",
                element: <div>Dasboard</div>
            },
            {
                path: "products",
                element: < ProductsList/>
            },
            {
                path: "products/id",
                element: <div>Product Detail</div>,
            },
        ]
    }
])