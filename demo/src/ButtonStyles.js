import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const styels=theme=>({
    button:{
        margin:theme.spacing.unit,
    },
    input:{
        display:'none',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssRoot: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
    bootstrapRoot: {
        boxShadow: 'none',
        textTransform: 'none',
        borderRadius: 4,
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});
//供后面的MUITheme使用的
const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

function FlatButtons(props) {
    const {classes} = props;
    return (
        <div>
            {/*普通的Button就是FlatButton，可以为其添加不同的颜色属性*/}
            <Button color="primary" className={classes.button}>FlatButton</Button>
            {/*使用variant="outlined"可以使得button变为outlinedButton*/}
            <Button variant="outlined" color="secondary" className={classes.button}>OutlinedButton</Button>
            {/*使用variant="raise"将按钮变为RaisedButton*/}
            <Button variant="raised" color="secondary" className={classes.button}>RaisedButton</Button>
            {/*使用variant="fab"将按钮变为RaisedButton*/}
            <Button variant="fab" color="primary" className={classes.button}><AddIcon/></Button>
            {/*指定IconButton内部的图标即可以使用图标按钮*/}
            <IconButton color="primary" aria-label="Delete"><DeleteIcon/></IconButton>
            <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
                <Icon>alarm</Icon>
            </IconButton>
            {/*定制按钮*/}
            <Button variant="raised" color="primary" className={classNames(classes.margin,classes.cssRoot)}>
                CustomCSS
            </Button>
            <MuiThemeProvider theme={theme}>
                <Button variant="raised" color="primary" className={classes.margin}>
                    MUI
                </Button>
            </MuiThemeProvider>
            <Button variant="raised" color="primary" disableRipple className={classNames(classes.margin,classes.bootstrapRoot)}>
                BootStrap
            </Button>
            <Button className={classes.button} variant="raised" color={"secondary"}>
                Delete
                <DeleteIcon className={classes.rightIcon} />
            </Button>
        </div>
    )
}
FlatButtons.propTypes={
    classes:PropTypes.object.isRequired,
};
export default withStyles(styels)(FlatButtons);




