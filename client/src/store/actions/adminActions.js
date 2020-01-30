export const approve = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(data);
    const firestore = getFirestore();
    const approved = true;
    firestore
      .collection("Needy")
      .doc(data.id)
      .update({
        approved: approved
      })
      .then(() => {
        dispatch({ type: "SUCCESSFULLY_APPROVED" });
      })
      .catch(err => {
        dispatch({ type: "ERROR_APPROVING", err });
      });
  };
};

export const disapprove = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(data);
    const firestore = getFirestore();
    firestore
      .collection("Needy")
      .doc(data.id)
      .delete()
      .then(() => {
        dispatch({ type: "SUCCESSFULLY_DISAPPROVED" });
      })
      .catch(err => {
        dispatch({ type: "ERROR_DISAPPROVING", err });
      });
  };
};

export const subscribe = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(data);
    const firestore = getFirestore();
    firestore
      .collection("SubList")
      .add({ ...data })
      .then(() => {
        console.log("added subscriber");
        dispatch({ type: "SUBSCRIBE_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SUBSCRIBE_ERROR", err });
      });
  };
};

// export const subscribe = data => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     console.log(data);
//     const firestore = getFirestore();
//     firestore
//       .collection("subData")
//       .add(...data)
//       .then(
//         dispatch({
//           type: "SUBSCRIBE_SUCCESS",
//           data: data
//         })
//       )
//       .catch(err => {
//         dispatch({
//           type: "SUBSCRIBE_ERROR",
//           err: err
//         });
//       });
//   };
// };

export const deleteTeacher = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(data);
    const firestore = getFirestore();
    firestore
      .collection("Needy")
      .doc(data.id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "DELETE_ERROR", err });
      });
  };
};
