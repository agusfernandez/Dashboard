import React from 'react';
import {StrictMode} from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';
import {Home} from './pages/Home/Home'

function App() {

  // configuracion del estado de un usuario cuando entra
  // que guarde todos los datos a los "hijos"
  const [user, setUser] = useState({})
  console.log('usuario' , user)

  return (

    <StrictMode>
       {/* <Login/> */}
       {/* <Register setUser={setUser}/> */}
       <Home/>

    </StrictMode>
 
  );
}

export default App;
