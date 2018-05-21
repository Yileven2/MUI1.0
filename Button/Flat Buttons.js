// 平面按钮是纯文本按钮。
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function FlatButtons(props) {
    const { classes } = props;
    return (
        <div>
            {/*灰色*/}
            <Button className={classes.button}>Default</Button>
            {/*浅蓝*/}
            <Button color="primary" className={classes.button}>
                Primary
            </Button>
            {/*红色*/}
            <Button color="secondary" className={classes.button}>
                Secondary
            </Button>
            {/*禁用*/}
            <Button disabled className={classes.button}>
                Disabled
            </Button>
            {/*超链接*/}
            <Button href="#flat-buttons" className={classes.button}>
                Link
            </Button>
            {/*用来加载外部的图片*/}
            <input
                accept="image/*"
                className={classes.input}
                id="flat-button-file"
                multiple
                type="file"
            />
            {/*此标签label会跳转到input*/}
            <label htmlFor="flat-button-file">
                <Button component="span" className={classes.button}>
                    Upload
                </Button>
            </label>
        </div>
    );
}

FlatButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlatButtons);










