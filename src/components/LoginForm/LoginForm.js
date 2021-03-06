/* .campos de validacion + logica de log in // Yup && Formik && Material */

import * as React from 'react';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {Card, TextField, Button,FormControl, InputLabel, Input, OutlinedInput  } from '@material-ui/core';
import { useState } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import {signIn} from '../../actions';

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
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
    //show and not show password 
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const dispatch = useDispatch()

    //useFormik permite q otras librerias usen formik como parte de la validacions
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
          username:"",
        },
        validationSchema: Yup.object({
          email: Yup.string("Ingrese su email")
            .email("Ingrese un email valido")
            .required("El email es un campo requerido"),
          username:Yup.string("Ingrese su username")
            .required("El username es requerido"),   
          password: Yup.string("Enter your password")
            .min(8, "La contrase??a deberia tener un minimo de 8 caracteres")
            .required("La contrase??a es requerida"),
        }),
        onSubmit: (values) => {
            // print los valores en un alert los valores q se envian
            // alert(JSON.stringify(values, null, 2));
            // quiero generar una accion que cuando se envie la info me modifique el estado que se dispare una funcion
            dispatch(signIn())
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
                />
                <TextField
                    className={classes.input}
                    id= "username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error ={formik.touched.username && Boolean(formik.errors.username)}
                    helperText= {formik.touched.username && formik.errors.username}
                    variant="outlined"
                />

            
                   <FormControl  variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      className={classes.input}
                      id= "password"
                      name="password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      size="small"

                    />
                   </FormControl>


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