import {reducer} from "./films-by-genre.js";

describe(`test-reducer-films-by-genre`, () => {
  it(`should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      films: [],
      comments: [],
      filmsByGenre: [],
      isDataReady: false,
      newComment: {},
      isCommentLoading: false,
      isReviewError: false,
      isReviewSent: false,
    });
  });
});