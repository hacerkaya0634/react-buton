import React from "react";
import Button from "./components/Button";

 const tiklaninca=()=>{
  console.log("3.butona fonknu dışarıdan yazdım");
 };

function App() {
  return(
    <div >
      <h1>HELLO...</h1>
      {console.log("js in jsx")}

      <Button ButtonText="buton 1 :)" type="primary"
      onClick={()=>{
        console.log("buton 1 e basıldı"); 
      }}/> 

      <Button ButtonText="buton 2 :=)" type="secondary"
      onClick={()=>{
        alert("alert mesajı olarak buton 2 ye basıldı");
      }}/>
      <Button ButtonText="buton-3 dışardan" type="handry"
      tiklaninca={tiklaninca}/>
      <p></p>
    </div>
  );
}
export default App;
