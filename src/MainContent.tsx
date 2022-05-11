import { useState } from "react"

export default function MainContent(): JSX.Element {


const [view, setView] = useState<"setup" | "guess1" | "marking" | "win" >("setup");    

const [word, setWord] = useState<string>("");

const [guess, setGuess] = useState<string>("");

function handleWordChange(event: React.ChangeEvent<HTMLInputElement>){
    setWord(event.target.value)
}

function handleWordSubmit(){
    setView("guess1")
}

function handleGuessChange(event: React.ChangeEvent<HTMLInputElement>){
    setGuess(event.target.value)
}

function handleGuessSubmit(){
    setView("marking")
}

//if word.length > 5 then alert, please enter a five letter word and set word to "" again

    return (
        <>
       {view === "setup" && 
       <section> 
       <div className="hero">
            <h1>Wordie</h1>
            <p>Enter a five letter word</p>
            <input 
            type="text"
            onChange={(e) => handleWordChange(e)}
            />
            <button onClick={handleWordSubmit}>Submit</button>
        </div>
        <div className="instructions">
            <p>Instructions:</p>
            <p>Enter a word for a friend to guess, don't let them see! Once you have entered a word and pressed submit pass the phone to a friend for them to enter a guess.</p>
        </div> 
        </section>}
    { view === "guess1" && 
    <section>
        <div className="hero">
        <h1>Wordie</h1>
            <p>Enter a five letter guess</p>
            <input 
            type="text"
            onChange={(e) => handleGuessChange(e)}
            />
            <button onClick={handleGuessSubmit}>Submit</button>
        </div>
        <div className="instructions">
            <p>Instructions:</p>
            <p>Try and guess the five letter word.</p>
        </div> 
        </section>}
        { view === "marking" && 
    <section>
        <div className="hero">
        <h1>Wordie</h1>
        <div className="letters">
            <div className="letters--element">
                <h1>{guess[0]}</h1>
            </div>
            <div className="letters--element">
                <h1>{guess[1]}</h1>
            </div>
            <div className="letters--element">
                <h1>{guess[2]}</h1>
            </div>
            <div className="letters--element">
                <h1>{guess[3]}</h1>
            </div>
            <div className="letters--element">
                <h1>{guess[4]}</h1>
            </div>
        </div>
            <p>Enter another guess</p>
            <input 
            type="text"
            
            />
            <button>Submit</button>
        </div>
        <div className="instructions">
            <p>Instructions:</p>
            <p>Green</p>
            <p>Correct letter, correct position</p>
            < br/>
            <p>Orange</p>
            <p>Correct letter, wrong position</p>
            < br/>
            <p>Red</p>
            <p>Wrong letter, wrong position</p>
        </div> 
        </section>}
        { view === "win" && 
    <section>
        <div className="hero">
        <h1>Wordie</h1>
        <div className="letters">
            <div className="letters--element">
                <h1>{guess[0]}</h1>
            </div>
            <div className="letters--element">
                <h1>{guess[1]}</h1>
            </div>
            <div className="letters--element">
                <h1>{guess[2]}</h1>
            </div>
            <div className="letters--element">
                <h1>{guess[3]}</h1>
            </div>
            <div className="letters--element">
                <h1>{guess[4]}</h1>
            </div>
        </div>
            <p>Congratulations!</p>
            <button>Play Again</button>
        </div>
        <div className="instructions">
            <p>Created by:</p>
            <p>Laura Jamieson</p>  
        </div> 
        </section>}
        </>
    )
}