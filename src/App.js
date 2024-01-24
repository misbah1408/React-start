import React from "react"; 
import ReactDOM from "react-dom/client";
import NavBar from "./Components/NavBar";
import Restaurent from "./Components/Restaurent";
import Carousel from "./Components/Carousel";

const SwiggyApp = ()=>(
    <>
        <NavBar/>
        <main>
        <Carousel/>
        <Restaurent/>
        </main>
        
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <SwiggyApp/>);