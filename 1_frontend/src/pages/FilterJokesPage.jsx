import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Input from "../components/atoms/Input";

// style
const StyledFilterJokesPage = styled.main`
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .bg-text {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 54%;
    left: 45%;
    color: #91919189;
    height: 2rem;
    z-index: 1;
    opacity: 0.5;
    h2 {
      font-size: 20rem;
    }

    // 720
    @media screen and (max-width: 1366px) {
      top: 47%;
    }

    //tablet
    @media screen and (max-width: 811px) {
      left: 34%;
      h2 {
        font-size: 30rem;
      }
    }

    // mobile
    @media screen and (max-width: 415px) {
      left: 19%;
    }
  }

  .label {
    color: #840753;
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }
  .all-jokes-container {
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 4;

    // 720
    @media screen and (max-width: 1366px) {
      width: 70%;
    }
    .single-joke {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      margin: 1rem 0;
      h4,
      h5 {
        margin: 0;
      }
      h4 {
        color: orange;
      }

      // tablet
      @media screen and (max-width: 811px) {
        flex-direction: column;
      }

      // mobile
      @media screen and (max-width: 415px) {
        width: 90vw;
        h4,
        h5 {
          font-size: 0.8rem;
          margin: 0.2rem;
        }
      }
    }
  }
`;

const FilterJokesPage = () => {
  // hooks
  // state
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([allData]);

  // side effects
  useEffect(() => {
    axios
      .get("https://joke-backend-2.herokuapp.com/api/jokes")
      .then((res) => {
        setAllData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.log("Error getting data " + err));
  }, []);

  // custom functions
  let i = 1;

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      // return data.joke.search(value) !== -1;
      return data.joke.toLowerCase().includes(value);
    });
    setFilteredData(result);
  };

  return (
    <StyledFilterJokesPage>
      <div className="bg-text">
        <h2>{allData.length}</h2>
      </div>

      <label className="label">Search Jokes:</label>
      <Input
        placeholder="type keywords"
        type="text"
        action={(e) => handleSearch(e)}
      />
      <div className="all-jokes-container">
        {filteredData.map((value) => (
          <div key={i++} className="single-joke">
            <h4>{value.joke}</h4>
            <h5>{value.punchline}</h5>
          </div>
        ))}
      </div>
    </StyledFilterJokesPage>
  );
};

export default FilterJokesPage;
