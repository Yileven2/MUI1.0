import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
    root: {
        display: 'flex',
        //水平居中
        justifyContent: 'center',
        //垂直居底
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: red[800],
        },
    },
});
//任意图标均可以这样获取
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function SvgIcons(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <HomeIcon className={classes.icon} />
            <HomeIcon className={classes.icon} color="primary" />
            <HomeIcon className={classes.icon} color="secondary" />
            <HomeIcon className={classes.icon} color="action" />
            <HomeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
            <HomeIcon color="disabled" className={classes.icon} style={{ fontSize: 36 }} />
        </div>
    );
}

SvgIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);