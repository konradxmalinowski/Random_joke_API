import { useContext, useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { JokeContext } from '../store/JokeContext';
import Button from './Button';
import Container from './Container';

import arrowRight from '../assets/arrow-right.png';

const Joke = () => {
  const { jokeRef, joke, showMain, showDidLike } = useContext(JokeContext);
  const [isShown, setIsShown] = useState<boolean>(false);

  const showAnswer = () => {
    setIsShown(!isShown);
  };

  useEffect(() => {
    setIsShown(false);
  }, [joke]);

  return (
    <Container ref={jokeRef}>
      <Wrapper className="items-start">
        <h1 className="text-2xl font-semibold">Joke</h1>
        <p>{joke.setup}</p>
        <Button label={isShown ? 'Hide' : 'Answer'} handleClick={showAnswer} />
        <p className="italic">
          {joke.delivery && isShown ? joke.delivery : null}
        </p>

        {isShown && (
          <img
            src={arrowRight}
            alt="arrow right"
            onClick={showDidLike}
            className="absolute top-1/2 right-9 -translate-y-1/2"
          />
        )}
      </Wrapper>
      <Button
        type="back"
        handleClick={() => {
          showMain();
          setIsShown(false);
        }}
      />
    </Container>
  );
};

export default Joke;
