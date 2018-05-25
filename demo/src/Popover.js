import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

const styles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2,
    },
});

class Popovers extends Component{
    state={
        anchorEl:null,
    };
    handleClick=event=>{
        this.setState({
            anchorEl:event.currentTarget,
        })
    };
    handleClose=()=>{
        this.setState({
            anchorEl:null,
        });
    };
    render(){
        const {classes} = this.props;
        const {anchorEl} = this.state;
        return (
            <div>
                <Button variant={"raised"} onClick={this.handleClick}>
                    open Popover
                </Button>
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical:"bottom",
                        horizontal:"center",
                    }}
                    transformOrigin={{
                        vertical:"top",
                        horizontal:"center",
                    }}
                >
                    <Typography className={classes.typography}>
                        the content of Popover.
                    </Typography>
                </Popover>
            </div>
        )
    }
}
Popovers.propTypes={
    classes:PropTypes.object.isRequired,
};

export default withStyles(styles)(Popovers);



