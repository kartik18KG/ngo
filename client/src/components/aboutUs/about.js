import React, {Component} from 'react'
import {connect} from 'react-redux'
import AboutContent from './aboutContent'

class About extends Component{
    render(){
        return(
            <div className="container">
               <AboutContent data={this.props.data} />
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        data:state.about.data
    }
}

export default connect(mapStateToProps)(About)