import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card} from '@material-ui/core';
import { useFormik} from 'formik';
import * as Yup from 'yup';

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

const RegisterForm = ()=>{
    const classes = useStyles();


  return(
    <Card className={classes.root}>
    </Card>
  )
}

export default RegisterForm;