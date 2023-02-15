export const getGifs= async (category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=ST923UN7sDoBx1IXQ9k5Lt0COP3TVXQe&q=${category}&limit=20`;
    const peticion=await fetch(url);
    const {data}=await peticion.json();//data es un atributo del objeto que nos retorna la peticion
    const gifs=data.map(gif=>{
        return({
            id : gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url         
                })
            })
       return gifs;
    }//getGifs