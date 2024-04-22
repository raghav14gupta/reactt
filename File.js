import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "vdom" }, "hi react");
// //root banaenge
// const root = ReactDOM.createRoot(document.querySelector("#root")); 


// const render = root.render(heading); 
// //-------------------------------------------------------------------------------------
//writing code with jsx
// const heading = <h1 id="heading">hi raghav</h1>
// console.log(heading)//jsx react element(object return krta hai)(conversion of jsx syntax into react element is done by babel package)

// const rootinside = ReactDOM.createRoot(document.querySelector("#root")) 
// rootinside.render(heading)


//------------------------------------------------------------------------------------


//react element- 
//element create by JSX
// const heading = <h1>raghav</h1>//jsx return reactelement
// console.log(heading)

 //rendering

// const rootinside = ReactDOM.createRoot(document.querySelector("#root")) 
// rootinside.render(heading)


//--------------------------------------
//components

// const Heading = ()=>(<h1>hi raghav gupta</h1>)
// const rootinside = ReactDOM.createRoot(document.querySelector("#root")) 
// rootinside.render(<Heading />) //hamesha yaad rakhna jb bhi component render karvana hai to hamesha </> ye lagane padenge

//------------------
//component composition
// const Name = ()=>(<h1>hi Raghav</h1>); //component 1

//component2
//using 1 component into another
// const Heading  = ()=>(
//     <div id="heading">
//     <h1>Your Name</h1>
//         <Name />  
//     </div>
// )
//always remember to use </>with functional components.

// const rootinside = ReactDOM.createRoot(document.querySelector("#root")) 
// rootinside.render(<Heading />)

//---------------------------------------------------------------------------------------------

//we can also use jsx to use one component inside other  ---important

const Title = ()=>(<h1>how are you!!</h1>);
const a = 12;  //variable of js 
const Heading =()=>(
   

    <h1>hi raghav!!
     {a}
     {Title()} 
    </h1>
)
//{isme hum component ko bhi pass karva sakte h }bcz at the end ye js function hi h humne vo use krlia,variable js ke etc sb use kr sakte hai jsx ke code ke ander

const rootinside = ReactDOM.createRoot(document.querySelector("#root")) 
 rootinside.render(<Heading />)