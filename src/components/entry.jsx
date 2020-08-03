import React from "react";

function Entry(props){
  return(
    <div className="term">
    <b>  {props.id}</b>
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
            </span>

            <span>{props.name}</span>
          </dt>
          <dd>
            {props.description}
          </dd>
        </div>
  );
}
export default Entry;