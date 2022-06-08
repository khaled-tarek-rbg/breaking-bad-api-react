import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const Cards = ()=>{

    const [Characters , setCharacters] = useState([]);
 


    const [Input , setInput] = useState("");


    function useData(x , y){
      if(!x){
          return y;
      }else{
          return y.filter((item)=>item.name.includes(x));
      }
    }


    function updateInput(e){
        setInput(e.target.value);
    }

    async function getInfo (){

        const result = await axios("https://www.breakingbadapi.com/api/characters");
        setCharacters(result.data);

    }
    useEffect(()=>{
        getInfo();
    } , [])


    let items =  useData(Input , Characters)
    return(
    <>
    
    <header>
            <form className="form" id="form">
                <input type="text" className="search" name="search" id="search" onChange={updateInput} value={Input} />
            </form>
    </header>

    <h1 className="text-center">Breaking Bad</h1>
     <main className="main">
              
                {items.map((item)=> <Card item = {item} key={item.char_id}/>)}
    </main>
    
    </>
        
    )



}

export default Cards;