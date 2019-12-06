import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';



class NoTransitionPopper extends React.Component {
    constructor(props)
    {
        super(props) 

        this.state = {
    anchorEl: null,
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
        <Button aria-describedby={id} variant="contained" onClick={(event)=>this.handleClick(event)}>
          Toggle Popper
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Paper>
            <Typography >The content of the Popper.</Typography>
          </Paper>
        </Popper>
      </div>
    );
  }
}

export default NoTransitionPopper