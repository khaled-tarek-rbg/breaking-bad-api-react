import React from 'react'
import "./Card.modules.css"

function Card(props) {
    
   const item = props.item;
  return (
    <>


        <div className='movei' >
                <div className="img-container">
                    <img src= {item.img} alt="Avatar"/>
                 </div>

                 <div className="movei-info">
                     <h3>{item.name}</h3>
                  <span>{item.nickname}</span>
                 </div>
                <div className="movei-desc">
                     <p>{item.occupation.map((i)=> {
                         return i
                     })}</p>
                 </div>
        </div>


           
            
     
      
    </>
  )
}


export default Card