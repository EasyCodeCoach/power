import React from "react";

function Card() {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Joshua kim</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Phone:</li>
          <li class="list-group-item">Age:</li>
          <li class="list-group-item">Gender:</li>
        </ul>
        <div class="btn-group">
          <button className="btn btn-primary">Delete</button>
          <button className="btn btn-info">Update</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
