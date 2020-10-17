import React from "react";
import { Card } from "../card/card.component";
import "./card-list.style.css";
export const CardList = ({ monsters }) => ( monsters.length>0 ?  <div className="card-list">
      {monsters.map(monster => (<Card key={monster.id} monster={monster} />))}
    </div>: <h1 className="not-found"> ●︿● data does not match</h1>
  );
  

