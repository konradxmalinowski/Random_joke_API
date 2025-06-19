import { useContext } from 'react';
import Wrapper from './Wrapper';
import { JokeContext } from '../store/JokeContext';
import Paragraph from './Paragraph';
import Button from './Button';
import Container from './Container';
import ButtonsWrapper from './ButtonsWrapper';

const Sure = () => {
  const { sureRef, showSeeMore, showAnyway, showMain } =
    useContext(JokeContext);
  return (
    <Container ref={sureRef}>
      <Wrapper>
        <Paragraph label="Are you sure???" />
        <ButtonsWrapper>
          <Button label="YASS" handleClick={showMain} />
          <Button label="NO" handleClick={showAnyway} />
        </ButtonsWrapper>
      </Wrapper>
      <Button type="back" handleClick={showSeeMore} />
    </Container>
  );
};

export default Sure;
