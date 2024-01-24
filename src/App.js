import React from "react"; 
import ReactDOM from "react-dom/client";
import NavBar from "./Components/NavBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Error from "./Components/Error";
import Main from "./Components/Main";

const SwiggyApp = ()=>(
    <>
        <NavBar/>
        <main>
        <Outlet/>
        </main>
        
    </>
);

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <SwiggyApp/>,
        children:[
            {
                path: "/",
                element: <Main/>
            },
            {
                path: "/Signin",
                element:<SignIn />
            }
        ],
        errorElement : <Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={appRouter}/>);