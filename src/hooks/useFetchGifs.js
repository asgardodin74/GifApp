import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs=( category )=>{
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages=async ()=>{
        const newImages=await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    //[]---Solo se dispara la primera vez
    //No podemos definir useEffect como asincrono porque espera un afuncion y no una promesa
    useEffect(()=>{
          getImages()
    },[]) 

    return{
        images:images,
        isLoading:isLoading,
    }
}//useFetchGifs