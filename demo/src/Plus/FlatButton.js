import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Styled from 'styled-components';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
//1
const styles=theme=>({
    root:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        width:400,
        textAlign:"center",
    },
    button:{
        margin:theme.spacing.unit,
    },
});


const MyButton = Styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
});


class FlatButton extends Component{
    render(){
        //3
        const {classes} = this.props;
        return (
            //4
            <div className={classes.root}>
                <Button className={classes.button}>Button</Button>
                {/*<MyButton>Styled Button</MyButton>*/}
            </div>
        )

    }
}

FlatButton.propTypes={
    classes:PropTypes.object.isRequired,
};
//2
export default withStyles(styles)(FlatButton);

