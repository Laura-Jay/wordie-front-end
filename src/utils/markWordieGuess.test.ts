import { markWordieGuess } from "./markWordieGuess";

test("returns all green when word is correct", () => {
  expect(markWordieGuess("PLATE", "PLATE")).toStrictEqual({
    guess: "PLATE",
    mark: { 0: "G", 1: "G", 2: "G", 3: "G", 4: "G" },
  });
  expect(markWordieGuess("SCORE", "SCORE")).toStrictEqual({
    guess: "SCORE",
    mark: { 0: "G", 1: "G", 2: "G", 3: "G", 4: "G" },
  });
});

test("return all red when no matches between guess and target", () => {
  expect(markWordieGuess("PUPPY", "SCORE")).toStrictEqual({
    guess: "PUPPY",
    mark: { 0: "R", 1: "R", 2: "R", 3: "R", 4: "R" },
  });
});

test("Words with the right letter in the wrong place are assigned yellow", () => {
  expect(markWordieGuess("TIMES", "SLACK")).toStrictEqual({
    guess: "TIMES",
    mark: { 0: "R", 1: "R", 2: "R", 3: "R", 4: "Y" },
  });
  expect(markWordieGuess("LEACH", "SLEEP")).toStrictEqual({
    guess: "LEACH",
    mark: { 0: "Y", 1: "Y", 2: "R", 3: "R", 4: "R" },
  });
});

test("imitating a game", () => {
  expect(markWordieGuess("giant", "PEARL")).toStrictEqual({
    guess: "GIANT",
    mark: { 0: "R", 1: "R", 2: "G", 3: "R", 4: "R" },
  });
  expect(markWordieGuess("PRAMS", "pearl")).toStrictEqual({
    guess: "PRAMS",
    mark: { 0: "G", 1: "Y", 2: "G", 3: "R", 4: "R" },
  });
  expect(markWordieGuess("PLANK", "PEARL")).toStrictEqual({
    guess: "PLANK",
    mark: { 0: "G", 1: "Y", 2: "G", 3: "R", 4: "R" },
  });
  expect(markWordieGuess("PEARL", "PEARL")).toStrictEqual({
    guess: "PEARL",
    mark: { 0: "G", 1: "G", 2: "G", 3: "G", 4: "G" },
  });
});

test("more expansive tests", () => {
  expect(markWordieGuess("PURSE", "PUPPY")).toStrictEqual({
    guess: "PURSE",
    mark: { 0: "G", 1: "G", 2: "R", 3: "R", 4: "R" },
  });
  expect(markWordieGuess("PUPPY", "PURSE")).toStrictEqual({
    guess: "PUPPY",
    mark: { 0: "G", 1: "G", 2: "R", 3: "R", 4: "R" },
  });
  expect(markWordieGuess("YUMMY", "AYINM")).toStrictEqual({
    guess: "YUMMY",
    mark: { 0: "Y", 1: "R", 2: "Y", 3: "R", 4: "R" },
  });
  expect(markWordieGuess("GUMMY", "MAMMA")).toStrictEqual({
    guess: "GUMMY",
    mark: { 0: "R", 1: "R", 2: "G", 3: "G", 4: "R" },
  });
  expect(markWordieGuess("FLIES", "SLEEP")).toStrictEqual({
    guess: "FLIES",
    mark: { 0: "R", 1: "G", 2: "R", 3: "G", 4: "Y" },
  });
  expect(markWordieGuess("FLEES", "SLAEP")).toStrictEqual({
    guess: "FLEES",
    mark: { 0: "R", 1: "G", 2: "R", 3: "G", 4: "Y" },
  });
});
