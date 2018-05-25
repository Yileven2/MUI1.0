import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import purple from "@material-ui/core/colors/purple";
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    menu: {
        width: 200,
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: blue[500],
        },
    },
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
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
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
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

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

class TextFields extends Component{
    state={
        name:"zengguoqing",
        age:"23",
        multiline:'Controlled',
        currency:'EUR',
        showPassword: false,
    };
    handleChange=name=>event=>{
        this.setState({
            [name]:event.target.value,
        });
    };
    handleChange1=event=>{
        this.setState({name:event.target.value})
    };
    handleMouseDownPassword = event => {
        event.preventDefault();
    };
    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    handleChange2 = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    render(){
        const {classes} = this.props;
        return (
            <div>
                {/*文本框的几种可能*/}
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
                        label="Multiline"
                        multiline
                        //直接可见4行
                        rows="4"
                        defaultValue="Default Value"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        label="Helper text"
                        defaultValue="Default value"
                        className={classes.textField}
                        //帮助文档
                        helperText="some important text"
                        margin={"normal"}
                    />
                    <TextField
                        id="with-placeholder"
                        label="With placeholder"
                        //占位符
                        placeholder="Placeholder"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="number"
                        label="Number"
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        //数字
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                    <TextField
                        id="search"
                        label="Search field"
                        //搜索框
                        type="search"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="select-currency"
                        select
                        label="Select"
                        className={classes.textField}
                        value={this.state.currency}
                        //下拉选择框
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        label="Native select"
                        className={classes.textField}
                        value={this.state.currency}
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
                        margin="normal"
                    >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        id="full-width"
                        label="Label"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Placeholder"
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                    />
                </form>
                {/*TextField由FormControl，InputLabel，Input，FormHelperText组成的*/}
                <div className={classes.container}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Name</InputLabel>
                        <Input value={this.state.name} onChange={this.handleChange1}/>
                        <FormHelperText>some information</FormHelperText>
                    </FormControl>
                </div>
                {/*TextField的布局情况*/}
                <div className={classes.container}>
                    <TextField
                    //没有margin
                        margin={"none"}
                    />
                    <TextField
                        //margin等于dense
                        margin={"dense"}
                    />
                    <TextField
                        //margin等于normal
                        margin={"normal"}
                    />
                </div>
                {/*InputAdornment*/}
                <div className={classes.container}>
                    <TextField
                        InputProps={{startAdornment:<InputAdornment position="start">Kg</InputAdornment>  }}
                    />
                    <Input
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange2('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={this.handleClickShowPassword}
                                    onMouseDown={this.handleMouseDownPassword}
                                >
                                    {this.state.showPassword?<VisibilityOff/>:<Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </div>
                {/*Input输入样式*/}
                <div className={classes.container}>
                    <Input
                        defaultValue={"默认值"}

                    /><Input
                        placeholder={"占位符"}
                    /><Input
                        //禁用
                        value={"禁用"}
                        disabled
                    /><Input
                        //错误
                        value={"错误"}
                        error
                    />
                </div>
                {/*自定义输入*/}
                <div className={classes.container}>
                    {/*手工自定义样式*/}
                    <FormControl className={classes.margin}>
                        <InputLabel
                            //自定义输入标签的样式
                            FormLabelClasses={{
                                root:classes.cssLabel,
                                focused:classes.cssFocused,
                            }}
                            htmlFor="custom-css-input"
                        >
                            Custom CSS
                        </InputLabel>
                        <Input
                            //自定义输入框的相关样式
                            classes={{
                                underline:classes.cssUnderline,
                            }}
                            id="custom-css-input"
                        />
                    </FormControl>
                    {/*直接修改主题*/}
                    <MuiThemeProvider theme={theme}>
                        <TextField
                            className={classes.margin}
                            label="MuiThemeProvider"
                        />
                    </MuiThemeProvider>
                    {/*使用其他插件的主题，如bootStrap*/}
                    <TextField
                        defaultValue={"TextField"}
                        label={"BootStrap"}
                        InputProps={{
                            disableUnderline:true,
                            classes:{
                                root:classes.bootstrapRoot,
                                input:classes.bootstrapInput,
                            },
                        }}
                        InputLabelProps={{
                            shrink:true,
                            className:classes.bootstrapFormLabel,
                        }}
                    />
                </div>
                {/*带图标的输入框*/}
                <div className={classes.container}>
                    {/*表单的控件Input*/}
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor={"121"}>With</InputLabel>
                        <Input
                            id={"121"}
                            startAdornment={
                                <InputAdornment position={"start"}>
                                    <AccountCircle/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {/*文本域*/}
                    <TextField
                        className={classes.margin}
                        label={"TextField"}
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position={"start"}>
                                    <AccountCircle/>
                                </InputAdornment>
                            )
                        }}
                    />
                    {/*网格模式的*/}
                    <div className={classes.margin}>
                        <Grid container spacing={8} alignContent={"flex-end"}>
                            <Grid item>
                                <AccountCircle/>
                            </Grid>
                            <Grid item>
                                <TextField
                                    label={"with Grid"}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(TextFields);



