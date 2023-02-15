import React from "react";
import { useState } from "react";
//No hace falta definir en la ruta que lea del archivo barril /componentes/index
import { AddCategory ,GifGrid} from "./componentes";
const apiKey="ST923UN7sDoBx1IXQ9k5Lt0COP3TVXQe";
export const GifExpertApp=()=>{

    const [categories,setCategories] = useState(['One punch']);

    const onAddCategory=(value)=>{
        if(categories.includes(value)) return;//Si el elmento esta repetido no introducir
        const nuevaCategories=[value,...categories];
        setCategories(nuevaCategories);
    }//onAddCategory
    return (
        <>
            <h1>GifExpertApp</h1> 
            {/* 1º forma de hacerlo:mandamos setCAtegories al componente hijo*/}
            {/* <AddCategory setCategories={setCategories}/> */}
            <AddCategory onNewCategory={value=>onAddCategory(value)}/>
            {/* <button onClick={onAddCategory}>Agregar Categoria</button> */}
            {   categories.map(category=>{
                return <GifGrid key={category} category={category}/>
                })}     
                  
        </>
    )
}//GifExpertApp