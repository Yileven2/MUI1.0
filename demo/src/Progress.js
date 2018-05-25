import  React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles=theme=>({
    root:{
        marginBottom:theme.spacing.unit*2,
    },
    progress:{
        margin:theme.spacing.unit*2,
    }
});

class Progress extends Component{
    state={
        completed:0,
    };
    componentDidMount(){
        this.timer=setInterval(this.progress,500);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    timer=null;
    progress=()=>{
        const {completed} = this.state;
        if (completed===100){
            this.setState({completed:0});
        } else {
            const diff = Math.random()*10;
            this.setState({completed:Math.min(completed+diff,100)});
        }
    };
    render(){
        const {classes}=this.props;
        return (
            <div>
                <div>
                    <CircularProgress className={classes.progress} />
                    <CircularProgress className={classes.progress} size={50}/>
                    <CircularProgress className={classes.progress} color={"secondary"}/>
                    <CircularProgress className={classes.progress} style={{color:purple[500]}} thickness={7}/>
                </div>
                <div className={classes.root}>
                    <LinearProgress />
                    <br />
                    <LinearProgress color="secondary" />
                </div>
                <div className={classes.root}>
                    <LinearProgress variant="determinate" value={this.state.completed} />
                    <br />
                    <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
                </div>
                
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