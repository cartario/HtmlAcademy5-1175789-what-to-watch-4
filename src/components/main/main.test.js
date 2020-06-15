import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const MovieCard = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};

const Movies = [`Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`];

describe(`renderMain`, () => {
  it(`should render main movies info`, () => {
    const tree = renderer
      .create(<Main
        movies = {Movies}
        movieTitle = {MovieCard.TITLE}
        movieGenre = {MovieCard.GENRE}
        movieYear = {MovieCard.YEAR}
        onMovieButtonClick = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});