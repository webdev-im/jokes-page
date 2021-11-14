import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../components/atoms/Button";

const StyledAllJokesPage = styled.main`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .button-container {
    height: 20vh;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

    // 720
    @media screen and (max-width: 1366px) {
      height: 10vh;
    }
  }
  .all-jokes-container {
    margin: 0 auto;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 4;
    width: 55%;

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
        margin: 0.2rem;
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
        }
      }
    }

    // 720
    @media screen and (max-width: 1366px) {
      height: 70vh;
    }
  }
`;

const AllJokesPage = () => {
  // hooks
  // state

  const [jokes, setJokes] = useState([]);

  // side effects
  const listAllJokes = () => {
    axios
      .get("https://joke-backend-2.herokuapp.com/api/jokes")
      .then((res) => setJokes(res.data));
  };

  return (
    <StyledAllJokesPage>
      <div className="button-container">
        <Button action={listAllJokes} text="Show me all jokes" type="submit" />
      </div>
      <div className="all-jokes-container">
        {jokes.map((value) => (
          <div key={value._id} className="single-joke">
            <h4>{value.joke}</h4>
            <h5>{value.punchline}</h5>
          </div>
        ))}
      </div>
    </StyledAllJokesPage>
  );
};

export default AllJokesPage;
