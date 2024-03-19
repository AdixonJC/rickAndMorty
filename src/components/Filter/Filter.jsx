import React, { useEffect, useState } from "react";
import "./Filter.css";
import "./Radio.css";
import "./Select.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCharacters,
  setFilterValue,
} from "../../store/slices/characterSlices/characterSlice";
import { getAllLocations } from "../../store/slices/locationsSlice/locationsSlice";
import { species } from "../../services/schemes/species.scheme";
const Filter = () => {
  const dispatch = useDispatch();

  const [alive,setAlive] = useState(false)
  const [dead,setDead] = useState(false)
  const [unknown, setUnknown] = useState(false);


  const { filterValue } = useSelector(({ characters }) => characters);
  const handleFilterValue = (e) => {
    const textValue = e.target.value;
    dispatch(setFilterValue({ ...filterValue, name: textValue }));
  };

  const handleRadioChange = (e) => {
    const { name, checked, value } = e.target;
    dispatch(setFilterValue({ ...filterValue, status: value }));
    setAlive(value === "alive")
    setDead(value === "dead")
    setUnknown(value === "unknown")
  };

  const handleSpeciesValue = (e) => {
    const speciesName = e.target.value;
    dispatch(setFilterValue({ ...filterValue, species: speciesName }));
  };

  useEffect(() => {
    dispatch(getAllLocations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCharacters(undefined, filterValue));
  }, [filterValue, dispatch]);

  const { locations } = useSelector(({ locations }) => locations);


  return (
    <div className="input__container">
      <div className="search__container">
        <label htmlFor="search">
          <span className="icon-search"></span>
        </label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Character Name"
          onChange={handleFilterValue}
        />
      </div>
      <div className="select__container">
        <select onChange={handleSpeciesValue} name="select" id="select">
          <option>Species</option>
          {species.map((species) => (
            <option key={species.id} value={species.name}>
              {species.name}
            </option>
          ))}
        </select>
      </div>
      <div className="div__radio__input--container">
        <div className="label__container">
          <label htmlFor="Alive" className={`alive ${alive ? "aliveActive" : ""}`}>
            Alive
          </label>
          <label htmlFor="Dead" className={`dead ${dead ? "deadActive" : ""}`}>Dead</label>
          <label htmlFor="unknown" className={`unknown ${unknown ? "unknownActive" : ""}`}>Unknown</label>
        </div>
        <div className="radio__input">
          <input
            onChange={handleRadioChange}
            type="radio"
            name="status"
            id="Alive"
            value={"alive"}
            className="input green"
          />
          <input
            onChange={handleRadioChange}
            type="radio"
            name="status"
            id="Dead"
            value={"dead"}
            className="input red"
          />
          <input
            onChange={handleRadioChange}
            type="radio"
            name="status"
            id="unknown"
            value={"unknown"}
            className="input gray"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
