import React from "react";

const DeleteButton = props => {
  const { Delete, teacher } = props;
  return (
    <div>
      <button
        className="btn-lg btn-block
                               btn-outline-danger"
        onClick={() => {
          Delete(teacher);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
