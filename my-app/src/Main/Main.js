import { useState, useEffect } from 'react';
import './main.css';
import { Cart } from '../Cart.js/Cart';

export const Main = (props) =>{
    const [data,setData] = useState(props.data);
    
    console.log(data);
  
    return(
        <main>
           
                <div className='cart-container'>
                   {/* {data.menu.map((d,i) => <p>{d.name}</p>)} */}
                   {data.menu.map((d,i) => <Cart key={i} name={d.name} img={d.img} ingredients={d.ingredients.map((d,i)=> d)} function={props.function}/>)}
                </div>
        
        </main>
    )
}