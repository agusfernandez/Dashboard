import * as React from 'react';
import LoginForm from '../../components/LoginForm';
import { useStyles } from "./styles";
import { Box, Link } from "@material-ui/core";



export default function Login() {
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
         <LoginForm/>
          <Link
              component="button"
              variant="body2"
              className={classes.link}
              onClick={() => {
                console.info("boton registro.");
              }}
            >
              ¿Sos nuevo? Registrate aqui
            </Link>
      </Box>
    )
}
