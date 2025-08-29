import React, { useState } from "react"


const Semaforo =() =>{







const[color,setColor]= useState(null)
 
 const buttonChange = ()=>{
    if(color === "red"){
        setColor("yellow")
    }else if (color === "yellow"){
        setColor("green")
    }else setColor("red")
        
 }

 const handleColorChange = (newColor) =>{
    setColor(newColor)
 }

    



    return (
        <div className="container text-center">
            <div className="bg-dark mx-auto" style={{width:"10px", height:"100px"}}></div>
            <div className="bg-dark mx-auto rounded" style={{width:"200px" , height:"500px", marginTop:"-15px"}}>
            
            <div className="red-light mx-auto" onClick={()=>handleColorChange("red")} 
            style={{width:"150px", 
            height:"150px",
            borderRadius:"50%",
             backgroundColor:"red",
              boxShadow:color === "red"? " 0 0 20px 20px gray":"none", border:"20px", 
              cursor:"pointer"}}>
              
            </div>
            <div className="yellow-light mx-auto" onClick={()=>handleColorChange("yellow")} 
            style={{width:"150px",
             height:"150px",
             borderRadius:"50%",
              background:"yellow",
              boxShadow:color === "yellow"? " 0 0 20px 20px gray":"none",
               marginTop:"10px" , 
               cursor:"pointer"}}>

            </div>
            <div className="green-light mx-auto"onClick={() => handleColorChange("green")} 
            style={{width:"150px",
             height:"150px",
             borderRadius:"50%",
              background:"green",
              boxShadow:color === "green"? " 0 0 20px 20px gray":"none", 
              marginTop:"10px",
               cursor:"pointer"}}>

            </div>
            
            </div>
            
            <button className="btn btn-primary" onClick={() => buttonChange("red")}> Cambiar Color</button>

        
        </div>
    );
    };
    export default Semaforo