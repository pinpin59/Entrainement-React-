import './App.css';
import { Form } from './Form/Form';
import { Input } from './Form/Input/Input';
import { Label } from './Form/Label/Label';
import { useEffect ,useState } from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import logoBurger from './img/burger-logo.png';
const json = require("./Recette/recette.json");



function App() {
  const [login, setLogin] = useState(false);
  const [valueEmail, setValueEmail] = useState();
  const [valuePassword, setValuePassword] = useState();
  const [ingredients, setIngredients]= useState(json);
  const [valueCart, setValueCart] = useState([]);
  const [message,setMessage]= useState();

  ///////////////Function////////////
  const connection = () => {
    if(valueEmail.length > 5 && valuePassword.length > 5){
      setLogin([valueEmail,valuePassword]);
    }else{
      setMessage('Veuillez saisir vos identifiants')
    }
    
  }
  //////////////////////////////////////
 
  // useEffect(()=>{
  //   console.log(ingredients.menu[0].name);
  // },[])

useEffect(()=>{
  console.log(valueCart);
 
},[valueCart])

  // useEffect(() =>{
  //   console.log(valueEmail);
   
  // },[valueEmail])

  return (

    <div className="App">

      {!login ?
       <div className='center'>
        <Form connection={connection}>
          <Label htmlFor="email" name="email" />
          <Input type="email" placeholder="Veuillez entrer un email" function={(e)=> setValueEmail(e.target.value)}/>
          <br/>
          <Label htmlFor="password" name="Mot de passe"/>
          
          <Input type="password" placeholder="Veuillez entrer un mot de passe" function={(e)=> {setValuePassword(e.target.value)}}/>
          <p>{message}</p>
          <br/>
        </Form>
      </div> 
      :
      <>
       
        <>
          <Header title="MyBurger"  img={logoBurger} dataCart={valueCart}/>
          <Main data={ingredients} function={(dat ,nameBurger)=> setValueCart([nameBurger,dat])} dataCart={valueCart}/>
        </>

      </>
      }
      
    </div>
  );
}

export default App;
