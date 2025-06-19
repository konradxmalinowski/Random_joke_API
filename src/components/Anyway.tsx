import { useContext } from 'react';
import Wrapper from './Wrapper';
import { JokeContext } from '../store/JokeContext';
import Container from './Container';
import Paragraph from './Paragraph';
import Button from './Button';

const Anyway = () => {
  const { anywayRef, showMain, handleFetchJoke } = useContext(JokeContext);

  const handleClickSeeMore = () => {
    handleFetchJoke();
    showMain();
  };

  return (
    <Container ref={anywayRef}>
      <Wrapper>
        <Paragraph label="Your problem 🫵" />
        <Button label="Anyway see more" handleClick={handleClickSeeMore} />
      </Wrapper>
    </Container>
  );
};

export default Anyway;
