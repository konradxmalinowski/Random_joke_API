import { useRef, useState } from 'react';
import { JokeContext, JokePrototype, type Joke } from './JokeContext';

type JokeData = {
  error: boolean;
  category: string;
  type: 'single' | 'twopart';
  setup?: string;
  delivery?: string;
  joke?: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
};

const JokeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [joke, setJoke] = useState<Joke>(JokePrototype);

  const mainRef = useRef<null | HTMLElement>(null);
  const jokeRef = useRef<null | HTMLElement>(null);
  const didLikeRef = useRef<null | HTMLElement>(null);
  const seeMoreRef = useRef<null | HTMLElement>(null);
  const sureRef = useRef<null | HTMLElement>(null);
  const anywayRef = useRef<null | HTMLElement>(null);

  const refs: React.RefObject<HTMLElement | null>[] = [
    mainRef,
    jokeRef,
    didLikeRef,
    seeMoreRef,
    sureRef,
    anywayRef,
  ];

  const handleFetchJoke = async () => {
    try {
      const response: Response = await fetch(
        'https://sv443.net/jokeapi/v2/joke/Any?type=twopart',
        {
          method: 'GET',
        }
      );

      if (response.ok) {
        const data: JokeData = await response.json();

        const joke: Joke = {
          setup: data?.setup ?? '',
          delivery: data?.delivery ?? '',
        };

        setJoke(joke);
      }
    } catch (error) {
      console.log('Failed fetching joke', error);
    }
  };

  const hideAllSections = (): void => {
    refs.forEach((ref) => ref.current?.classList.remove('shown'));
  };

  const showJoke = (): void => {
    hideAllSections();
    jokeRef.current?.classList.add('shown');
  };
  const showMain = (): void => {
    hideAllSections();
    mainRef.current?.classList.add('shown');
  };
  const showDidLike = (): void => {
    hideAllSections();
    didLikeRef.current?.classList.add('shown');
  };
  const showSeeMore = (): void => {
    hideAllSections();
    seeMoreRef.current?.classList.add('shown');
  };
  const showSure = (): void => {
    hideAllSections();
    sureRef.current?.classList.add('shown');
  };
  const showAnyway = (): void => {
    hideAllSections();
    anywayRef.current?.classList.add('shown');
  };

  const jokeCtx: JokeContext = {
    joke,
    handleFetchJoke,
    showMain,
    showJoke,
    showDidLike,
    showSeeMore,
    showSure,
    showAnyway,
    mainRef,
    jokeRef,
    didLikeRef,
    seeMoreRef,
    sureRef,
    anywayRef,
  };

  return <JokeContext value={jokeCtx}>{children}</JokeContext>;
};

export default JokeContextProvider;
