import * as React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login() {
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
       /* validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'El email es obligatorio';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Email invalido';
         }
         return errors;

       }} */

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
         <Form>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           
         </Form>
       )}
     </Formik>

     
    )
}
