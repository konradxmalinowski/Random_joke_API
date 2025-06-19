import { useContext } from 'react';
import Button from './Button';
import Wrapper from './Wrapper';
import { JokeContext } from '../store/JokeContext';
import Container from './Container';

const Main = () => {
  const { handleFetchJoke, showJoke, mainRef } = useContext(JokeContext);

  const handleClickShowJoke = (): void => {
    handleFetchJoke();
    showJoke();
  };

  return (
    <Container ref={mainRef}>
      <Wrapper className="bg-transparent">
        <Button label="Show joke" handleClick={handleClickShowJoke} />
      </Wrapper>
    </Container>
  );
};

export default Main;
