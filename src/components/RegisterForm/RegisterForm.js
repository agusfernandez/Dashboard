import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import {Card, TextField, Button, InputAdornment, IconButton, Visibility, VisibilityOff  } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 900,
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

const RegisterForm = ()=>{
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            firstname:"",
            lastname:"",
            nationality:"",
            birthday: "",
            gender: "",
            email: "",
            password: "",
            description: "",
        },
        validationSchema: Yup.object({
            firstname:Yup.string("Ingrese su nombre")
              .required("El nombre es requerido"),
            lastname:Yup.string("Ingrese su apellido")
              .required("El apellido es requerido"),
            email: Yup.string("Ingrese su email")
              .email("Ingrese un email valido")
              .required("El email es un campo requerido"),
            password: Yup.string("Enter your password")
              .matches(/(^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$)/, {
                message: "La contraseña deberia tener entre 8 y 15 caracteres",
                /*que excluya campos vacios */
                excludeEmptyString: false,
              })
              //.min(8, "La contraseña deberia tener un minimo de 8 caracteres")
              .required("La contraseña es requerida"),
          }),
          onSubmit: (values) => {
            // print los valores en un alert los valores q se envian
            alert(JSON.stringify(values, null, 2));
        },
    })

    return(
      <Card className={classes.root}>
              <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <TextField
                        className={classes.input}
                        id= "firstname"
                        name="firstname"
                        label="Nombre"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        error ={formik.touched.firstname && Boolean(formik.errors.firstname)}
                        helperText= {formik.touched.firstname && formik.errors.firstname}
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        className={classes.input}
                        id= "lastname"
                        name="lastname"
                        label="Apellido"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        error ={formik.touched.lastname && Boolean(formik.errors.lastname)}
                        helperText= {formik.touched.lastname && formik.errors.lastname}
                        variant="outlined"
                        size="small"
                    />
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
                        type="password"
                        //type={formik.values.showPassword ? 'text' : 'password'}
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
                    Registrarse Aqui
                </Button>


             </form>
      </Card>
  )
}

export default RegisterForm;