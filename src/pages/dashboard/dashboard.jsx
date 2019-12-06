import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Paper,Popper, createMuiTheme,MuiThemeProvider,Typography, Button} from '@material-ui/core';
import { blue400 } from 'material-ui/styles/colors';
import { green300 } from 'material-ui/styles/colors';
import { yellow400 } from 'material-ui/styles/colors';
import { purple400 } from 'material-ui/styles/colors';
import { indigo400 } from 'material-ui/styles/colors';
import { purple500 } from 'material-ui/styles/colors';

  const theme= createMuiTheme({
      overrides:{
        MuiButton:{
            root:{
            "margin-left": "1070px"
}
        },
    }
    })

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null
        }
    }
   
 
    handleClick(event) {
        const { currentTarget } = event;
        this.setState ({
          anchorEl: this.state.anchorEl ? null : currentTarget,
        });
      };
    
    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'no-transition-popper' : null;
        return (
            <div> 
                    <MuiThemeProvider theme={theme}>
<AppBar> 
<Toolbar>
            <h1>
          
                            <span style={{
                              color:blue400
                            }}>F</span>
                            <span style={{
                              color:green300
                            }}>U</span>
                            <span style={{
                            color:yellow400
                            }}>N</span>
                            <span style={{
                              color:purple400
                            }}>D</span>
                            <span style={{
                              color:indigo400
                            }}>O</span>
                            <span style={{
                              color:purple500
                            }}>O</span>
            </h1>
                        <div>
                        <Button aria-describedby={id} variant="contained" onClick={(event)=>this.handleClick(event)}>
          toggle
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Paper>
            <Typography >Logout</Typography>
          </Paper>
        </Popper>
      </div>
                    </Toolbar>
                   
                </AppBar>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Dashboard