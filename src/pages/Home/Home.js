import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
// la logica del Switch va en donde esta el contenido donde se renderizaba el home
// links donde estan los link items

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background:'linear-gradient(to right, #b993d6, #8ca6db)',

  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
export const Home=()=> {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

  
    return (

      <Router>
          <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
          <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Bienvenidos
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button className={classes.listNav}>
                  <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                    <ListItemText>                   
                      <Link to='/' style={{color:'#000', textDecoration:'none'}}>Home</Link>
                    </ListItemText>

                </ListItem>
                <ListItem button>
                  <ListItemIcon><MovieCreationOutlinedIcon /></ListItemIcon>
                     <ListItemText>                   
                      <Link to='/movies' style={{color:'#000', textDecoration:'none'}}>Movies</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemIcon><TheatersOutlinedIcon /></ListItemIcon>
                    <ListItemText>                   
                        <Link to='/series' style={{color:'#000', textDecoration:'none'}}>Series</Link>
                    </ListItemText>                
                  </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Sign Out" />
                </ListItem>
            </List>
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
                {/* aca iba un texto que se renderizaba en el home 
                <Typography paragraph>
                home
                  </Typography>*/}
                <Switch>
                    <Route exact path='/'>
                      Home
                    </Route>
                    <Route path='/movies'>
                       Aca van las Movies
                    </Route>
                    <Route path='/series'>
                      Series
                    </Route>
                    <Route path='/contacto'>
                      Contacto
                    </Route>
                </Switch>

            </main>
          </div>  
      </Router>
    )
}