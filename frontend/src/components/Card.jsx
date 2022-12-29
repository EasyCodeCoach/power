import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Card(props) {
  async function handleDelete(id) {
    await axios.delete(`http://localhost:8000/api/delete/user/${id}`);
    window.location.reload();
  }
  return (
    <div>
      <div class="card" style={{ width: "18rem", marginTop: "10px" }}>
        <div class="card-body">
          <h5 class="card-title">{props.user.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{props.user.age}</li>
          <li class="list-group-item">{props.user.gender}</li>
          <li class="list-group-item">{props.user.phone}</li>
        </ul>
        <div class="card-body">
          <button
            className="btn btn-danger mx-4"
            onClick={() => handleDelete(props.user._id)}
          >
            Delete
          </button>
          <Link to={`/${props.user._id}`} className="btn btn-info mx-4">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
