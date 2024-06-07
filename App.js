const h1 = React.createElement("h1",{style:{backgroundColor : "green"}},"Hello World from React!");
//it's an object - react element - normaal js element
// createElement
// 1st parameter - name of Element
// 2nd parameter - {} for attributes {id : abc}
// 3rd parameter - [] what you want inside - chlidren or pass it as array
// 2nd and 3rd combined come under props 

//style in attribute just like in html element
//<h1 style="color:blue;font-size:46px;"></h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
//create root is reponsible to create/assign a root to particlar element
root.render(h1);
// to take this element sand create/convert it to
// tag that is understood by html and push it inside root
