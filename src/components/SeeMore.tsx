import { useContext } from 'react';
import Wrapper from './Wrapper';
import { JokeContext } from '../store/JokeContext';
import Paragraph from './Paragraph';
import Button from './Button';
import Container from './Container';
import ButtonsWrapper from './ButtonsWrapper';

const SeeMore = () => {
  const { seeMoreRef, showSure, showDidLike } = useContext(JokeContext);
  return (
    <Container ref={seeMoreRef}>
      <Wrapper>
        <Paragraph label="Wanna see more??" />
        <ButtonsWrapper>
          <Button label="YASS" handleClick={showSure} />
          <Button label="NO" handleClick={showSure} />
        </ButtonsWrapper>
      </Wrapper>
      <Button type="back" handleClick={showDidLike} />
    </Container>
  );
};

export default SeeMore;
