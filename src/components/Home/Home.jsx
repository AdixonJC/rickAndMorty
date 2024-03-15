import React, { useEffect, useState } from "react";
import {
  getAllCharacters
} from "../../store/slices/characterSlices/characterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import Card from "../Card/Card";
import { formatDateDMY } from "../../services/utils/commonFunctions/formatDateDMY";
import Pagination from "../Pagination/Pagination";
const Home = () => {
  const dispatch = useDispatch();

  
  const { characters, info} = useSelector(({ characters }) => characters);
  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);
  
  return (
    <div>
      <header></header>
      <div className="characters__container">
        {characters.results !== undefined &&
          characters.results.map((character) => {
            return (
              <Card
                key={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                location={character.location.name}
                origin={character.origin.name}
                url={character.episode[0]}
                createdAt={formatDateDMY(character.created)}
              />
            );
          })}

          <footer>
            <Pagination
             totalPages={info.pages}
            />
          </footer>
      </div>
    </div>
  );
};

export default Home;
