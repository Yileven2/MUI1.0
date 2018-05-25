import  React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

const styles=theme=>({
    progress:{
        margin:theme.spacing.unit*2,
    }
});

class Progress extends Component{
    render(){
        const {classes}=this.props;
        return (
            <div>
                <CircularProgress className={classes.progress} />
                <CircularProgress className={classes.progress} size={50}/>
                <CircularProgress className={classes.progress} color={"secondary"}/>
                <CircularProgress className={classes.progress} style={{color:purple[500]}} thickness={7}/>
            </div>
        );
    }
}
Progress.PropTypes={
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Progress);

/*
* CircularProgress的属性和方法：
* color         默认是primary，还可以是secondary和inherit
* size          默认是40大小，代表圆圈大小
* thickness     默认是3.6，代表圆圈厚度
* value         默认是0，进度指示器，0-100之间
* variant       默认是indeterminate，还可以是determinate，static，代表进度指示器的字体
* */



