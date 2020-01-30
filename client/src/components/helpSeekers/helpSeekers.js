// import React from "react";
// import { connect } from "react-redux";
// import { compose } from "redux";
// import { firestoreConnect } from "react-redux-firebase";

// const helpSeekers = props => {
//   const { Needy } = props;
//   console.log(Needy);
//   return (
//     <div className="container">
//       {Needy &&
//         Needy.map(teacher => {
//           return <div>{teacher.name}</div>;
//         })}
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     Needy: state.firestore.ordered
//   };
// };

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: "Needy" }])
// )(helpSeekers);
////This code aint working

import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class helpSeekers extends Component {
  render() {
    const { Needy } = this.props;
    return (
      <div className="container-lg">
        <div class="row">
          {Needy &&
            Needy.map(teacher => {
              if (teacher.approved === true) {
                return (
                  <div className="col-sm-4 p-3">
                    <div className="card " style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        height="300px"
                        width="250px"
                        src={teacher.teacherPictureUrl}
                        alt="Card image cap"
                      ></img>
                      <hr />
                      <p className="card-text p-1">
                        <strong>Name</strong>: {teacher.name}
                      </p>

                      <p className="card-text p-1">
                        <strong>School Name</strong>: {teacher.school}
                      </p>

                      <p className="card-text p-1">
                        <strong>Subject</strong>: {teacher.subject}
                      </p>
                    </div>
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Needy" }])
)(helpSeekers);
