import { useContext, useEffect } from 'react';
import Anyway from './components/Anyway';
import DidLike from './components/DidLike';
import Joke from './components/Joke';
import Main from './components/Main';
import SeeMore from './components/SeeMore';
import Sure from './components/Sure';
import { JokeContext } from './store/JokeContext';

const App = () => {
  const { showMain } = useContext(JokeContext);

  useEffect(showMain, []);

  return (
    <>
      <Main />
      <Joke />
      <DidLike />
      <SeeMore />
      <Sure />
      <Anyway />
    </>
  );
};

export default App;
