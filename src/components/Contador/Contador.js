import React, { useState } from 'react'; 
import '../Contador/Contador.css'



function Contador() { 

const [contador, setContador] = useState(0); 



const incrementar = () => { 

    setContador(contador + 1); 

}; 



const decrementar = () => { 

    setContador(contador - 1); 

}; 



return ( 

    <div id='content'> 

    <h2>Contador</h2> 

    <div id='valor'><p>Valor: {contador}</p></div> 

    <div id='botoes'>
        <button id='remover' onClick={decrementar}>Decrementar</button>  

        <button id='adicionar' onClick={incrementar}>Incrementar</button> 
    </div> 

    </div> 

); 

} 



export default Contador; 