import React,{Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import green from "@material-ui/core/colors/green";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';

const styles=theme=>({
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
    size: {
        width: 20,
        height: 20,
    },
    sizeIcon: {
        fontSize: 10,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});


class CheckBoxes extends Component{
    state={
        checkedA:true,
        checkedB:true,
        checkedC:true,
        checkedG: true,
        selectedValue: 'a',
        gilad: true,
        jason: false,
        antoine: true,
    };
    handleChange=name=>event=>{
        this.setState({[name]:event.target.checked})
    };
    handleChange2 = event => {
        this.setState({ value: event.target.value });
    };
    handleChange3 = event => {
        this.setState({ selectedValue: event.target.value });
    };
    render(){
        const {classes}= this.props;
        return (
            <div>
                {/*光图标*/}
                <div>
                    <Checkbox/>
                    <Checkbox
                        checked={this.state.checkedA}
                        onChange={this.handleChange('checkedA')}
                        value={"checkedA"}
                        color={"primary"}
                    />
                    <Checkbox
                        disabled
                    />
                    <Checkbox
                        indeterminate
                    />
                </div>
                <br/>
                {/*图标带标签文本*/}
                <div>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.checkedA}
                                    onChange={this.handleChange("checkedA")}
                                    value={"checkedA"}
                                />
                            }
                            label={"label"}
                        />
                        <FormControlLabel
                            //在内部的control写checkBox的样式，在label中写标签
                            control={<Checkbox value={"CheckedC"}/>}
                            label={"Uncontrolled"}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.checkedF}
                                    onChange={this.handleChange('checkedF')}
                                    value="checkedF"
                                    indeterminate
                                />
                            }
                            label={"Indeterminate"}
                        />
                        {/*特殊图标checkbox*/}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<FavoriteBorder/>}
                                    checkedIcon={<Favorite/>}
                                    value={"checkedH"}
                                />
                            }
                            label={"自定义checkbox图标"}
                        />
                        {/*自定义checkbox大小*/}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={classes.size}
                                    icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon}/>}
                                    checkedIcon={<CheckBoxIcon className={classes.sizeIcon}/>}
                                    value={"checkedI"}
                                />
                            }
                            label={"自定义checkedbox大小"}
                        />
                    </FormGroup>
                </div>
                {/*单选按钮*/}
                <div className={classes.root}>
                    {/*包装在一起的单选框*/}
                    <FormControl component={"fieldset"} required className={classes.formControl}>
                        <FormLabel component={"legend"}>
                            Gender
                        </FormLabel>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange2}
                        >
                            <FormControlLabel value={"male"} control={<Radio color={"primary"}/>} label={"male"}/>
                            <FormControlLabel value={"female"} control={<Radio color={"primary"}/>} label={"female"}/>
                            <FormControlLabel value={"other"} control={<Radio color={"primary"}/>} label={"other"}/>
                            <FormControlLabel
                                value={"disabled"}
                                disabled
                                control={<Radio/>}
                                label={"disabled option"}
                            />
                        </RadioGroup>
                    </FormControl>
                    {/*不使用表单控件包装的单选框*/}
                    <div>
                        <Radio
                            checked={this.state.selectedValue==="a"}
                            onChange={this.handleChange3}
                            value={"a"}
                            name={"radio-button-demo"}
                            aria-label={"A"}
                        />
                        <Radio
                            checked={this.state.selectedValue==="b"}
                            onChange={this.handleChange3}
                            value={"b"}
                            name={"radio-button-demo"}
                            aria-label={"B"}
                            //特殊样式
                            classes={{
                                root:classes.root,
                                checked:classes.checked,
                            }}
                        />
                        <Radio
                            checked={this.state.selectedValue==="c"}
                            onChange={this.handleChange3}
                            value={"c"}
                            //指定颜色
                            color={"primary"}
                            name={"radio-button-demo"}
                            aria-label={"C"}
                        />
                        <Radio
                            checked={this.state.selectedValue==="d"}
                            onChange={this.handleChange3}
                            value={"d"}
                            //指定涟漪大小
                            className={classes.size}
                            icon={<RadioButtonUncheckedIcon className={classes.sizeIcon}/>}
                            checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon}/>}
                            name={"radio-button-demo"}
                            aria-label={"D"}
                        />
                    </div>
                </div>
                {/*开关按钮*/}
                <div>
                    <Switch
                        checked={this.state.checkedA}
                        onChange={this.handleChange("checkedA")}
                        value={"checkedA"}
                    />
                    <Switch
                        checked={this.state.checkedB}
                        onChange={this.handleChange("checkedB")}
                        value={"checkedB"}
                        color={"primary"}
                    />
                    <Switch value="checkedC" />
                    <Switch disabled value="checkedD" />
                    <Switch disabled checked value="checkedE" />
                    <Switch defaultChecked value="checkedF" color="default" />
                </div>
                {/*开关按钮带标签*/}
                <div>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.checkedA}
                                    onChange={this.handleChange("checkedA")}
                                    value={"checkedA"}
                                />
                            }
                            label={"普通的"}
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.checkedB}
                                    onChange={this.handleChange("checkedB")}
                                    value={"checkedB"}
                                    color={"primary"}
                                />
                            }
                            label={"颜色为Primary"}
                        />
                        <FormControlLabel
                            control={
                                <Switch value={"checkedC"}/>
                            }
                            label={"Uncontrolled"}
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Switch value={"checkedD"}/>
                            }
                            label={"disabled"}
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Switch checked value="checkedE" />
                            }
                            label={"disabled"}
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.checkedF}
                                    onChange={this.handleChange('checkedF')}
                                    value="checkedF"
                                    classes={{
                                        switchBase: classes.switchBase,
                                        checked: classes.checked,
                                        bar: classes.bar,
                                    }}
                                />
                            }
                            label="自定义颜色的"
                        />
                    </FormGroup>

                </div>
                {/*复选框*/}
                <div>
                    <FormControl component={"fieldset"}>
                        <FormLabel component={"legend"}>Assign responsibility</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.gilad}
                                        onChange={this.handleChange("gilad")}
                                        value={"gilad"}
                                    />
                                }
                                label={"GiladGray"}
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.jason}
                                        onChange={this.handleChange('jason')}
                                        value="jason"
                                    />
                                }
                                label="Jason Killian"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.antoine}
                                        onChange={this.handleChange('antoine')}
                                        value="antoine"
                                    />
                                }
                                label="Antoine Llorca"
                            />
                        </FormGroup>
                    </FormControl>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(CheckBoxes);

