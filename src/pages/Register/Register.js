import React from 'react'
import RegisterForm from '../../components/RegisterForm';
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";


const Register = () => {
    const classes = useStyles();

    return (
        <Box
            style={{
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "center",
                 alignItems: "center",
                 height: "100vh"
             }}
             component="div"
             className={classes.body}
        >
            <RegisterForm/>
            
        </Box>
    )
}

export default Register;