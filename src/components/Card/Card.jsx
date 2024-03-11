import React, { useEffect } from "react";
import "./card.css"
import useFetchOrigin from "../../services/customHooks/useFetchEpisode";
import { statusConditioal } from "../../services/utils/commonFunctions/statusConditional";
const Card = ({
  image,
  name,
  location,
  status,
  episodes,
  createdAt,
  gender,
  species,
  origin,
  url,
}) => {

    const {episode} = useFetchOrigin(url);

    const statusStyles = {
        background:statusConditioal(status),
        boxShadow: `0 0 10px 0px ${statusConditioal(status)} `
    }

  return (
    <div className="card__container">
      <div className="image__container">
        <img src={image} alt="" />
      </div>
      <div className="info__container">
        <div>
          <h3>{name}</h3>
          <h6>Origin: {origin}</h6>
          <span>
            <div className="icon" style={statusStyles}></div>
            {status} - {species} - {gender}
          </span>
        </div>
        <div>
          <h6>Last Known location:</h6>
          <h4>{location}</h4>
        </div>
        <div>
          <h6>First Seen In</h6>
          <h4>{episode?.name}</h4>
        </div>
        <div>
          <p><b>Created: {createdAt}</b></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
