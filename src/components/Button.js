import React from "react";
import "../assest/css/button.css";

const Button=(props)=>{
  console.log(props);
  if(props.type=="primary"){
    return(
      <button className="primary" onClick={props.onClick}>
        {props.ButtonText}
      </button>
    );
  }
  if(props.type=="secondary"){
    return(
      <button className="secondary" onClick={props.onClick}>
        {props.ButtonText}
      </button> 
    );
  }
  if(props.type=="handry"){
    return(
      <button className="handry" onClick={props.tiklaninca}>
        {props.ButtonText}
      </button> 
    );
  }
  return null;  
};
export default Button;