import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import {Card, TextField, Button, InputAdornment, IconButton, Visibility, VisibilityOff, MenuItem, Grid, FormControl, Checkbox, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// va entre llevaes porq directamente exporte el componente sin el default
import { nationalities } from '../../utils/nationalities';
import { gender } from '../../utils/gender';
import { useState } from 'react';

const useStyles = makeStyles((theme) =>({
    root: {
      maxWidth: 500,
      padding: 30,
      margin: theme.spacing(1),

    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem',

    },
    boxform:{
        display: 'flex',

    },
    input: {
      margin: ".5rem .6rem .5rem 0",
      width: '100%',

    },
    button:{
        background:'linear-gradient(to right, #b993d6, #8ca6db)',
        fontWeight:'bold'
    },
}))

const RegisterForm = ({setUser})=>{
    const classes = useStyles();
    const [interestMovies, setInterest] = useState({
        peliculas: false,
        series: false,
        ambas: false,        
        ninguna: false
    })

    // va a recibir un evento y va  setear los intereses
    const handleCheckbox =(event) =>{
        setInterest({...interestMovies, [event.target.name]: event.target.checked})
    }

    const formik = useFormik({
        initialValues: {
            firstname:"",
            lastname:"",
            username:"",
            nationality:"",
            birthday: "",
            gender: "",
            email: "",
            password: "",
            description: ""
        },
        validationSchema: Yup.object({
            firstname:Yup.string("Ingrese su nombre")
              .required("El nombre es requerido"),
            lastname:Yup.string("Ingrese su apellido")
              .required("El apellido es requerido"),
            username:Yup.string("Ingrese un username")
              .matches(/(^[\S]+$)/, {
                message: "El username no debe tener espacios",
                /*que excluya campos vacios */
                excludeEmptyString: false,
              })             
             .required("El username es requerido"),    
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

            gender :Yup.string("Ingrese se genero")
            .required("El genero es un campo requerido"),
            birthday: Yup.string("Ingrese su fecha de nacimiento")
              .required("La fecha de nacimiento es obligatoria"),
          }),
          onSubmit: (values) => {
            // print los valores en un alert los valores q se envian
            //alert(JSON.stringify(values, null, 2));

            //seteo el estado anterior que viene de values de formik + los intereses q traigo
            setUser({...values, interestMovies:interestMovies})
        },
    })

    return(
      <Card className={classes.root} >
              <form className={classes.form} onSubmit={formik.handleSubmit}>
               <Grid container >
                        <Grid item xs={12} spacing={4} className={classes.boxform}>
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
                                    spacing={4}
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
                                    spacing={4}
                                />
                        </Grid>
                        <Grid item xs={12}  className={classes.boxform}>
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
                        </Grid>
                        <Grid item xs={12} className={classes.boxform}>
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
                            <FormControl variant="outlined" className={classes.input} size="small">
                                <InputLabel id="nationality">Nacionalidad</InputLabel>
                                <Select
                                    labelId="nationality"
                                    id="nationality"
                                    name="nationality"
                                    value={formik.values.nationality}
                                    onChange={formik.handleChange}
                                    label="nacionalidad"
                                    >
                            {/* como se escribe logica entonces va entre llaves // que mapee las nationalities y por cada nacionalidad retorne algo*/
                            
                            /* Recordar que la key es un valor unico q necesita react como una primary key, en este caso usamos la nacionalidad como key */
                            
                            }

                            {nationalities.map((nationality)=>{ 
                                return (
                                    <MenuItem key={{nationality}} value={nationality}>{nationality}</MenuItem>
                                )

                            })}
                                {/*<MenuItem value={'Argentina'}>Argentina</MenuItem>*/}
                                
                                </Select>
                            </FormControl>
                         </Grid>

                         <Grid item xs={12} className={classes.boxform}>

                            <FormControl variant="outlined" className={classes.input} size="small">
                                <InputLabel id="gender">Género</InputLabel>
                                <Select
                                    labelId="gender"
                                    id="gender"
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    label="Género"
                                    error ={formik.touched.gender && Boolean(formik.errors.gender)}
                                    helperText= {formik.touched.gender && formik.errors.gender}

                                    >
                            {gender.map((gender)=>{ 
                                return (
                                    <MenuItem key={{gender}} value={gender}>{gender}</MenuItem>
                                )

                            })}
                                </Select>
                            </FormControl>   

                            <TextField
                                id="birthday"
                                name="birthday"
                                value={formik.values.birthday}
                                label="Fecha de Nacimiento"
                                type="date"
                                size="small"
                                onChange={formik.handleChange}
                                defaultValue=""
                                className={classes.input}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />       
                         
                        </Grid>    

                        <Grid item xs={12} className={classes.boxform}>
                        <FormControl component="fieldset" className={classes.input}>
                            <FormLabel component="legend">Intereses</FormLabel>
                            <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={interestMovies.peliculas} onChange={handleCheckbox} name="peliculas" />}
                                label="Peliculas"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={interestMovies.series} onChange={handleCheckbox} name="series" />}
                                label="Series"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={interestMovies.ambas} onChange={handleCheckbox} name="ambas" />}
                                label="Ambas"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={interestMovies.ninguna} onChange={handleCheckbox} name="ninguna" />}
                                label="Ninguna"
                            />
                            </FormGroup>
                            <FormHelperText>Be careful</FormHelperText>
                        </FormControl>
     
                         
                        </Grid>    


                        <Button
                                style={{ margin: ".3rem 0 .3rem 0" }}
                                color="primary"
                                variant="contained"
                                type="submit"
                                className={classes.button}
                        >
                            Registrarse Aqui
                        </Button>

                  </Grid>                                
             </form>
      </Card>
  )
}

export default RegisterForm;