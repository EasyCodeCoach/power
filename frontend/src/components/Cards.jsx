import React from "react";
import Card from "./Card";
function Cards() {
  return (
    <div>
      <div className="row container mt-4">
        <div className="col-sm">
          <Card />
        </div>
        <div className="col-sm">
          <Card />
        </div>
        <div className="col-sm">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Cards;
