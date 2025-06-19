import { useContext } from 'react';
import Wrapper from './Wrapper';
import { JokeContext } from '../store/JokeContext';
import Paragraph from './Paragraph';
import Button from './Button';
import Container from './Container';
import ButtonsWrapper from './ButtonsWrapper';

const DidLike = () => {
  const { didLikeRef, showJoke, showSeeMore } = useContext(JokeContext);

  return (
    <Container ref={didLikeRef}>
      <Wrapper>
        <Paragraph label="Did you like it?" />
        <ButtonsWrapper>
          <Button label="YASS" handleClick={showSeeMore} />
          <Button label="NO" handleClick={showSeeMore} />
        </ButtonsWrapper>
      </Wrapper>
      <Button type="back" handleClick={showJoke} />
    </Container>
  );
};

export default DidLike;
