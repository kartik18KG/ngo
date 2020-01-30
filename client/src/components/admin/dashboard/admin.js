import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Navbar from "../adminNavbar";
import TeacherSummary from "../adminComponents/teacherSummary";
import { deleteTeacher } from "../../../store/actions/adminActions";
import DeleteButton from "../adminComponents/deleteButton";

class adminPanel extends Component {
  render() {
    const { deleteTeacher } = this.props;
    const { Needy } = this.props;

    return (
      <div className="container-lg">
        <div class="row">
          <hr />
          <Navbar />
          {Needy &&
            Needy.map(teacher => {
              if (teacher.approved === true) {
                return (
                  <div>
                    <div className="col-sm-4 p-3">
                      <TeacherSummary teacher={teacher} />
                    </div>
                    <DeleteButton Delete={deleteTeacher} teacher={teacher} />
                  </div>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Needy: state.firestore.ordered.Needy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTeacher: data => dispatch(deleteTeacher(data))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "Needy" }])
)(adminPanel);
