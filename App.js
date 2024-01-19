const parent = React.createElement("div",{id:"parent"}, 
[React.createElement("div",{id:"child1"}, 
[React.createElement("h1",{id:"c1"},"helo"), 
React.createElement("p",{id:"c2"},"hey are you good")]),
[React.createElement("h1",{id:"c1"},"helo"), 
React.createElement("p",{id:"c2"},"hey are you good")]])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


