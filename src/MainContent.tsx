import { useState } from "react";
import { markWordieGuess } from "./utils/markWordieGuess";
import MarkingTiles from "./MarkingTiles";
import "./styles.css";

interface MarkObject {
  guess: string;
  mark: { [key: number]: string };
}

export default function MainContent(): JSX.Element {
  const [view, setView] = useState<"setup" | "guess1" | "marking" | "win">(
    "setup"
  );

  const [word, setWord] = useState<string>("");

  const [previousGuess, setPreviousGuess] = useState<string>("");

  const [currentGuess, setCurrentGuess] = useState<string>("");

  const [previousMarkedGuess, setPreviousMarkedGuess] = useState<MarkObject>({
    guess: "",
    mark: { 0: "", 1: "", 2: "", 3: "", 4: "" },
  });

  const [markedGuess, setMarkedGuess] = useState<MarkObject>({
    guess: "",
    mark: { 0: "", 1: "", 2: "", 3: "", 4: "" },
  });

  function handleWordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setWord(event.target.value.toUpperCase());
  }

  function handleWordSubmit() {
    if (word.length !== 5){
      alert("Please enter a five letter word")
      setWord("");
    } else {
    setView("guess1");
    }
  }

  function handleGuessChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentGuess((prev) => event.target.value.toUpperCase());
  }

  function handleGuessSubmit() {
    if (currentGuess.length !== 5){
      alert("Please enter a five letter word")
      setCurrentGuess("");
    } else {
    setMarkedGuess(markWordieGuess(currentGuess, word));
    setPreviousGuess(currentGuess);
    if (currentGuess === word) {
      setView("win");
    } else {
      setView("marking");
      setCurrentGuess((prev) => "");
      setPreviousMarkedGuess((prev) => markedGuess);
      setMarkedGuess((prev) => ({
        guess: "",
        mark: { 0: "", 1: "", 2: "", 3: "", 4: "" },
      }));
    }
  }
  }

  function handleRestart() {
    setView("setup");
    setCurrentGuess((prev) => "");
    setPreviousGuess((prev) => "");
    setWord((prev) => "");
    setMarkedGuess((prev) => ({
      guess: "",
      mark: { 0: "", 1: "", 2: "", 3: "", 4: "" },
    }));
    setPreviousMarkedGuess((prev) => ({
      guess: "",
      mark: { 0: "", 1: "", 2: "", 3: "", 4: "" },
    }));
  }

  //if word.length > 5 then alert, please enter a five letter word and set word to "" again

  return (
    <>
      {view === "setup" && (
        <section>
          <div className="hero">
            <h1>Wordie</h1>
            <p>Enter a five letter word</p>
            <input type="text" onChange={(e) => handleWordChange(e)} />
            <button onClick={handleWordSubmit}>Submit</button>
          </div>
          <div className="instructions">
            <p>Instructions:</p>
            <p>
              Enter a word for a friend to guess, don't let them see! Once you
              have entered a word and pressed submit pass the phone to a friend
              for them to enter a guess.
            </p>
          </div>
        </section>
      )}

      {view === "guess1" && (
        <section>
          <div className="hero">
            <h1>Wordie</h1>
            <p>Enter a five letter guess</p>
            <input type="text" onChange={(e) => handleGuessChange(e)} />
            <button onClick={handleGuessSubmit}>Submit</button>
          </div>
          <div className="instructions">
            <p>Instructions:</p>
            <p>Try and guess the five letter word.</p>
          </div>
        </section>
      )}

      {view === "marking" && !previousGuess ? (
        <section>
          <div className="hero">
            <h1>Wordie</h1>
            <MarkingTiles guess={previousGuess} word={word} />
            <p>Enter another guess</p>
            <input
              type="text"
              name="currentGuess"
              value={currentGuess}
              onChange={(e) => handleGuessChange(e)}
            />
            <button onClick={handleGuessSubmit}>Submit</button>
          </div>
          <div className="instructions">
            <p>Instructions:</p>
            <p>Green</p>
            <p>Correct letter, correct position</p>
            <br />
            <p>Orange</p>
            <p>Correct letter, wrong position</p>
            <br />
            <p>Red</p>
            <p>Wrong letter, wrong position</p>
          </div>
        </section>

      ) : view === "marking" && previousGuess ? (
        <section>
          <div className="hero">
            <h1>Wordie</h1>
            <MarkingTiles guess={previousGuess} word={word} />
            <p>Enter another guess</p>
            <input
              type="text"
              name="currentGuess"
              value={currentGuess}
              onChange={(e) => handleGuessChange(e)}
            />
            <button onClick={handleGuessSubmit}>Submit</button>
          </div>
          <div className="instructions">
            <p>Instructions:</p>
            <p>Green</p>
            <p>Correct letter, correct position</p>
            <br />
            <p>Orange</p>
            <p>Correct letter, wrong position</p>
            <br />
            <p>Red</p>
            <p>Wrong letter, wrong position</p>
          </div>
        </section>
      ) : (
        <></>
      )}

      {view === "win" && (
        <section>
          <div className="hero">
            <h1>Wordie</h1>
            <MarkingTiles guess={previousGuess} word={word} />
            <p>Congratulations!</p>
            <button onClick={handleRestart}>Play Again</button>
          </div>
          <div className="instructions">
            <p>Created by:</p>
            <p>Laura Jamieson</p>
          </div>
        </section>
      )}
    </>
  );
}
