import React, {Component} from 'react'
import {connect } from 'react-redux'
import HomeContent from './homeContent'

class Home extends Component {
    render(){
        return(
            <div className="container ">
                <div className="jumbotron text-center ml-5 mr-5">
                    <div className="container">
                        <h1>Welcome To My Website</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat.</p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div>
                   <HomeContent data={this.props.data}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps= state=>{
    return{
        data: state.home.data
    }
}

export default connect(mapStateToProps)(Home)