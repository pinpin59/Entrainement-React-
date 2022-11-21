import {useState} from 'react';
import './header.css';
import { AiOutlineShoppingCart } from "react-icons/ai";



export const Header = (props) =>{
    const [bool, setBool] = useState(false)
    console.log(props);
    return(
        <header>
           
                <div className='div-container-header'>
                    <div className='d-flex'>
                    <img src={props.img} alt="burger" />
                    <h1>{props.title}</h1>
                    </div>

                    {bool ?
                    <div className='content-cart' onClick={()=>setBool(!bool)}>
                        <h4>{props.dataCart[0] ? props.dataCart[0] : "Pas de burger" }</h4>
                        <p>Ingrédients:</p>
                        
                        {props.dataCart[1] ? 
                            props.dataCart[1].map((d,i)=> <p key={i}>{d}</p>) 
                            :
                             <p>Pas d'ingrédients</p>
                        }
                 
                           <button>Valider</button>
                        
                        
                        
                    </div>
                    :
                    <div onClick={()=>setBool(!bool)} className='span-header-panier'>
                         <i><AiOutlineShoppingCart size={50} /></i>
                        {props.dataCart[0] ?
                            <div>
                                <p>1</p>
                            </div> 
                        : 
                            ' '
                        }
                    </div>
                    }
                   
                </div>
        </header>
    )
}