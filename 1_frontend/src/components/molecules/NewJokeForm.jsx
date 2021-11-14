import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../atoms/Button";

const StyledForm = styled.form`
  width: 40rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  z-index: 4;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  // mobile
  @media screen and (max-width: 415px) {
    width: 90vw;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  label {
    font-size: 1.3rem;
  }
  input {
    margin: 1rem 0;
    height: 2.5rem;
    width: 100%;
    border-radius: 0.4rem;
    border: 1px solid black;
    outline: none;
    padding-left: 1rem;
    background-color: rgba(255, 255, 255, 0.7);
    outline: none;
    ::placeholder {
      color: #535353;
    }
  }

  button {
    height: 2rem;
    width: 14rem;
    margin: 0 auto;
    margin-top: 3rem;
    cursor: pointer;
  }
`;

const NewJokeForm = () => {
  // hooks
  // state
  const [id, setId] = useState(0);
  const [joke, setJoke] = useState("");
  const [punchline, setPunchline] = useState("");

  // side effect
  useEffect(() => {
    setId(Math.floor(Math.random() * 99));
  }, []);

  // custom functions

  const JOKES_ENDPOINT = "https://joke-backend-2.herokuapp.com/api/jokes";

  // sending data to DB
  const postJoke = async (e) => {
    e.preventDefault();

    let newJoke = {
      id: id,
      joke: joke,
      punchline: punchline,
    };

    await axios
      .post(JOKES_ENDPOINT, newJoke)
      .then((res) => {
        setJoke(joke);
        setPunchline(punchline);
        prompt("New joke added");
      })
      .catch((err) => console.log(err));
    setJoke("");
    setPunchline("");
  };

  // profanity filter
  const profanityFilter = (e) => {
    let bannedWords = [
      "ass",
      "butt",
      "bastard",
      "bitch",
      "bullshit",
      "crap",
      "shit",
    ];

    let value = e.target.value.toLowerCase();

    if (bannedWords.includes(value)) {
      prompt("please use another word!");
      setJoke("");
      setPunchline("");
    }
  };

  return (
    <>
      <StyledForm onSubmit={postJoke}>
        <div className="form-field">
          <label>Joke</label>
          <input
            placeholder="fill in your new joke..."
            value={joke}
            onInput={(e) => setJoke(e.target.value)}
            onChange={(e) => profanityFilter(e)}
          />
        </div>
        <div className="form-field">
          <label>Punchline</label>
          <input
            placeholder="fill in your new punchline..."
            value={punchline}
            onInput={(e) => setPunchline(e.target.value)}
            onChange={(e) => profanityFilter(e)}
          />
        </div>

        <Button
          type="submit"
          text="Submit"
          action={() => console.log("data sent")}
        />
      </StyledForm>
    </>
  );
};

export default NewJokeForm;
