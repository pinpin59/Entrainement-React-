import { useState, useEffect } from 'react';
import './cart.css';

export const Cart = (props) =>{
const [dat, setDat] = useState([]);
const [checked, setCheck] = useState(false)
const [nameBurger, setNameBurger] =useState(props.name);

const addIngredients = (e) =>{
 
        setDat([...dat,e.target.name])
    
}


    // useEffect(()=>{
    //     console.log('====================================');
    //     console.log(nameBurger);
    //     console.log('====================================');
    // },[nameBurger])

    return(
    
            <div className='cart-div'>
                <h4 className='cart-title'>{props.name}</h4>
                
                <div>
                    <img className='cart-img' src={props.img} alt="" />
                    <div>
                        <p>Ingrédients :</p>
                        <div className='div-input-cart'>
                            <div>
                           
                            <input className='input-cart' type="checkbox" id={props.ingredients[0].toLowerCase()} name={props.ingredients[0]} onChange={addIngredients} />
                            <label  htmlFor={props.ingredients[0]}>{props.ingredients[0]}</label>
                            </div>
                        </div>

                        <div className='div-input-cart'>  
                            <div>       
                            <input className='input-cart' type="checkbox" id={props.ingredients[1].toLowerCase()} name={props.ingredients[1]} onChange={addIngredients} />
                            <label  htmlFor={props.ingredients[1]}>{props.ingredients[1]}</label>
                            </div>
                        </div>

                        <div className='div-input-cart'>
                            <div>
                            <input className='input-cart' type="checkbox" id={props.ingredients[2].toLowerCase()} name={props.ingredients[2]} onChange={addIngredients}/>
                            <label  htmlFor={props.ingredients[2]}>{props.ingredients[2]}</label>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='addCartBtn' onClick={()=>props.function(dat,nameBurger)}>Ajouter au panier</button>
                </div>
            </div>
        
    )
}