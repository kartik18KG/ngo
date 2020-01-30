import React,{Component} from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class UpdateHomePage extends Component{
    render(){
        const {data}= this.props
        console.log(data)
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="header">
                            Header
                        </label>
                        <input type="text" id="header" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="paragraph">
                            Paragraph
                        </label>
                        <textarea id="paragraph" ></textarea>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        data: state.firestore.ordered.HomePage
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:"HomePage"}
    ])
)(UpdateHomePage)