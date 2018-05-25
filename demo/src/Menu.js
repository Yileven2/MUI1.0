import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Manager, Target, Popper } from 'react-popper';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItem from '@material-ui/core/ListItem';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Fade from '@material-ui/core/Fade';
import MenuList from '@material-ui/core/MenuList';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
const styels=theme=>({
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
});
const options=[
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
];
class Menus extends Component{
    state={
        anchorEl1:null,//此变量用于判断菜单开关
        anchorEl2:null,
        selectedIndex:1,//初始默认选中了index=1的菜单项
        open:false,
    };
    handleClick1=event=>{
        this.setState({anchorEl1:event.currentTarget});
    };
    handleClose1=()=>{
        this.setState({
            anchorEl1:null
        })
    };
    handleClick2=event=>{
        this.setState({anchorEl2:event.currentTarget});
    };
    handleClose2=()=>{
        this.setState({
            anchorEl2:null
        })
    };
    handleClickItem2=(event,index)=>{
        this.setState({
            selectedIndex:index,
            anchorEl2:null,
        })
    };
    handleToggle3=()=>{

        this.setState({open:!this.state.open});
    };
    handleClose3 = (event) => {
        if (this.target1.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    };
    render(){
        const {classes} = this.props;
        const {anchorEl1,anchorEl2,open} = this.state;
        return (
            <div>
                {/*简单菜单项*/}
                <div style={{height:"200px"}}>
                    <Button
                        aria-owns={anchorEl1?"simple-menu":null}
                        aria-haspopup="true"
                        onClick={this.handleClick1}
                    >
                        Menu1
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl1}
                        open={Boolean(anchorEl1)}
                        onClose={this.handleClose1}
                        //设置菜单弹出动画
                        TransitionComponent={Fade}
                    >
                        <MenuItem onCLick={this.handleClose1}>11111</MenuItem>
                        <MenuItem onCLick={this.handleClose1}>22222</MenuItem>
                        <MenuItem onCLick={this.handleClose1}>33333</MenuItem>
                    </Menu>
                </div>
                {/*已选择菜单的菜单项*/}
                <div style={{height:"200px"}} className={classes.root}>
                    <List component="nav">
                        <ListItem
                            button
                            aria-haspopup="true"
                            aria-controls="lock-menu"
                            aria-label="When device is locked"
                            onClick={this.handleClick2}
                        >
                            {/*<MoreVertIcon />*/}
                            <ListItemText

                                primary="When device is locked"
                                secondary={options[this.state.selectedIndex]}
                            />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl2}
                        open={Boolean(anchorEl2)}
                        onClose={this.handleClose2}
                        //设置最大宽度
                        PaperProps={{
                            style:{
                                maxHeight:100,
                                width:200
                            }
                        }}
                    >
                        {options.map((option,index)=>(
                            <MenuItem
                                key={option}
                                disabled={index === 0}
                                selected={index === this.state.selectedIndex}
                                onClick={event => this.handleClickItem2(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                {/*设置子菜单项的位置*/}
                <div style={{height:"200px"}} className={classes.root}>
                    <Manager>
                        <Target>
                            <div
                                ref={node => {
                                    this.target1 = node;
                                }}
                            >
                                <Button
                                    variant="raised"
                                    aria-owns={open?"menu-list-grow":null}
                                    aria-haspopup="true"
                                    onClick={this.handleToggle3}
                                >
                                    Toggle Toggle Toggle Toggle
                                </Button>
                            </div>
                        </Target>
                        <Popper
                            placement="bottom-start"
                            // placement="bottom"
                            eventsEnabled={open}
                            className={classNames({ [classes.popperClose]: !open })}
                        >
                            <ClickAwayListener onClickAway={this.handleClose3}>
                                <Grow in={open} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
                                    <Paper>
                                        <MenuList role="menu">
                                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </Paper>
                                </Grow>
                            </ClickAwayListener>
                        </Popper>
                    </Manager>
                </div>
                {/*搭配图标的菜单项*/}
                <div style={{height:"200px"}}>
                    <Paper>
                         <MenuList>
                             <MenuItem className={classes.menuItem}>
                                 <ListItemIcon className={classes.icon}>
                                     <SendIcon/>
                                 </ListItemIcon>
                                 <ListItemText className={{primary:classes.primary}} inset primary="Sent mail"/>
                             </MenuItem>
                             <MenuItem className={classes.menuItem}>
                                 <ListItemIcon className={classes.icon}>
                                     <DraftsIcon />
                                 </ListItemIcon>
                                 <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
                             </MenuItem>
                             <MenuItem className={classes.menuItem}>
                                 <ListItemIcon className={classes.icon}>
                                     <InboxIcon />
                                 </ListItemIcon>
                                 <ListItemText classes={{ primary: classes.primary }} inset primary="Inbox" />
                             </MenuItem>
                         </MenuList>
                    </Paper>
                </div>
            </div>
        )
    }
}
Menus.PropTypes={
    classes:PropTypes.object.isRequired,
};
export default withStyles(styels)(Menus);
