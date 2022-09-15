import React from "react";

function Skill(props) {
  return (
    <li>
      {props.title}
      <span className="votes">{props.votes}</span>
    </li>
  );
}

export default Skill;
