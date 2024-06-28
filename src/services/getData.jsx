import { useState } from "react";

let getData = async(url) => {
    //const endpoint = "https://disease.sh/v3/covid-19/all";                    // API
    let response = await fetch(url);   // alamacena respuesta de API
    const data =await response.json();      // procesa data   
    console.log(data)
    //console.log(data.cases);
    const casetotal = data.cases;
    console.log(casetotal);

    return {data};                        // devuelve respuesta
}
console.log(getData());



export default getData;