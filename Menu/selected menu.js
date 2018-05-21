import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});
//菜单项内容
const options = [
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
];

class SimpleListMenu extends React.Component {
    state = {
        //用来控制菜单项打开还是关闭，null关闭，其他打开
        anchorEl: null,
        selectedIndex: 1,
    };

    button = undefined;
    // 打开菜单
    handleClickListItem = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    // 获取选中项，并且关闭菜单
    handleMenuItemClick = (event, index) => {
        this.setState({ selectedIndex: index, anchorEl: null });
    };
    // 仅仅关闭菜单
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;

        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="When device is locked"
                        onClick={this.handleClickListItem}
                    >
                        <ListItemText
                            primary="When device is locked"
                            secondary={options[this.state.selectedIndex]}
                        />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    {/*之前的anchorEl都是用在这里来控制菜单开关*/}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            disabled={index === 0}
                            selected={index === this.state.selectedIndex}
                            onClick={event => this.handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

SimpleListMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleListMenu);


