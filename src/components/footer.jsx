import React from "react"

export default function Footer(){
    const year = new Date().getFullYear();
  return (
    <div style={{position: "absolute",
      textAlign:"center",
      marginBottom: "0",
      width: "99%",
      height: "2.5rem",
      fontSize:" 1em",
      bottom:"0",
      color:"blueviolet"}}>
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
    </div>
   );
 };