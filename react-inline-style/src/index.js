import React from "react";
import ReactDOM from "react-dom";

//inline style
// const customStyle ={
//   color: "blue",
//   fontSize: "50px",
//   border: "1px solid black",
// }
// customStyle.color = "red";

// practice
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const date = new Date(2020, 1, 1, 16);
const currentTime = date.getHours();
let greeting;

const customStyle = {
  color: "",
}

if(currentTime < 12){
greeting = "Good Morning";
customStyle.color = "red";
}else if(currentTime < 18){
  greeting = "Good Afternoon";
  customStyle.color= "green";
}else{
  greeting = "Good night";
  customStyle.color= "blue";
}

ReactDOM.render(
  //inline
  //<h1 style={customStyle}>Hello Sneha!!</h1>,
  
  //practice
  <h1 className="heading" style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);