import React from "react";
import ReactDOM  from "react-dom/client";
/*
<div id = "parent">
    <div id="child">
        <h1>
    </div>
</div>

ReactElement(Object) =>
when it is rendered 
it is convereted to HTML element
*/

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement(
            "h1",
            {},
            "I am H1 tag"
        ),
        React.createElement(
            "h2",
            {},
            "I am H2 tag"
        )]
    )
);

/*
to overpass writing this way of createlement and children there is Existence of JSX
JSX - lets us write hmtl in js
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
//create root is reponsible to create/assign a root to particlar element
root.render(parent);


