import React,{Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


class Option extends Component{
    handleClick=event=>{
        this.props.onSelect(this.props.option,event);
    };
    render(){
        const { children, isSelected} = this.props;
        return (
            <MenuItem
                style={{fontWeight:isSelected?500:400}}
                component="div"
                onClick={this.handleClick}
            >
                {children}
            </MenuItem>
        )
    }
}
class OptionWrapped extends Component{
    constructor(props){
        super(props);
        this.state=props;
    }
    render(){
        const {classes,...other}=this.state;
        return (
            <Select
                optionComponent={Option}
                //没有匹配项时的输出结果（可选）
                noResultsText={<Typography>{'No results found'}</Typography>}
                //渲染一个上下箭头，代表菜单项打开与关闭（可选）
                arrowRenderer={arrowProps => {
                    return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
                }}
                //在右边渲染一个删除图标（可选）
                clearRenderer={() => <ClearIcon/>}
                //函数返回一个自定义的方式来呈现/管理选定的<CustomValue />值（可选，用于设定多选时的chip样式）
                valueComponent={valueProps=>{
                    const {value,children,onRemove}=valueProps;
                    const onDelete=event=>{
                        event.preventDefault();
                        event.stopPropagation();
                        onRemove(value);
                    };
                    if (onRemove){
                        return (
                            <Chip
                                tabIndex={-1}
                                label={children}
                                className={classes.chip}
                                deleteIcon={<CancelIcon onTouchEnd={onDelete}/>}
                                onDelete={onDelete}
                            />
                        )
                    }
                    return <div className="Select-value">{children}</div>
                }}
                {...other}
            />
        )
    }
}
export default OptionWrapped;