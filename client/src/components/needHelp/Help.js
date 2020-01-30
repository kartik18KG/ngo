import React,{Component} from "react";
import HelpForm from './helpForm'
import {needHelp} from '../../store/actions/helpAction'
import {connect} from 'react-redux'

class Help extends Component {
    render(){
        return(
            <div className="container">
                <h2 className="text-center text-success">
                    Help
                </h2>
               <HelpForm needHelp={this.props.needHelp}/>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        needHelp: data =>dispatch(needHelp(data))
    }
}

export default connect(null,mapDispatchToProps)(Help)