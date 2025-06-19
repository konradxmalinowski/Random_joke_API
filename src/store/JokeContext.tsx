import { createContext } from 'react';

export type Joke = {
  setup: string;
  delivery: string;
};

export const JokePrototype = {
  setup: '',
  delivery: '',
};

export type JokeContext = {
  handleFetchJoke: () => void;
  joke: Joke;
  mainRef: React.RefObject<HTMLElement | null>;
  jokeRef: React.RefObject<HTMLElement | null>;
  didLikeRef: React.RefObject<HTMLElement | null>;
  seeMoreRef: React.RefObject<HTMLElement | null>;
  sureRef: React.RefObject<HTMLElement | null>;
  anywayRef: React.RefObject<HTMLElement | null>;
  showMain: () => void;
  showJoke: () => void;
  showDidLike: () => void;
  showSeeMore: () => void;
  showSure: () => void;
  showAnyway: () => void;
};

export const jokePrototype: JokeContext = {
  handleFetchJoke: () => {},
  joke: JokePrototype,
  mainRef: { current: null },
  jokeRef: { current: null },
  didLikeRef: { current: null },
  seeMoreRef: { current: null },
  sureRef: { current: null },
  anywayRef: { current: null },
  showMain: () => {},
  showJoke: () => {},
  showDidLike: () => {},
  showSeeMore: () => {},
  showSure: () => {},
  showAnyway: () => {},
};

export const JokeContext = createContext(jokePrototype);
