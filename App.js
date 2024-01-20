import React from "react"; 
import ReactDOM from "react-dom/client";

// const Jsxheading= <h1>hello</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Jsxheading)
const Title = ()=>(
    <h1>React JavaScript</h1>
);

const HeadingComp = ()=>(
    <>
    <Title/>
    <h1 id="head">
        hello world
    </h1>
    </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <HeadingComp/>);