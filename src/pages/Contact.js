import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';

import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

const Contact = () => {

    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/> 

            <h2>Contact us !</h2>
            
            <div>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">NAME</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle/>
                    </InputAdornment>
                        }
                    />
                </FormControl>
                    <TextField
                        className={classes.margin}
                        id="input-with-icon-textfield"
                        label="SURNAME"
                        InputProps={{
                        startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle/>
                    </InputAdornment>
                         ),
                    }}
                    />
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EmailIcon/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="email adress" />
                            </Grid>
                            </Grid>
                            <Grid container alignItems="center">
                            <InputLabel container spacing={1} 
                                flexDirection = "column" 
                                alignItems="flex-end" 
                                htmlFor="select" 
                                id="textInput">Are you a charity or a donator? 
                            </InputLabel>
                            <NativeSelect container id="select">
                                <option>charity</option>
                                <option>donator</option>
                            </NativeSelect>
                            </Grid>

                        <div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Questions?"
                            multiline
                            rows={10}
                            defaultValue="..."
                            variant="outlined"
                        />
                        </div>
                    </div>
                   
                    </div>

                    
        </div>


    )
}

export default Contact
