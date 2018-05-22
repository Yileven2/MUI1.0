import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import SvgIcon from '@material-ui/core/SvgIcon';
import AlarmIcon from '@material-ui/icons/Alarm';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';
import Icon from '@material-ui/core/Icon';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
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

//通过谷歌提供的材质图标可以获取需要用到的图标
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    )
}
function Icons(props) {
    const {classes}=props;
    return (
        <div className={classes.root}>
            {/*指定需要的图标*/}
            <HomeIcon className={classes.icon}/>
            {/*使用本地存在的一些图标*/}
            <AlarmIcon className={classes.icon}/>
            <AlarmOffIcon className={classes.iconHover}/>
            <ThreeDRotationIcon className={classes.icon}/>
            {/*字体图标:记得将这句话插入到index.html中*/}
            {/*<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">*/}
            <Icon color={"secondary"} className={classes.icon}>
                add_circle
            </Icon>
        </div>
    )
}
Icons.propTypes={
    classes:PropTypes.object.isRequired,
};
export default withStyles(styles)(Icons);





