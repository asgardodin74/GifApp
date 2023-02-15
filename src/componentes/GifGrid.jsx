import React from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid=({category})=>{
  
    const {images,isLoading}=useFetchGifs(category);
    
       return(
        <>
            <h3>{category}</h3> 
            {/* los parententesis no son necesarios */}
            {/* {isLoading?(<h2>isloading</h2>):null} */}
            {/* otra manera de hacerlo con un and logico */}
            {isLoading && (<h2>is loading ........</h2>)}
            <div className="card-grid">
                {images.map((image)=>(
                    <GifItem 
                     key={image.id}
                    //  title={image.title}
                    //  url={image.url}
                    //utiliamos el spreadoperator para mandar todas la propiedades
                    {...image}
                />))}
            </div>     
        </>
    )
}//GifGrid