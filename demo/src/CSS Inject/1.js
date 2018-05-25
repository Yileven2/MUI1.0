import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//定义样式
const styles=theme=>({
    root:{
        color:"inherit",
        textDecoration:"inherit",
        '&:hover':{
            textDecoration:'underline',
        }
    },
    primary:{
        color:theme.palette.primary.main,
    }
});
//定义模型框架
function MyLink(props) {
    const {children,classes,className,variant,...other}=props;
    return (
        <a className={classNames(
            classes.root,
            {
                [classes.primary]:variant==='primary',
            },
            className,
        )}
           {...other}
        >
            {children}
        </a>
    )
}
MyLink.PropTypes={
    children:PropTypes.node.isRequired,
    classes:PropTypes.object.isRequired,
    className:PropTypes.object.isRequired,
    variant:PropTypes.oneOf(["primary"]),
};

//将样式注入框架
const MyLinkWithStyles=withStyles(styles)(MyLink);
export default function CssInJss() {
    return (
        <Typography variant={"subheading"}>
            <MyLinkWithStyles href={"#"}>
                MyLink
            </MyLinkWithStyles>
            {"--"}
            <MyLinkWithStyles href={"#"} variant={"primary"}>
                {"primary"}
            </MyLinkWithStyles>
        </Typography>
    )
}


