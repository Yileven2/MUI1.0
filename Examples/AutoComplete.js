import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

class Option extends React.Component {
    /**
     * 处理选中菜单项的事件
     * @param event
     */
    handleClick = event => {
        this.props.onSelect(this.props.option, event);
    };
    render() {
        //children:子菜单项，isFocused：查看是否被选中，isSelected：选中后的文本变化，onFocus：是否获得焦点
        const { children, isFocused, isSelected, onFocus } = this.props;
        return (
            <MenuItem
                onFocus={onFocus}
                selected={isFocused}
                onClick={this.handleClick}
                //用于根节点的组件。
                component="div"
                style={{
                    fontWeight: isSelected ? 500 : 400,
                }}
            >
                {children}
            </MenuItem>
        );
    }
}

/**
 * 接收props，并实现选择react
 * @param props
 * @returns {*}
 * @constructor
 */
function SelectWrapped(props) {
    const { classes, ...other } = props;
    return (
        <Select
            //用于呈现选项的react组件
            optionComponent={Option}
            //没有匹配项时的输出结果
            noResultsText={<Typography>{'No results found'}</Typography>}
            //渲染一个上下箭头，代表菜单项打开与关闭
            arrowRenderer={arrowProps => {
                return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
            }}
            //在右边渲染一个删除图标
            clearRenderer={() => <ClearIcon/>}
            //函数返回一个自定义的方式来呈现/管理选定的<CustomValue />值
            valueComponent={valueProps => {
                const { value, children, onRemove } = valueProps;
                const onDelete = event => {
                    event.preventDefault();
                    event.stopPropagation();
                    onRemove(value);
                };
                if (onRemove) {
                    return (
                        <Chip
                            tabIndex={-1}
                            label={children}
                            className={classes.chip}
                            deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
                            onDelete={onDelete}
                        />
                    );
                }
                return <div className="Select-value">{children}</div>;
            }}
            {...other}
        />
    );
}

const ITEM_HEIGHT = 48;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    // We had to use a lot of global selectors in order to style react-select.
    // We are waiting on https://github.com/JedWatson/react-select/issues/1679
    // to provide a much better implementation.
    // Also, we had to reset the default style injected by the library.
    '@global': {
        '.Select-control': {
            display: 'flex',
            alignItems: 'center',
            border: 0,
            height: 'auto',
            background: 'transparent',
            '&:hover': {
                boxShadow: 'none',
            },
        },
        '.Select-multi-value-wrapper': {
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
        },
        '.Select--multi .Select-input': {
            margin: 0,
        },
        '.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
            padding: 0,
        },
        '.Select-noresults': {
            padding: theme.spacing.unit * 2,
        },
        '.Select-input': {
            display: 'inline-flex !important',
            padding: 0,
            height: 'auto',
        },
        '.Select-input input': {
            background: 'transparent',
            border: 0,
            padding: 0,
            cursor: 'default',
            display: 'inline-block',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            margin: 0,
            outline: 0,
        },
        '.Select-placeholder, .Select--single .Select-value': {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.pxToRem(16),
            padding: 0,
        },
        '.Select-placeholder': {
            opacity: 0.42,
            color: theme.palette.common.black,
        },
        '.Select-menu-outer': {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[2],
            position: 'absolute',
            left: 0,
            top: `calc(100% + ${theme.spacing.unit}px)`,
            width: '100%',
            zIndex: 2,
            maxHeight: ITEM_HEIGHT * 4.5,
        },
        '.Select.is-focused:not(.is-open) > .Select-control': {
            boxShadow: 'none',
        },
        '.Select-menu': {
            maxHeight: ITEM_HEIGHT * 4.5,
            overflowY: 'auto',
        },
        '.Select-menu div': {
            boxSizing: 'content-box',
        },
        '.Select-arrow-zone, .Select-clear-zone': {
            color: theme.palette.action.active,
            cursor: 'pointer',
            height: 21,
            width: 21,
            zIndex: 1,
        },
        // Only for screen readers. We can't use display none.
        '.Select-aria-only': {
            position: 'absolute',
            overflow: 'hidden',
            clip: 'rect(0 0 0 0)',
            height: 1,
            width: 1,
            margin: -1,
        },
    },
});

class IntegrationReactSelect extends React.Component {
    state = {
        single: null,
        multi: null,
        multiLabel: null,
    };
    //选中后将内容放到输入框
    handleChange = name => value => {
        this.setState({
            [name]: value,
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Input
                    fullWidth
                    //用于当前输入框的组件。可以是使用DOM元素或组件的字符串。
                    inputComponent={SelectWrapped}
                    value={this.state.single}
                    onChange={this.handleChange('single')}
                    id="react-select-single"
                    // 应用于输入元素的属性
                    inputProps={{
                        classes,
                        name: 'react-select-single',
                        instanceId: 'react-select-single',
                        simpleValue: true,
                        options: suggestions,
                    }}
                />
                <Input
                    fullWidth
                    inputComponent={SelectWrapped}
                    value={this.state.multi}
                    onChange={this.handleChange('multi')}
                    placeholder="Select multiple countries"
                    name="react-select-chip"
                    inputProps={{
                        classes,
                        multi: true,//表示可以是多个
                        instanceId: 'react-select-chip',
                        id: 'react-select-chip',
                        simpleValue: true,
                        options: suggestions,
                    }}
                />
                <TextField
                    fullWidth
                    value={this.state.multiLabel}
                    onChange={this.handleChange('multiLabel')}
                    placeholder="Select multiple countries"
                    name="react-select-chip-label"
                    label="With label"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputComponent: SelectWrapped,
                        inputProps: {
                            classes,
                            multi: true,
                            instanceId: 'react-select-chip-label',
                            id: 'react-select-chip-label',
                            simpleValue: true,
                            options: suggestions,
                        },
                    }}
                />
            </div>
        );
    }
}

IntegrationReactSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationReactSelect);