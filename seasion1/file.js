//react file hai ye
//heading(text) create karva re h html me using react

const heading = React.createElement("h1", { id: "vdom" }, "hi react"); //h1 tag create karva re h,{object ke ander attributes dete hsi},yaha jo text enter karvana h ander tag ke-text,tag etc
//console.log(heading)  //object return me mila heading variable me,,hum soch re they h1 tag aya hoga actually me ye object hota hai

//root banaenge
const root = ReactDOM.createRoot(document.querySelector("#root")); //react khud ka root element banata hai explicitly aur usko render krvata h html code me(is se pta laagta h yaha se react components start hue h render hona)
//ye react17 me aya tha.best pratice hai to write code (directly phele react16 tk .render use krte they jb ye ni tha)

//rendering the root inside html
const render = root.render(heading); //jab hum render krte hai tb vo object jo store tha vo  convert hota hai  html element me aur render hota hai screen pe.

//-------------------------------------------------------------------------------------

//NESTED HTML STRUCTURE USING REACT
/* <div id = "parent">  //parent 
    <div id = "child">  //parent ke ander child
        <h1 id="head1">i am h1</h1> //child ke ander 2 child(h1 and h2 are siblings bcz same level pe h)
        <h2 id ="head2">i am h2</h2>
    </div>
</div> */

//parent div create ki(id vagra di),hum cha re they uske ander hum cha re h child div aye to 3rd arugemnt me child div create karva  diya 
//child div bana usko id di ab hum cha re h child div ke ander 2 <h>tag ho ,,siblings jo humko array ka use krna pada taki dono tag ek sath ajaye ]array na use krte to 1 bar me 1 tag create hota sirf

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "head1" }, "i am h1"),
    React.createElement("h2", { id: "head2" }, "i am h2"),
  ])
);

const rootinside = ReactDOM.createRoot(document.querySelector("#root")) //newhtml file me jo root tha usko target kia iske ander hamara react ka code aega

rootinside.render(parent)


//ye code bhot messy hojaega agar nesting complex hoti  gyi to

// <!--YAHA JSX KA CONCEPT AAEGA USE-->
//JSX(JAVASCRIPT XML) KI HELP SE HUM SHORT WAY ME LIKH SAKTE HAI YE SB