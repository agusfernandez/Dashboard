import * as React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useState } from 'react';
// le puedo dar las propiedades que necesite
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Login() {
   const classes = useStyles();
   const [passwordValidation, setpasswordValidation] = useState("");
    return (
    
        <Formik
        // le paso un email y una contraseña
       initialValues={{ 
           email: '', 
           password: '' 
        }}
      //yup validation
        validationSchema={Yup.object({
            email:Yup.string().email('Debe ingresar un mail valido,gracias').required('El mail es obligatorio'),
            password:Yup.string().required('La contraseña es requerida').min(4, 'La contraseña debe tener al menos 4 caracteres')
        })}
 

       // cuando le demos enter ejecuta la accion que debe ejecutar y puede recibir values q son los valores q les deben pasar
       onSubmit={(values, { setSubmitting }) => {
         //disparar una alerta despues de ierto tiempo
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className={classes.root} noValidate autoComplete="off" style={{color: passwordValidation ? "red" : "blue" }}>

       
           <TextField id="outlined-basic" label="Email" variant="outlined" type="email" name="email"/>
           <ErrorMessage name="email" component="div" />
           <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password"/>
           <ErrorMessage name="password" component="div" />

     
           {/* <Field type="email" name="email" />
           <Field type="password" name="password" /> */}
           <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">Enviar</Button>
           
         </Form>
       )}
     </Formik>

     
    )
}
