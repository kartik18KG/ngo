import React,{Component} from 'react'
import {needHelp} from '../../store/actions/helpAction'
import {connect} from 'react-redux'

class HelpForm extends Component{
    state={
        selectedFile:null
    }
    handleChange=e=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.state)
        this.props.needHelp(this.state)
    }
    fileSelectedHandler=e=>{
        this.setState({
            selectedFile:e.target.files[0]
        })
    }
    render(){
        const {taskState} = this.props
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h4 className="text-success mt-4 mb-4">Teacher Details</h4>
                    
                    <div className="form-group float-left">
                        <label htmlFor="name">
                           Full Name
                        </label>
                        <input type="text" id="name" onChange={this.handleChange} className="form-control"/>
                    </div>
                    
                    <div className="form-group float-right">
                        <label htmlFor="teacherEmail">
                           Email
                        </label>
                        <input type="email" id="teacherEmail" onChange={this.handleChange}  className="form-control"/>
                    </div>
                    
                    <div className="clearfix"></div>
                    
                    <div className="form-group float-left">
                        <label htmlFor="subject">
                            Subject
                        </label>
                        <input type="text" id="subject" onChange={this.handleChange}  className="form-control"/>    
                    </div>
                    
                    <div className="form-group float-right">
                        <label htmlFor="school">
                            School Name
                        </label>
                        <input type="text" id="school" onChange={this.handleChange}  className="form-control"/>
                    </div>
                    <div className="clearfix"></div>
                    
                    <div className="form-group float-left">
                        <label htmlFor="phoneNumber">
                           Phone Number:
                        </label>
                        <input type="number" onChange={this.handleChange}  id="phoneNumber" className="form-control"/>
                    </div>

                    <div className="form-group float-right">
                        <label htmlFor="picture">
                           Your Picture
                        </label>
                        <input type="file" id="picture" onChange={this.fileSelectedHandler} className="form-control"/>
                    </div>
                    
                    <div className="clearfix"></div>
                    
                    <h4 className="text-success mt-4 mb-4">Student Details</h4>
                    
                    <div className="form-group float-left">
                        <label htmlFor="studentName">
                           Full Name
                        </label>
                        <input type="text" onChange={this.handleChange}  id="studentName" 
                        className="form-control"/>
                    </div>
                    
                    <div className="form-group ">
                        <label htmlFor="years">
                           In association with teacher for how many years
                        </label>
                        <input type="number" onChange={this.handleChange}  id="years" className="form-control"/>
                    </div>    
                    <button className="float-right btn btn-success mb-5">
                        Take Help
                    </button>
                </form>
                <div>
                    {
                        taskState != null ? (
                            <div>
                                {taskState}
                            </div>
                        ): null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps= state=>{
    return{
        taskState: state.help.taskState
    }
}

export default connect(mapStateToProps)(HelpForm)