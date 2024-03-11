import React, { useEffect, useState } from "react";
import {
  getAllCharacters,
  getAllPages,
} from "../../store/slices/characterSlices/characterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import Card from "../Card/Card";
import { formatDateDMY } from "../../services/utils/commonFunctions/formatDateDMY";
import Pagination from "../Pagination/Pagination";
const Home = () => {
  const [nextPage, setNextPage] = useState(1)
  const dispatch = useDispatch();

  const handleNextPage = () => {
    setNextPage(nextPage + 1)
  }
  useEffect(() => {
    dispatch(getAllCharacters(nextPage));
    dispatch(getAllPages());
  }, [dispatch,nextPage]);

  const { characters, info } = useSelector(({ characters }) => characters);

  console.log({ info });

  const resultString = info && info.next

  console.log({resultString});

  const numberPage = resultString && +resultString[resultString.length -1]

  console.log({numberPage});

  console.log(characters.results);
  return (
    <div>
      <header></header>
      <div className="characters__container">
        {characters.results !== undefined &&
          characters.results.map((character) => {
            return (
              <Card
                key={character.name}
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
             currentPage={nextPage}
             nextPage={handleNextPage}
            />
          </footer>
      </div>
    </div>
  );
};

export default Home;
