import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../components/atoms/Button";

// style
const StyledSingleJokePage = styled.main`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .bg-text {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50;
    left: 27%;
    color: #91919155;
    width: 90vh;
    height: 2rem;
    z-index: 0;
    opacity: 0.2;
    h2 {
      font-size: 20rem;
    }
  }
  .select-joke-container {
    z-index: 5;
    height: 30vh;
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    select {
      width: 20rem;
      height: 2.5rem;
      border-radius: 0.5rem;
      padding-left: 1rem;
      background-color: rgba(255, 255, 255, 0.3);
      color: white;
      option {
        color: black;
      }
    }
  }
  .single-joke {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 1rem 0;
    height: 30%;
    h4,
    h5 {
      margin: 1rem;
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
  .random-joke-container {
    height: 30vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .random-joke-punchline {
    height: 30vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SingleJokePage = () => {
  // hooks
  // state
  const [jokes, setJokes] = useState([]);
  const [random, setRandom] = useState([]);
  const [allData, setAllData] = useState([]);
  const [selectValue, setSelectValue] = useState();
  const [j, setJ] = useState([]);
  const [p, setP] = useState([]);

  // ref
  const selectRef = useRef(true);

  // side effects
  useEffect(() => {
    axios
      .get("https://joke-backend-2.herokuapp.com/api/jokes")
      .then((res) => {
        setAllData(res.data);
        setJokes(res.data);
        setJ(res.data);
        setP(res.data);
      })
      .catch((err) => console.log("Error getting data " + err));
  }, []);

  // custom functions
  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  // random joke
  const randomJoke = async () => {
    let joke = jokes[Math.floor(Math.random() * jokes.length)];
    setRandom(joke);
  };

  // random joke and punchline
  const randomJokePunchline = async () => {
    let rJoke = jokes[Math.floor(Math.random() * jokes.length)];
    let rPunchline = jokes[Math.floor(Math.random() * jokes.length)];

    setJ(rJoke);
    setP(rPunchline);
  };

  return (
    <StyledSingleJokePage>
      <div className="select-joke-container">
        <select
          ref={selectRef}
          name="jokes"
          id="jokes"
          value={selectValue}
          onChange={(e) => handleChange(e)}
        >
          <option>Select joke ID </option>

          {allData.map((joke) => (
            <option key={joke._id}>{joke.id}</option>
          ))}
        </select>

        {allData.map((item) => {
          return (
            item.id === parseInt(selectValue) && (
              <div className="single-joke" key={item._id}>
                <h4>{item.joke}</h4>
                <h5>{item.punchline}</h5>
              </div>
            )
          );
        })}
      </div>

      <div className="container random-joke-container">
        <Button
          action={randomJoke}
          text="Show me a random joke"
          type="submit"
        />

        <div className=" container single-joke">
          <h4>{random.joke}</h4>
          <h5>{random.punchline}</h5>
        </div>
      </div>

      <div className="container random-joke-punchline">
        <Button
          action={randomJokePunchline}
          text="Random joke & punchline"
          type="submit"
        />
        <div className="single-joke">
          <h4>{j.joke}</h4>
          <h5>{p.punchline}</h5>
        </div>
      </div>
    </StyledSingleJokePage>
  );
};

export default SingleJokePage;
