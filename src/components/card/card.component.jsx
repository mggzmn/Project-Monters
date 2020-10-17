import React from "react";
import "./card.styles.css";
export const Card = ({ monster:{name,id,email} }) => {
  return (
    <div className="card-container">
        <img alt="name" src={`https://robohash.org/${id}?set=set2&size=150x150`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
