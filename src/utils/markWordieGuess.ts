interface MarkObject {
    guess: string,
    mark: {[key: number]: string}
}
    
export function markWordieGuess(guess: string, hiddenTarget: string): MarkObject{
    hiddenTarget = hiddenTarget.toUpperCase()
    guess = guess.toUpperCase()
    const targetMod = hiddenTarget.split("")
    const markedGuess = {guess: guess, mark: {}}
    const resolutionObject:{[key: number]: string} = {}
    for (let i=0; i<=4; i++){
        const guessedLetter = guess[i]
        const targetLetter =hiddenTarget[i]
        if (guessedLetter === targetLetter){
            resolutionObject[i] = "G"
           targetMod.splice(i,1, "*")
        }else {
            resolutionObject[i] = "XXX"
        }
    }
    for (let i=0; i<=4; i++){
        const guessedLetter = guess[i]
         if (targetMod.includes(guessedLetter) && resolutionObject[i] === "XXX"){
            resolutionObject[i] = "Y"
            const index = targetMod.findIndex((letter) => letter === guessedLetter)
            index !== -1 && targetMod.splice(index, 1, "XXX")
        }else if (resolutionObject[i] === "XXX"){
            resolutionObject[i] = "R"
        }
    }
    markedGuess.mark = resolutionObject
    return markedGuess
}