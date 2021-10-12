/* .campos de validacion + logica de log in // Yup && Formik && Material */

import * as React from 'react';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {Card, TextField, Button,  } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
      maxWidth: 600,
      padding: 30

    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem'
    },
    input: {
      margin: ".5rem 0 .5rem 0",
    },
    button:{
        background:'linear-gradient(to right, #b993d6, #8ca6db)',
        fontWeight:'bold'
    },
});

const LoginForm =()=>{
    const classes = useStyles();
    const [passwordValidation, setpasswordValidation] = useState("");


    //useFormik permite q otras librerias usen formik como parte de la validacions
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: Yup.object({
          email: Yup.string("Ingrese su email")
            .email("Ingrese un email valido")
            .required("El email es un campo requerido"),
          password: Yup.string("Enter your password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Password is required"),
        }),
        onSubmit: (values) => {
            // print los valores
            alert(JSON.stringify(values, null, 2));
        },
      });

      return(
          <Card className={classes.root}>
              <form className={classes.form} onSubmit={formik.handleSubmit} style={{color: passwordValidation ? "red" : "blue" }}>
                <TextField
                    className={classes.input}
                    id= "email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error ={formik.touched.email && Boolean(formik.errors.email)}
                    helperText= {formik.touched.email && formik.errors.email}
                    variant="outlined"
                    size="small"
                />

                <TextField
                    className={classes.input}
                    id= "password"
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error ={formik.touched.password && Boolean(formik.errors.password)}
                    helperText= {formik.touched.password && formik.errors.password}
                    variant="outlined"
                    size="small"
                  />        
                <Button
                    style={{ margin: ".3rem 0 .3rem 0" }}
                    color="primary"
                    variant="contained"
                    type="submit"
                    className={classes.button}
                 >
                    Log in
                </Button>



              </form>

          </Card>

      )


}

export default LoginForm;