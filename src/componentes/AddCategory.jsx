import { useState } from "react";
export const AddCategory=({onNewCategory})=>{
    const [inputValue,setInputValue] = useState('One Punch');
    const onInputChange=(e)=>{

        setInputValue(e.target.value);
        //console.log("evento del onchange",e);
    };  //onIputChange

    const onSubmit=(event)=>{
        event.preventDefault();
        //if es para no meter valores vacios en la lista o con un solo elemnto 
        if(inputValue.trim().length<=1) return ;
       //1º Forma de hacerlo enviamos setCategories desde componente padre
        // setCategories(categories=>[inputValue,...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');//REfrescamos el campo del input a valor vacio

    };//onSubmit
    return(
        <form onSubmit={(event)=>onSubmit(event)}>
        <input
            type="text"
            placeholder="buscar un gif"
            value={inputValue}
            onChange={(event)=>onInputChange(event)}
        />
        </form>
    )
}//AddCategory