import { markWordieGuess } from "./utils/markWordieGuess";

interface MarkObject {
  guess: string;
  mark: { [key: number]: string };
}

interface MarkingTilesProps {
  guess: string;
  word: string;
}

export default function MarkingTiles(props: MarkingTilesProps): JSX.Element {
  const markedGuess = markWordieGuess(props.guess, props.word);

  return (
    <>
      <div className="letters">
        <div className={"letters--element " + markedGuess.mark[0]}>
          <h1>{props.guess[0]}</h1>
        </div>
        <div className={"letters--element " + markedGuess.mark[1]}>
          <h1>{props.guess[1]}</h1>
        </div>
        <div className={"letters--element " + markedGuess.mark[2]}>
          <h1>{props.guess[2]}</h1>
        </div>
        <div className={"letters--element " + markedGuess.mark[3]}>
          <h1>{props.guess[3]}</h1>
        </div>
        <div className={"letters--element " + markedGuess.mark[4]}>
          <h1>{props.guess[4]}</h1>
        </div>
      </div>
    </>
  );
}
