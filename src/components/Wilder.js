import React from "react";
import blank_profile from "./../assets/blank_profile.png";
import Skill from "./Skill";

function Wilder(props) {
  return (
    <article className="card">
      <img src={blank_profile} alt={`${props.name} Profile`} />
      <h3>{props.name}</h3>
      <h5>{props.city}</h5>
      <p>Lorem ipsum</p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {props.skills.map((skill) => {
          return (
            <Skill key={skill.id} title={skill.title} votes={skill.votes} />
          );
        })}
      </ul>
    </article>
  );
}

export default Wilder;
