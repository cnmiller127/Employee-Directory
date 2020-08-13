import React from "react";
import "../style.css";


function EmployeeCard(props) {
   props = props.children;
  return (
    <div className="card m-3" style ={{width: "18rem"}, {display: "inline-block"}} >
      
        <img className = "img" alt={props.name} src={props.img} />
      
      <div className="card-body">
        <ul>
          <h3>
            <strong>Name:</strong> {props.name}
          </h3>
          <p>
            <strong>Postion:</strong> {props.position}
          </p>
          <p>
            <strong>Email: </strong> {props.email}
          </p>
          <p>
            <strong>Office: </strong> {props.office}
          </p>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;