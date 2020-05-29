import React from "react";
import { Link } from "react-router-dom";

function StyledDiv(props) {
  return (
    <div
      style={{
        color: props.color,
        background: props.background,
        width: props.width,
        margin: "10px auto 10px auto",
        textAlign: "left",
        padding: "15px",
        borderRadius: "7.5px",
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Link to={`/homepages/${props.id}`}>
        <button>Visit page</button>
      </Link>
    </div>
  );
}

export default StyledDiv;
