import React from 'react';
import {StrictMode} from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';
import Home from './pages/Home';
import {useSelector} from 'react-redux';

function App() {

  // configuracion del estado de un usuario cuando entra
  // que guarde todos los datos a los "hijos"
  const [user, setUser] = useState({})
  console.log('usuario' , user)
  // el useSelector va a recibir un callback y va a devolver el parametro q le pasamos al store
  const userLogged = useSelector (state=> state.isLogged)
  return (

    <StrictMode>
       {userLogged ? <Home/> : <Login/>  }
       {/* <Login/> */}
       {/* <Register setUser={setUser}/> */}
       {/* <Home/> */}

    </StrictMode>
 
  );
}

export default App;
