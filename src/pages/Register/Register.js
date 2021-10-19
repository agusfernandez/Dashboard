import React from 'react'
import RegisterForm from '../../components/RegisterForm';
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";


const Register = ({setUser}) => {
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
            <RegisterForm setUser={setUser}/>
            
        </Box>
    )
}

export default Register;