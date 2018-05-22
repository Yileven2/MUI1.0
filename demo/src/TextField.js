import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    menu: {
        width: 200,
    },
});
const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class TextFields extends Component{
    state={
        name:"zengguoqing",
        age:"23",
        multiline:'Controlled',
        currency:'EUR',
    };
    handleChange=name=>event=>{
        this.setState({
            [name]:event.target.value,
        });
    };
    render(){
        const {classes} = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    fullWidth
                    label="name"
                    className={classes.textField}
                    //可控组件
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="uncontrolled"
                    className={classes.textField}
                    //不可控组件
                    defaultValue={"foo"}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    //必须有值，required，否则无法提交表单
                    required
                    label="required"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Password"
                    className={classes.textField}
                    //密码框
                    type="password"
                    //可以自动补全上一次输入的密码
                    autoComplete={"current-password"}
                    margin={"normal"}
                />
                <TextField
                    fullWidth
                    label={"Multiline"}
                    multiline
                    //可变化文本域，最大可见4行
                    rowMax="4"
                    value={this.state.multiline}
                    onChange={this.handleChange('multiline')}
                    className={classes.textField}
                    margin={"normal"}
                />
                <TextField
                    label="Multiline"
                    multiline
                    //直接可见4行
                    rows="4"
                    defaultValue="Default Value"
                    className={classes.textField}
                    margin="normal"
                />
            </form>
        )
    }






}

export default withStyles(styles)(TextFields);



