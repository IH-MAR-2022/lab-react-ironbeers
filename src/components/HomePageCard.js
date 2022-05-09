import React from "react";
import { Link } from "react-router-dom";

const HomePageCard = (props) => {
  return (
    <Link to={props.route}>
      <div>
        <img src={props.image} alt="pic" />
        <h2>{props.title}</h2>
        <p>;qwberui;buwqiev;buieqw;vbui;awbdhui;awdhfui;efwae</p>
      </div>
    </Link>
  );
};

export default HomePageCard;
